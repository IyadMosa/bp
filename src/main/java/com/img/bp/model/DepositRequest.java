package com.img.bp.model;

import com.img.bp.document.Deposit;
import com.img.bp.document.Withdraw;
import lombok.Data;

@Data
public class DepositRequest {
    private Deposit deposit;
}
