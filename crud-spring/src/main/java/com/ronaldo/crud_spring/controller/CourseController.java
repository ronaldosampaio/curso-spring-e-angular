package com.ronaldo.crud_spring.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ronaldo.crud_spring.model.Course;
import com.ronaldo.crud_spring.repository.CourseRepository;

import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/courses")
public class CourseController {

   
    private final CourseRepository courseRepository;

    
    // utilizar o @Autowired no private CourseRepository courseRepository; Se estiver usando o lombok use apenas AllArgsContructors ou usar contrutor abaixo
    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping("list")
    public List<Course> list(){
        return courseRepository.findAll();
    }

}
