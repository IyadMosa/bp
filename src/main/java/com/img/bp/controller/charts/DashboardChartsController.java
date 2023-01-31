package com.img.bp.controller.charts;

import com.img.bp.model.DateRangeRequest;
import com.img.bp.model.Point;
import com.img.bp.service.DashboardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/charts/dashboard")
public class DashboardChartsController {

    private final DashboardService service;

    public DashboardChartsController(DashboardService service) {
        this.service = service;
    }

    @PostMapping("/all")
    public ResponseEntity<HashMap<String, List<Point>>> getAllComponentsPoints(@RequestBody DateRangeRequest dateRangeRequest) {
        return new ResponseEntity<>(service.getAllComponentsPoints(dateRangeRequest.getFrom(), dateRangeRequest.getTo()), HttpStatus.FOUND);
    }

}
