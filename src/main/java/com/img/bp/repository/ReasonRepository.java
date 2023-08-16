package com.img.bp.repository;

import com.img.bp.document.Reason;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

public interface ReasonRepository extends ElasticsearchRepository<Reason, String> {
    Reason findFirstByName(String name);

    Reason findByMinor(String minor);
}
