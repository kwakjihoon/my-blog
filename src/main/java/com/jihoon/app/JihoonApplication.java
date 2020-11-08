package com.jihoon.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;


@ComponentScan("com.jihoon.**")
@SpringBootApplication
public class JihoonApplication {

    public static void main(String[] args) {
        SpringApplication.run(JihoonApplication.class, args);
    }

}
