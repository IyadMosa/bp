package com.img.bp.controller.charts;

import com.img.bp.model.DateRangeRequest;
import com.img.bp.model.Point;
import com.img.bp.service.DepositService;
import com.img.bp.service.WithdrawService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/charts/withdraw")
public class WithdrawChartsController {

    private final WithdrawService service;
    private final DepositService depositService;

    public WithdrawChartsController(WithdrawService service, DepositService depositService) {
        this.service = service;
        this.depositService = depositService;
    }


    @PostMapping("/points-by-reason/{majorOnly}")
    public ResponseEntity<List<Point>> getAllPointsByReason(@PathVariable boolean majorOnly, @RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getAllPointsByReason(majorOnly, dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }

    @PostMapping("/point")
    public ResponseEntity<Point> getDepositPoint(@RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getWithdrawPoint(dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }

}
