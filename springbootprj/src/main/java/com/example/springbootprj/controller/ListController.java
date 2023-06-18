package com.example.springbootprj.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ListController {
  @GetMapping(value = "/list")
  public void getMethodName() {
    // return "demo";
  }
}
