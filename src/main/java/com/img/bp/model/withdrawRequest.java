package com.img.bp.model;

import lombok.Data;

@Data
public class withdrawRequest {
    private boolean addToDeposit;
    private String id;
    private Long amount;
    private String person;
    private String reason;
    private String date;
}
