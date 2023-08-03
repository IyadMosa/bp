package com.img.bp.repository;

import com.img.bp.document.Reason;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ReasonRepository extends ElasticsearchRepository<Reason, String> {
    Reason findFirstByName(String name);
    Reason findByMinor(String minor);
}
