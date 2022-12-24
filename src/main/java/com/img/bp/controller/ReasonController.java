package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.document.Reason;
import com.img.bp.service.ReasonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reason")
public class ReasonController {

    private final ReasonService service;

    public ReasonController(ReasonService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<?> add(@RequestBody Reason reason) throws Exception {
        service.add(reason);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Reason>> getAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.FOUND);
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody Reason reason) {
        service.delete(reason);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAll() {
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
