package com.img.bp.service;

import com.google.common.collect.Lists;
import com.img.bp.document.Reason;
import com.img.bp.repository.ReasonRepository;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReasonService {


    private final ReasonRepository repository;

    private final RestHighLevelClient client;

    @Autowired
    public ReasonService(ReasonRepository repository, RestHighLevelClient client) {
        this.repository = repository;
        this.client = client;
    }

    public void add(Reason reason) throws Exception {
        reason.setName(reason.getMinor());
        repository.save(reason);
    }

    public List<Reason> findAll() {
        return Lists.newArrayList(repository.findAll());
    }

    public void delete(Reason reason) {
        repository.delete(reason);
    }

    public void deleteAll() {
        repository.deleteAll();
    }

    public String getMajorByName(String name) {
        try {
            return repository.findFirstByName(name).getMajor();
        }catch (Exception e){
            return null;
        }
    }

    public String getMinorByName(String name) {
        try {
            return repository.findFirstByName(name).getMinor();
        }catch (Exception e){
            return null;
        }
    }
}
