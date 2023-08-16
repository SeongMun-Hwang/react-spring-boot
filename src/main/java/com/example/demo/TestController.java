package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class TestController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("hello")
    public Post[] hello() {
        String url = "https://jsonplaceholder.typicode.com/posts";
        return restTemplate.getForObject(url, Post[].class);
    }
}
