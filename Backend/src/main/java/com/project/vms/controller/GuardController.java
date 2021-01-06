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

import com.project.vms.model.Guard;
import com.project.vms.repository.GuardRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class GuardController {
	@Autowired
	private GuardRepository guardRepository;
	
	@GetMapping("/getGuardList")
	public List<Guard> getGuardList() {
		return guardRepository.findAll();
	}
	
	@PostMapping("/saveGuard") 
	public Guard saveGuard(@RequestBody Guard guard) {
		return guardRepository.save(guard);
	}
	
	@DeleteMapping("/removeGuard/{id}")
	public void deleteGuard(@PathVariable("id") int id) {
		Guard guard = guardRepository.findByGuard(id);
		guardRepository.delete(guard);
	}

}
