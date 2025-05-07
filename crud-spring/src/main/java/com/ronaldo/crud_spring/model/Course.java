package com.ronaldo.crud_spring.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
 
@Entity
@Data // Caso não precisar criar get e seters manual utiliza @Data debaixo dos panos ele cria autmomaticamente
@Table(name="course")//Caso sua tabela seja o nome da entidade Courses não é necessario utilizar @Table
public class Course {

    @Id // significa que essa anotação é chave primaria
    @GeneratedValue(strategy= GenerationType.AUTO) // gera uma id ao inserir dados automaticamente
    
    //@JsonProperty("_id") // transforma id em _id
    //@JsonIgnore // ignora o atributo id
    private long id;

    @Column(name = "name", length = 200, nullable = false)// nullable não aceita valores null
    private String name;

    @Column(name = "category", length = 10, nullable = false)
    private String category;
    
}
