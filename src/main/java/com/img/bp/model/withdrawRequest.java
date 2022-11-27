package com.img.bp.model;

import com.img.bp.document.Withdraw;
import lombok.Data;

@Data
public class withdrawRequest {
    private boolean isAddToDeposit;
    private Withdraw withdraw;
}
