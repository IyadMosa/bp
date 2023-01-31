package com.img.bp.service;

import com.img.bp.model.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class DashboardService {
    private final SearchService searchService;
    private final DepositService depositService;
    private final WithdrawService withdrawService;

    @Autowired
    public DashboardService(SearchService searchService, DepositService depositService, WithdrawService withdrawService) {
        this.depositService = depositService;
        this.withdrawService = withdrawService;
        this.searchService = searchService;
    }


    public HashMap<String, List<Point>> getAllComponentsPoints(Date from, Date to) {
        HashMap<String, List<Point>> map = new HashMap<>();

        map.computeIfAbsent("total", k -> {
            Point depositPoint = depositService.getDepositPoint(from, to);
            Point withdrawPoint = withdrawService.getWithdrawPoint(from, to);
            return Arrays.asList(depositPoint,
                    withdrawPoint,
                    new Point("diff", depositPoint.getValue() - withdrawPoint.getValue()));
        });
        map.computeIfAbsent("deposit_person", k -> depositService.getAllPointsByPerson(from, to));
        map.computeIfAbsent("deposit_date", k -> depositService.getAllPointsByDate(from, to));
        map.computeIfAbsent("withdraw_major", k -> withdrawService.getAllPointsByReason(true, from, to));
        map.computeIfAbsent("withdraw_minor", k -> withdrawService.getAllPointsByReason(false, from, to));
        return map;
    }
}
