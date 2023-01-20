package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Deposit;
import com.img.bp.model.DatePoint;
import com.img.bp.model.Point;
import com.img.bp.repository.DepositRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

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

    public void delete(Deposit deposit) {
        repository.delete(deposit);
    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }

    public List<Point> getAllPointsByPerson() {
        HashMap<String, Point> map = new HashMap<>();
        findAll().forEach(deposit -> {
            String key = deposit.getPerson();
            Long value = deposit.getAmount();
            if (map.get(key) != null) {
                long total = map.get(key).getValue() + value;
                map.put(key, new Point(key, total));
            } else {
                map.put(key, new Point(key, value));
            }
        });
        return new ArrayList<>(map.values());
    }

    public Point getDepositPoint() {
        AtomicLong total = new AtomicLong();
        findAll().forEach(deposit -> {
            total.addAndGet(deposit.getAmount());
        });
        return new Point("deposit", total.get());
    }

    public List<DatePoint> getAllPointsByDate() {
        HashMap<String, DatePoint> map = new HashMap<>();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM/yyyy");
        List<Deposit> all = findAll();
        all.forEach(deposit -> {
            String key = simpleDateFormat.format(deposit.getDate());
            Long value = deposit.getAmount();
            if (map.get(key) != null) {
                long total = map.get(key).getValue() + value;
                map.put(key, new DatePoint(key, total));
            } else {
                map.put(key, new DatePoint(key, value));
            }
        });
        List<DatePoint> points = new ArrayList<>(map.values());
        return points;
    }


}
