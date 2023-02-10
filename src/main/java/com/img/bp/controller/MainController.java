package com.img.bp.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@RestController
public class MainController {
    @GetMapping(value = "/{path:[^\\.]*}")
    public ResponseEntity<String> redirect() {
        ClassPathResource indexHtml = new ClassPathResource("public/index.html");
        try {
            String content = IOUtils.toString(indexHtml.getInputStream(), String.valueOf(StandardCharsets.UTF_8));
            return ResponseEntity.ok(content);
        } catch (IOException e) {
            return ResponseEntity.notFound().build();
        }
    }
}