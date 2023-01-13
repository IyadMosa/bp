package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.document.Withdraw;
import com.img.bp.model.WithdrawRequest;
import com.img.bp.service.DepositService;
import com.img.bp.service.WithdrawService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/withdraw")
public class WithdrawController {

    private final WithdrawService service;
    private final DepositService depositService;

    public WithdrawController(WithdrawService service, DepositService depositService) {
        this.service = service;
        this.depositService = depositService;
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody WithdrawRequest request) throws Exception {
        if (request == null) {
            throw new Exception("Withdraw request should be not empty");
        }
        Withdraw withdraw = request.getWithdraw();
        if (request.isAddToDeposit()) {
            Deposit deposit = new Deposit(null, withdraw.getAmount(), withdraw.getPerson(), withdraw.getDate());
            depositService.add(deposit);
        }
        service.add(withdraw);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Withdraw>> getAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.FOUND);
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody Withdraw withdraw) {
        service.delete(withdraw);
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
}
