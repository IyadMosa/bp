package com.img.bp.service;

import com.google.common.collect.Lists;
import com.img.bp.document.Person;
import com.img.bp.repository.PersonRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {
    private final PersonRepository repository;

    private final RestHighLevelClient client;

    @Autowired
    public PersonService(PersonRepository repository, RestHighLevelClient client) {
        this.repository = repository;
        this.client = client;
    }

    public void add(Person person) throws Exception {
        repository.save(person);
    }

    public List<Person> findAll() {
        return Lists.newArrayList(repository.findAll());
    }

    public void delete(Person person) {
        repository.delete(person);
    }

    public void deleteAll() {
        repository.deleteAll();
    }
}
