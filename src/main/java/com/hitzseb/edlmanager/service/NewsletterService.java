package com.hitzseb.edlmanager.service;

import com.hitzseb.edlmanager.model.Newsletter;
import com.hitzseb.edlmanager.repo.NewsletterRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsletterService {
    private final NewsletterRepo newsletterRepo;

    public List<Newsletter> getAllNewsletters() {
        return newsletterRepo.findAll();
    }

    public Newsletter getNewsletter(Long id) throws EntityNotFoundException {
        return newsletterRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Newsletter not found with id " + id));
    }

    public Newsletter saveNewsletter(Newsletter newsletter) {
        return newsletterRepo.save(newsletter);
    }

    public Newsletter updateNewsletter(Long id, Newsletter newsletter) throws EntityNotFoundException {
        newsletterRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Newsletter not found with id " + id));
        newsletter.setId(id);
        return newsletterRepo.save(newsletter);
    }

    public void deleteNewsletter(Long id) throws EntityNotFoundException {
        newsletterRepo.findById(id).orElseThrow(() -> new EntityNotFoundException("Newsletter not found with id " + id));
        newsletterRepo.deleteById(id);
    }
}
