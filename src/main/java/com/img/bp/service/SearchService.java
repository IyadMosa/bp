package com.img.bp.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Service
public class SearchService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final RestHighLevelClient client;

    public SearchService(RestHighLevelClient client) {
        this.client = client;
    }

    public <T> List<T> searchByDateRange(Class<T> clazz, String indexName, String field, Date from, Date to) {
        if (to == null) {
            to = new Date();
        }


        SearchRequest request = buildSearchRequest(indexName, field, new Timestamp(from.getTime()).getTime(), new Timestamp(to.getTime()).getTime());
        return searchInternal(request, clazz);
    }

    public static SearchRequest buildSearchRequest(final String indexName, final String field, Object from, Object to) {
        try {
            QueryBuilder searchQuery = getQueryBuilder(field, from, to);

            SearchSourceBuilder builder = new SearchSourceBuilder()
                    .postFilter(searchQuery)
                    .size(1000);

            if (StringUtils.hasLength(field)) {
                builder = builder.sort(field, SortOrder.ASC
                );
            }

            final SearchRequest request = new SearchRequest(indexName);
            request.source(builder);

            return request;
        } catch (final Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private static QueryBuilder getQueryBuilder(final String field, final Object from, final Object to) throws ParseException {
        return QueryBuilders.rangeQuery(field).gte(from).lte(to);

    }

    private <T> List<T> searchInternal(SearchRequest request, Class<T> clazz) {
        MAPPER.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        if (request == null) {
            return Collections.emptyList();
        }

        try {
            SearchResponse response = client.search(request, RequestOptions.DEFAULT);
            SearchHit[] searchHits = response.getHits().getHits();
            List<T> list = new ArrayList<>();
            for (SearchHit hit : searchHits) {
                try {
                    list.add(MAPPER.readValue(hit.getSourceAsString(), clazz));
                } catch (JsonProcessingException e) {
                    continue;
                }
            }
            return list;

        } catch (IOException e) {
            return Collections.emptyList();
        }
    }
}
