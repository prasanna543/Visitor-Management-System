package com.project.vms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.vms.model.User;
import com.project.vms.repository.UserRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/getAllUsers")
	public List<User> getUsers() {
		return userRepository.findAll();
	}
	
	@PostMapping("/saveUser") 
	public User saveUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@GetMapping("/isExists/{username}/{password}")
	public User isExsits(@PathVariable("username") String username, @PathVariable("password") String password) {
		return userRepository.isUserExist(username, password);
	}
	
	@DeleteMapping("/removeUser/{id}")
	public void userDelete(@PathVariable("id")int id) {
		User user = userRepository.findByUserId(id);
		userRepository.delete(user);
	}
}
