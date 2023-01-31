package com.img.bp.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

import static com.img.bp.helper.Constants.DATE_STANDER_FORMAT_2;

@Data
public class DateRangeRequest {
    @DateTimeFormat(pattern = DATE_STANDER_FORMAT_2)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_STANDER_FORMAT_2)
    private Date from;
    @DateTimeFormat(pattern = DATE_STANDER_FORMAT_2)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_STANDER_FORMAT_2)
    private Date to;

}
