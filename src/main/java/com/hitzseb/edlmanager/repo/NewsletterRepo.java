package com.hitzseb.edlmanager.repo;

import com.hitzseb.edlmanager.model.Newsletter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewsletterRepo extends JpaRepository<Newsletter, Long> {
}
