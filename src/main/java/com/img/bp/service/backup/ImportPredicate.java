package com.img.bp.service.backup;

import com.fasterxml.jackson.core.JsonParser;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.function.Predicate;

@Data
@AllArgsConstructor
public class ImportPredicate {
    private String property;
    private Predicate<JsonParser> importer;
}
