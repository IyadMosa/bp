package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.document.Withdraw;
import com.img.bp.model.withdrawRequest;
import com.img.bp.service.DepositService;
import com.img.bp.service.WithdrawService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static com.img.bp.helper.Constants.DATE_STANDER_FORMAT;

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
        if (request == null) {
            throw new Exception("Withdraw request should be not empty");
        }
        Date date = new Date();
        if (StringUtils.hasLength(request.getDate())) {
            SimpleDateFormat formatter = new SimpleDateFormat(DATE_STANDER_FORMAT);
            date = formatter.parse(request.getDate());
            date.setHours(4);
        }
        Withdraw withdraw = new Withdraw(request.getId(), request.getAmount(), request.getPerson(), request.getReason(), date);
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

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAll() {
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
