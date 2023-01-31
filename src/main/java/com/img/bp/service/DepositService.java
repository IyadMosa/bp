package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Deposit;
import com.img.bp.model.Point;
import com.img.bp.repository.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import static com.img.bp.helper.Constants.DEPOSIT_INDEX_NAME;

@Service
public class DepositService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final DepositRepository repository;


    private final SearchService searchService;

    @Autowired
    public DepositService(DepositRepository repository, SearchService searchService) {
        this.repository = repository;
        this.searchService = searchService;
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


    private List<Deposit> getDepositsList(Date from, Date to) {
        List<Deposit> list;
        if (from == null) {
            list = findAll();
        } else {
            if (to == null) {
                to = new Date();
            }
            list = searchService.searchByDateRange(Deposit.class, DEPOSIT_INDEX_NAME, "date", from, to);
        }
        return list;
    }

    public List<Point> getAllPointsByPerson(Date from, Date to) {
        HashMap<String, Point> map = new HashMap<>();
        List<Deposit> list = getDepositsList(from, to);
        list.forEach(deposit -> {
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

    public Point getDepositPoint(Date from, Date to) {
        AtomicLong total = new AtomicLong();
        List<Deposit> list = getDepositsList(from, to);
        list.forEach(deposit -> {
            total.addAndGet(deposit.getAmount());
        });
        return new Point("Deposit", total.get());
    }

    public List<Point> getAllPointsByDate(Date from, Date to) {
        HashMap<String, Point> map = new HashMap<>();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("MM/yyyy");
        List<Deposit> list = getDepositsList(from, to);
        list.forEach(deposit -> {
            String key = simpleDateFormat.format(deposit.getDate());
            Long value = deposit.getAmount();
            if (map.get(key) != null) {
                long total = map.get(key).getValue() + value;
                map.put(key, new Point(key, total));
            } else {
                map.put(key, new Point(key, value));
            }
        });
        List<Point> points = new ArrayList<>(map.values());
        return points;
    }


}
