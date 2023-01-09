package com.img.bp.service.backup;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.MessageFormat;
import java.util.List;
import java.util.function.Predicate;

import static com.img.bp.helper.Constants.VERSION;
import static com.img.bp.service.backup.BackupService.VERSION_PROPERTY;

public class BackupUtils {
    private static final Logger log = LoggerFactory.getLogger(BackupService.class);
    private final ObjectMapper mapper;
    private final JsonFactory factory;

    public BackupUtils() {
        mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.INDENT_OUTPUT);
        factory = new JsonFactory();
    }

    //----------------------------------//
    //--------- IMPORT Methods ---------//
    //----------------------------------//
    public static int importBackup(JsonParser parser, List<ImportPredicate> predicates) throws IOException {

        int n = 0;
        while (parser.nextToken() != JsonToken.END_OBJECT) {

            if (parser.getCurrentToken() != JsonToken.FIELD_NAME) {
                throw new IllegalArgumentException("Expected a JSON field name.");
            }

            var property = parser.getCurrentName();
            ImportPredicate importPredicate = predicates.stream().filter(predicate -> predicate.getProperty().equals(property)).findFirst().get();
            if (importPredicate != null) {
                n += parseArray(parser, property, importPredicate.getImporter());
            }
        }

        return n;
    }

    private static int parseArray(JsonParser parser, String property, Predicate<JsonParser> importer) throws IOException {
        if (parser.nextToken() != JsonToken.START_ARRAY) {
            if (parser.currentToken() == JsonToken.VALUE_NULL) {
                return 0;
            } else {
                throw new IllegalArgumentException(MessageFormat.format("Property {0} must be an array.", property));
            }
        }

        int n = 0;
        while (parser.nextToken() != JsonToken.END_ARRAY) {
            if (importer.test(parser)) {
                ++n;
            }
        }
        return n;
    }

    public static <T, U> boolean saveEntity(ElasticsearchRepository<T, U> repo, T entity, U id) {
        if (entity == null) {
            return false;
        }
        if (repo.existsById(id)) {
            log.error("Duplicate {} {} in import ignored", entity.getClass().getSimpleName(), id);
            return false;
        }
        repo.save(entity);
        return true;
    }


    //----------------------------------//
    //--------- EXPORT Methods ---------//
    //----------------------------------//
    @Transactional
    public static void exportBackup(JsonFactory factory, ObjectMapper mapper, OutputStream os,
                                    List<BackupSupplier> suppliers) throws IOException {

        try (var generator = factory.createGenerator(os)) {
            generator.setCodec(mapper);
            generator.writeStartObject();
            //Version MUST be first property
            generator.writeStringField(VERSION_PROPERTY, VERSION);
            suppliers.forEach(supplier -> {
                try {
                    var resultList = supplier.getSupplier().get();
                    generator.writeFieldName(supplier.getProperty());

                    generator.writeStartArray();
                    for (var template : resultList) {
                        generator.writeObject(template);
                    }
                    generator.writeEndArray();
                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            generator.writeEndObject();
        } finally {
            os.close();
        }
    }

}
