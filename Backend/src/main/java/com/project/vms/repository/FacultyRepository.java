package com.project.vms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.vms.model.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Integer> {
	
	@Query("select f.facultyName from Faculty f")
	List<String> facultyList();
	
	@Query("select f from Faculty f where facultyId = ?1")
	Faculty findByFacId(int id);

}
