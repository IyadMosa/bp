package com.img.bp.document;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.DateFormat;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.util.Date;

import static com.img.bp.helper.Constants.DATE_STANDER_FORMAT;
import static com.img.bp.helper.Constants.WITHDRAW_INDEX_NAME;

@Data
@Document(indexName = WITHDRAW_INDEX_NAME)
@AllArgsConstructor
public class Withdraw {

    @Id
    @Field(type = FieldType.Text)
    private String id;

    @Field(type = FieldType.Long)
    private Long amount;

    @Field(type = FieldType.Text)
    private String person;

    @Field(type = FieldType.Text)
    private String reason;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = DATE_STANDER_FORMAT)
    @Field(type = FieldType.Date)
    private Date date;
}
