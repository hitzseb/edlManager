//package com.hitzseb.edlmanager.config;
//
//import com.hitzseb.edlmanager.model.Role;
//import com.hitzseb.edlmanager.model.User;
//import com.hitzseb.edlmanager.service.UserService;
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.ApplicationArguments;
//import org.springframework.boot.ApplicationRunner;
//import org.springframework.stereotype.Component;
//
//@Component
//@RequiredArgsConstructor
//public class AppRunner implements ApplicationRunner {
//    private final UserService userService;
//
//    @Override
//    public void run(ApplicationArguments args) throws Exception {
//        User user = new User();
//        user.setUsername("admin");
//        user.setPassword("admin");
//        user.setRole(Role.ADMIN);
//        userService.register(user);
//    }
//}
