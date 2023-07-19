package com.hitzseb.edlmanager.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "newsletters")
public class Newsletter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String url;
    private String image;
    @Column(columnDefinition = "TEXT")
    private String preview;
    private LocalDateTime creationDate = LocalDateTime.now();
    @Nullable
    @OneToMany(cascade = CascadeType.ALL)
    private List<SecondaryNews> secondaryNewsList;
    @Nullable
    @OneToMany(cascade = CascadeType.ALL)
    private List<IncomingEvent> incomingEventList;
}
