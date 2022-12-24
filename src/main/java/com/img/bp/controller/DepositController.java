package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.service.DepositService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/deposit")
public class DepositController {

    private final DepositService service;

    public DepositController(DepositService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<?> add(@RequestBody Deposit deposit) throws Exception {
        deposit.setDate(new Date());
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

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAll() {
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
