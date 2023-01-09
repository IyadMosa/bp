package com.img.bp.service.backup;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.google.common.collect.Lists;
import com.img.bp.document.Deposit;
import com.img.bp.document.Person;
import com.img.bp.document.Reason;
import com.img.bp.document.Withdraw;
import com.img.bp.repository.DepositRepository;
import com.img.bp.repository.PersonRepository;
import com.img.bp.repository.ReasonRepository;
import com.img.bp.repository.WithdrawRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StreamUtils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import static com.img.bp.helper.Constants.VERSION;
import static com.img.bp.service.backup.BackupUtils.saveEntity;

@Service
public class BackupService {

    //------------------------------------------------------------------------
    // Class Data
    //------------------------------------------------------------------------

    private static final String WITHDRAWS_PROPERTY = "withdraws";
    private static final String DEPOSITS_PROPERTY = "deposits";
    private static final String PERSONS_PROPERTY = "persons";
    private static final String REASONS_PROPERTY = "reasons";
    public static final String VERSION_PROPERTY = "version";

    //------------------------------------------------------------------------
    // Instance Data
    //------------------------------------------------------------------------
    private final ObjectMapper mapper;
    private final JsonFactory factory;


    private final DepositRepository depositRepository;


    private final WithdrawRepository withdrawRepository;


    private final PersonRepository personRepository;


    private final ReasonRepository reasonRepository;

    public BackupService(DepositRepository depositRepository, WithdrawRepository withdrawRepository, PersonRepository personRepository, ReasonRepository reasonRepository) {
        this.depositRepository = depositRepository;
        this.withdrawRepository = withdrawRepository;
        this.personRepository = personRepository;
        this.reasonRepository = reasonRepository;
        mapper = new ObjectMapper();
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.INDENT_OUTPUT);
        factory = new JsonFactory();
    }

    @Transactional
    public void exportBackup(OutputStream os) throws IOException {
        List<BackupSupplier> suppliers = new ArrayList<>();
        suppliers.add(new BackupSupplier(WITHDRAWS_PROPERTY, () -> Lists.newArrayList(withdrawRepository.findAll())));
        suppliers.add(new BackupSupplier(DEPOSITS_PROPERTY, () -> Lists.newArrayList(depositRepository.findAll())));
        suppliers.add(new BackupSupplier(PERSONS_PROPERTY, () -> Lists.newArrayList(personRepository.findAll())));
        suppliers.add(new BackupSupplier(REASONS_PROPERTY, () -> Lists.newArrayList(reasonRepository.findAll())));
        BackupUtils.exportBackup(factory, mapper, os, suppliers);
    }

    @Transactional
    public void clearDatabase() {
        personRepository.deleteAll();
        depositRepository.deleteAll();
        withdrawRepository.deleteAll();
        reasonRepository.deleteAll();
    }

    @Transactional
    public int importBackup(InputStream is) throws IOException {

        try (JsonParser parser = mapper.getFactory().createParser(is)) {

            if (parser.nextToken() != JsonToken.START_OBJECT) {
                throw new IllegalArgumentException("Expected JSON object.");
            }

            if (parser.nextValue() != JsonToken.VALUE_STRING ||
                    !StringUtils.equals(VERSION_PROPERTY, parser.currentName())) {
                throw new IllegalArgumentException("Expected Version property.");
            }
            clearDatabase();
            List<ImportPredicate> predicates = new ArrayList<>();
            predicates.add(new ImportPredicate(WITHDRAWS_PROPERTY, this::importWithdraw));
            predicates.add(new ImportPredicate(DEPOSITS_PROPERTY, this::importDeposit));
            predicates.add(new ImportPredicate(PERSONS_PROPERTY, this::importPerson));
            predicates.add(new ImportPredicate(REASONS_PROPERTY, this::importReason));
            return BackupUtils.importBackup(parser, predicates);
        } catch (JsonParseException ex) {
            throw new IllegalArgumentException(ex.getMessage(), ex);
        } finally {
            is.close();
            StreamUtils.emptyInput();
        }
    }


    @Transactional
    boolean importWithdraw(JsonParser parser) {
        try {
            var withdraw = mapper.readValue(parser, Withdraw.class);
            return withdraw != null && saveEntity(withdrawRepository, withdraw, withdraw.getId());
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }


    @Transactional
    boolean importDeposit(JsonParser parser) {
        try {
            var deposit = mapper.readValue(parser, Deposit.class);
            return deposit != null && saveEntity(depositRepository, deposit, deposit.getId());
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }


    @Transactional
    boolean importPerson(JsonParser parser) {
        try {
            var person = mapper.readValue(parser, Person.class);
            return person != null && saveEntity(personRepository, person, person.getId());
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }

    @Transactional
    boolean importReason(JsonParser parser) {
        try {
            var reason = mapper.readValue(parser, Reason.class);
            return reason != null && saveEntity(reasonRepository, reason, reason.getId());
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }




}
