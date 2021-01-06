package com.project.vms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.vms.model.Guard;

@Repository
public interface GuardRepository extends JpaRepository<Guard, Integer> {

	@Query("select g from Guard g where g.guardId = ?1")
	Guard findByGuard(int id);

}
