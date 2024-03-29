package com.img.bp.service;

import com.google.common.collect.Lists;
import com.img.bp.document.Reason;
import com.img.bp.repository.ReasonRepository;
import org.apache.commons.lang3.StringUtils;
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
        if (StringUtils.isEmpty(reason.getName())) {
            reason.setName(reason.getMajor() + "-" + reason.getMinor() + "-" + reason.getMinor2());
        }
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
        } catch (Exception e) {
            return null;
        }
    }

    public String getMinorByName(String name) {
        try {
            return repository.findFirstByName(name).getMinor();
        } catch (Exception e) {
            return null;
        }
    }

    public String getPropertyByName(String name, String property) {
        try {
            String key = null;
            switch (property) {
                case "major":
                    key = repository.findFirstByName(name).getMajor();
                    break;
                case "minor":
                    key = repository.findFirstByName(name).getMinor();
                    break;
                case "minor2":
                    key = repository.findFirstByName(name).getMinor2();
                    break;
            }
            return key;
        } catch (Exception e) {
            return null;
        }
    }
}
