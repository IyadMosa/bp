package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Withdraw;
import com.img.bp.repository.WithdrawRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WithdrawService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final WithdrawRepository repository;

    private final RestHighLevelClient client;

    @Autowired
    public WithdrawService(WithdrawRepository repository, RestHighLevelClient client) {
        this.repository = repository;
        this.client = client;
    }

    public void add(Withdraw withdraw) throws Exception {
        repository.save(withdraw);
    }

    public List<Withdraw> findAll() {
        return Lists.newArrayList(repository.findAll());
    }

    public void delete(Withdraw withdraw) {
        repository.delete(withdraw);
    }

    public void deleteAll() {
        repository.deleteAll();
    }
    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
