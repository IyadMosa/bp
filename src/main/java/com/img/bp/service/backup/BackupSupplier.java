package com.img.bp.service.backup;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.function.Supplier;

@Data
@AllArgsConstructor
public class BackupSupplier {
    private String property;
    private Supplier<List<Object>> supplier;
}
