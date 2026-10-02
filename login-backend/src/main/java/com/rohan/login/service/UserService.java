package com.rohan.login.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rohan.login.entity.User;
import com.rohan.login.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public String login(String username,String password)
	{
		User user=userRepository.findByUsernameAndPassword(username,password);
		if(user != null)
		{
			return "Login Successful";
		}
		return "Invalid Username or Password";
	}
}
