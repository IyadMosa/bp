package com.img.bp.controller;


import com.img.bp.service.backup.BackupService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.*;

@RestController
@RequestMapping("/api/database")
public class BackupRestService {

    @SuppressWarnings("unused")
    Logger logger = LoggerFactory.getLogger(BackupRestService.class);

    private final BackupService backupService;

    @Autowired
    public BackupRestService(BackupService backupService) {
        this.backupService = backupService;
    }

    @Operation(
            operationId = "downloadBackup",
            summary = "Get backup",
            description = "Backup all(except for read-only)",
            tags = {"Backup"},
            responses = {
                    @ApiResponse(responseCode = "200", description = "OK", content = @Content(schema =
                    @Schema(implementation = String.class)))})
    @GetMapping
    @Produces({MediaType.APPLICATION_JSON})
    public void downloadBackup(HttpServletResponse response) throws Exception {
        String fileName = "data-backup.json";
        OutputStream os = new FileOutputStream(fileName);
        backupService.exportBackup(os);
        response.addHeader("content-disposition", "attachment; filename=" + fileName);
        copyToStream(fileName, response.getOutputStream());
    }

    @Operation(
            operationId = "uploadBackup",
            summary = "Restore backup",
            description = "Replace all of the policy editor's policy templates with those in backup (except for read-only)",
            tags = {"Backup"},
            responses = {
                    @ApiResponse(responseCode = "204", description = "No Content", content = @Content(schema =
                    @Schema(implementation = String.class)))})
    @PostMapping
    @Consumes({MediaType.APPLICATION_JSON})
    public Response uploadBackup(
            @RequestParam("file") MultipartFile file
    ) throws IOException {
        try {
            backupService.importBackup(file.getInputStream());
            return Response.noContent().build();
        } catch (IOException e) {
            throw e;
        }
    }

    @Operation(
            operationId = "deleteBackup",
            summary = "Delete templates",
            description = "Delete all templates except for read-only templates",
            tags = {"Backup"},
            responses = {
                    @ApiResponse(responseCode = "204", description = "No Content", content = @Content(schema =
                    @Schema(implementation = String.class)))})
    @DeleteMapping
    public void deleteBackup() {
        backupService.clearDatabase();
    }

    public void copyToStream(String from, OutputStream to) throws Exception {
        try (InputStream in = new FileInputStream(from)) {
            copy(in, to);
        }
    }

    public void copy(InputStream in, OutputStream out) throws Exception {
        byte buffer[] = new byte[1024];
        while (true) {
            int read = in.read(buffer);
            if (read == -1) {
                break;
            }
            out.write(buffer, 0, read);
        }
    }
}
