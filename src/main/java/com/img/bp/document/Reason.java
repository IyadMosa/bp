package com.img.bp.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import static com.img.bp.helper.Constants.REASON_INDEX_NAME;

@Data
@Document(indexName = REASON_INDEX_NAME)
@AllArgsConstructor
@NoArgsConstructor
public class Reason {

    @Id
    @Field(type = FieldType.Text)
    private String id;

    @Field(type = FieldType.Text)
    private String name;
}
