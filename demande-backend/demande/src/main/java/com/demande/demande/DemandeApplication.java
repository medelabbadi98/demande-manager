package com.demande.demande;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.demande.demande",
        "com.demande.demande.dtos.converters",
        "com.demande.demande.utils",
        "com.demande.demande.services",
        "com.demande.demande.repos",
        "com.demande.demande.controllers"
})
public class DemandeApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemandeApplication.class, args);
    }

}
