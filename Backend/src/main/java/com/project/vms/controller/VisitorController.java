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

import com.project.vms.model.Visitor;
import com.project.vms.repository.FacultyRepository;
import com.project.vms.repository.VisitorRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class VisitorController {
	@Autowired
	private VisitorRepository visitorRepository;
	
	@Autowired
	private FacultyRepository facultyRepository;
	

	@GetMapping("/getVisitors")
	public List<Visitor> getAllVisitors() {
		return visitorRepository.findAll();
	}
	
	@GetMapping("/getFacultyNames")
	public List<String> getFacultyNames() {
		return facultyRepository.facultyList(); 
	}
	
	@PostMapping("/saveVisitor") 
	public Visitor saveVisitor(@RequestBody Visitor visitor) {
		return visitorRepository.save(visitor);
	}
	
	
	@DeleteMapping("/remove/{id}")
	public void delete(@PathVariable("id") int id ) {
		Visitor obj = visitorRepository.findById(id);
		visitorRepository.delete(obj);
	}
}
