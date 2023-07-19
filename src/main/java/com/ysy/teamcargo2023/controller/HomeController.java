package com.ysy.teamcargo2023.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HomeController {

  @GetMapping
  public String index() {
    return "index";
  }

}
