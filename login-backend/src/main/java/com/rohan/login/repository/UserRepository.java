package com.rohan.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rohan.login.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	
	User findByUsernameAndPassword(String username,String password);
}
