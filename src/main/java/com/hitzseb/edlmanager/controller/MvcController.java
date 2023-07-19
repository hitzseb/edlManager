package com.hitzseb.edlmanager.controller;

import com.hitzseb.edlmanager.model.User;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MvcController {
    @GetMapping
    public String showHome(Model model) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = user.getUsername();
        model.addAttribute("username", username);
        return "home";
    }

    @GetMapping("/newsletter")
    public String showNewsletterList() {
        return "newsletter-list";
    }

    @GetMapping("/newsletter/{id}")
    public String showNewsletter() {
        return "newsletter-detail";
    }

    @GetMapping("/newsletter/create")
    public String showNewsletterCreate() {
        return "newsletter-create";
    }

    @GetMapping("/newsletter/update/{id}")
    public String showNewsletterUpdate() {
        return "newsletter-update";
    }
}
