package com.img.bp.model;

import com.img.bp.document.Withdraw;
import lombok.Data;

@Data
public class WithdrawRequest {
    private boolean addToDeposit;
    private Withdraw withdraw;
}
