package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.document.Withdraw;
import com.img.bp.model.withdrawRequest;
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
    public ResponseEntity<?> add(@RequestBody withdrawRequest request) throws Exception {
        if (request.getWithdraw() == null) {
            throw new Exception("Withdraw should be not empty");
        }
        Withdraw withdraw = request.getWithdraw();
        withdraw.setDate(new Date());
        if (request.isAddToDeposit()) {
            Deposit deposit = new Deposit(null, withdraw.getAmount(), withdraw.getPerson(), withdraw.getDate());
            depositService.add(deposit);
        }
        service.add(request.getWithdraw());
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Withdraw>> getAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.FOUND);
    }
}
