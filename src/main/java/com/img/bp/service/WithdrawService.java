package com.img.bp.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.collect.Lists;
import com.img.bp.document.Withdraw;
import com.img.bp.model.Point;
import com.img.bp.repository.WithdrawRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import static com.img.bp.helper.Constants.WITHDRAW_INDEX_NAME;

@Service
public class WithdrawService {

    private static final ObjectMapper MAPPER = new ObjectMapper();

    private final WithdrawRepository repository;

    private final ReasonService reasonService;

    private final SearchService searchService;

    @Autowired
    public WithdrawService(WithdrawRepository repository, ReasonService reasonService, SearchService searchService) {
        this.repository = repository;
        this.searchService = searchService;
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

    //Charts
    private List<Withdraw> getWithdrawsList(Date from, Date to) {
        List<Withdraw> list;
        if (from == null) {
            list = findAll();
        } else {
            list = searchService.searchByDateRange(Withdraw.class, WITHDRAW_INDEX_NAME, "date", from, to);
        }
        return list;
    }

    public List<Point> getAllPointsByReason(boolean majorOnly, boolean minorOnly, Date from, Date to) {
        HashMap<String, Point> map = new HashMap<>();
        List<Withdraw> list = getWithdrawsList(from, to);
        list.forEach(withdraw -> {
            String key = withdraw.getReason();
            if (majorOnly) {
                key = reasonService.getMajorByName(key);
            }
            if (minorOnly) {
                key = reasonService.getMinorByName(key);
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

    public Point getWithdrawPoint(Date from, Date to) {
        AtomicLong total = new AtomicLong();
        List<Withdraw> list = getWithdrawsList(from, to);
        list.forEach(deposit -> {
            total.addAndGet(deposit.getAmount());
        });
        return new Point("Withdraw", total.get());
    }


}
