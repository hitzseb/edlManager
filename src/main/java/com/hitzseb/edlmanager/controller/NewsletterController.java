package com.hitzseb.edlmanager.controller;

import com.hitzseb.edlmanager.model.Newsletter;
import com.hitzseb.edlmanager.service.NewsletterService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/newsletter")
@RequiredArgsConstructor
public class NewsletterController {
    private final NewsletterService newsletterService;

    @GetMapping
    public ResponseEntity<List<Newsletter>> getAllNewsletters() {
        return ResponseEntity.ok().body(newsletterService.getAllNewsletters());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getNewsletter(@PathVariable Long id) {
        try {
            return ResponseEntity.ok().body(newsletterService.getNewsletter(id));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Newsletter> createNewsletter(@RequestBody Newsletter newsletter) {
        return ResponseEntity.ok(newsletterService.saveNewsletter(newsletter));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editNewsletter(@PathVariable Long id, @RequestBody Newsletter newsletter) {
        try {
            return ResponseEntity.ok().body(newsletterService.updateNewsletter(id, newsletter));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteNewsletter(@PathVariable Long id) {
        try {
            newsletterService.deleteNewsletter(id);
            return ResponseEntity.ok().body("Successfully deleted Newsletter with id " + id);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
