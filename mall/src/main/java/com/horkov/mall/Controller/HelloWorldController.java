package com.horkov.mall.Controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HelloWorldController {
    @RequestMapping({ "/hello" })
    public String firstPage() {
        return "Hello. you have valid JWT (JSon Web Token)!";
    }
}
