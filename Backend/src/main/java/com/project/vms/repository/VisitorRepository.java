package com.project.vms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.vms.model.Visitor;

@Repository
public interface VisitorRepository extends JpaRepository<Visitor, Integer> {

	@Query("select v from Visitor v where visitorId = ?1")
	Visitor findById(int id);
}
