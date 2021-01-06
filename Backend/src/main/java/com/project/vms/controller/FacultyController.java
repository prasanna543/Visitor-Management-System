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

import com.project.vms.model.Faculty;
import com.project.vms.repository.FacultyRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class FacultyController {
	@Autowired
	private FacultyRepository facultyRepository;

	@GetMapping("/getFacultyList")
	public List<Faculty> getFacultyList() {
		return facultyRepository.findAll();
	}

	@PostMapping("/saveFaculty")
	public Faculty saveFaculty(@RequestBody Faculty faculty) {
		return facultyRepository.save(faculty);
	}
	
	@DeleteMapping("/removeFaculty/{id}")
	public void deleteFaculty(@PathVariable("id") int id) {
		Faculty faculty = facultyRepository.findByFacId(id);
		facultyRepository.delete(faculty);
	}
}
