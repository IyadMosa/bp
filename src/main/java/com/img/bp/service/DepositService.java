package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Deposit;
import com.img.bp.repository.DepositRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepositService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final DepositRepository repository;

    private final RestHighLevelClient client;

    @Autowired
    public DepositService(DepositRepository repository, RestHighLevelClient client) {
        this.repository = repository;
        this.client = client;
    }

    public void add(Deposit deposit) throws Exception {
        repository.save(deposit);
    }

    public List<Deposit> findAll() {
        return Lists.newArrayList(repository.findAll());
    }
}
