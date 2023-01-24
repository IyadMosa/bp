package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Withdraw;
import com.img.bp.model.Point;
import com.img.bp.repository.WithdrawRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class WithdrawService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final WithdrawRepository repository;

    private final RestHighLevelClient client;
    private final ReasonService reasonService;

    @Autowired
    public WithdrawService(WithdrawRepository repository, RestHighLevelClient client, ReasonService reasonService) {
        this.repository = repository;
        this.client = client;
        this.reasonService = reasonService;
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

    public List<Point> getAllPointsByReason(boolean majorOnly) {
        HashMap<String, Point> map = new HashMap<>();
        findAll().forEach(withdraw -> {
            String key = withdraw.getReason();
            if (majorOnly) {
                key =reasonService.getMajorByMinor(key);
            }
            Long value = withdraw.getAmount();
            if (map.get(key) != null) {
                long total = map.get(key).getValue() + value;
                map.put(key, new Point(key, total));
            } else {
                map.put(key, new Point(key, value));
            }
        });
        return new ArrayList<>(map.values());
    }

    public Point getWithdrawPoint() {
        AtomicLong total = new AtomicLong();
        findAll().forEach(deposit -> {
            total.addAndGet(deposit.getAmount());
        });
        return new Point("Withdraw", total.get());
    }
}
