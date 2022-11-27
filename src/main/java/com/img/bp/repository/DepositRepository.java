package com.img.bp.repository;

import com.img.bp.document.Deposit;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface DepositRepository extends ElasticsearchRepository<Deposit, String> {
}
