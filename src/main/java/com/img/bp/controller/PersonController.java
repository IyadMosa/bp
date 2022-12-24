package com.img.bp.controller;

import com.img.bp.document.Deposit;
import com.img.bp.document.Person;
import com.img.bp.service.DepositService;
import com.img.bp.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    private final PersonService service;

    public PersonController(PersonService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<?> add(@RequestBody Person person) throws Exception {
        service.add(person);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Person>> getAll() {
        return new ResponseEntity<>(service.findAll(), HttpStatus.FOUND);
    }

    @DeleteMapping
    public ResponseEntity<Void> delete(@RequestBody Person person) {
        service.delete(person);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Void> deleteAll() {
        service.deleteAll();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
