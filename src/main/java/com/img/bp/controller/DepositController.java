package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.model.DatePoint;
import com.img.bp.model.DepositRequest;
import com.img.bp.model.Point;
import com.img.bp.service.DepositService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/deposit")
public class DepositController {

    private final DepositService service;

    public DepositController(DepositService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<?> add(@RequestBody DepositRequest request) throws Exception {
        Deposit deposit = request.getDeposit();
        service.add(deposit);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Deposit>> getAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.FOUND);
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody Deposit deposit) {
        service.delete(deposit);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable String id) {
        service.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAll() {
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/points-by-person")
    public ResponseEntity<List<Point>> getAllPointsByPerson() {
        return new ResponseEntity<>(service.getAllPointsByPerson(), HttpStatus.FOUND);
    }

    @GetMapping("/point")
    public ResponseEntity<Point> getDepositPoint() {
        return new ResponseEntity<>(service.getDepositPoint(), HttpStatus.FOUND);
    }

    @GetMapping("/points-by-date")
    public ResponseEntity<List<DatePoint>> getAllPointsByDate() {
        return new ResponseEntity<>(service.getAllPointsByDate(), HttpStatus.FOUND);
    }
}
