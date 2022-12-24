package com.img.bp.document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import static com.img.bp.helper.Constants.PERSON_INDEX_NAME;

@Data
@Document(indexName = PERSON_INDEX_NAME)
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @Id
    @Field(type = FieldType.Text)
    private String id;

    @Field(type = FieldType.Text)
    private String name;

    @Field(type = FieldType.Text)
    private String phone;
}
