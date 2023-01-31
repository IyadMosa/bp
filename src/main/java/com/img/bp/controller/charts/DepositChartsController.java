package com.img.bp.controller.charts;

import com.img.bp.model.DatePoint;
import com.img.bp.model.DateRangeRequest;
import com.img.bp.model.Point;
import com.img.bp.service.DepositService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/charts/deposit")
public class DepositChartsController {

    private final DepositService service;

    public DepositChartsController(DepositService service) {
        this.service = service;
    }


    @PostMapping("/point")
    public ResponseEntity<Point> getDepositPoint(@RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getDepositPoint(dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }

    @PostMapping("/points-by-person")
    public ResponseEntity<List<Point>> getAllPointsByPerson(@RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getAllPointsByPerson(dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }

    @GetMapping("/points-by-date")
    public ResponseEntity<List<DatePoint>> getAllPointsByDate(@RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getAllPointsByDate(dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }
}
