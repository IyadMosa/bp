package com.img.bp.repository;

import com.img.bp.document.Deposit;
import com.img.bp.document.Reason;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface ReasonRepository extends ElasticsearchRepository<Reason, String> {
    Reason findFirstByMinor(String minor);
    Reason findByMinor(String minor);
}
