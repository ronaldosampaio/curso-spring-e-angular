package com.ronaldo.crud_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

/* 
	//cria metodo inicial para teste dados chumbado salvando no banco de dados
	@Bean
	CommandLineRunner initDataBase(CourseRepository courseRepository){
        //adicionar informações no banco de dados
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Spring com Angular");
			c.setCategory("Front-End");

			c.setName("Spring");
			c.setCategory("Back-End");

			c.setName("Angular");
			c.setCategory("Front-End");

			courseRepository.save(c);
		};
	}
	*/

}
