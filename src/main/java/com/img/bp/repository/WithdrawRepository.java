package com.img.bp.repository;

import com.img.bp.document.Withdraw;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface WithdrawRepository extends ElasticsearchRepository<Withdraw, String> {
}
