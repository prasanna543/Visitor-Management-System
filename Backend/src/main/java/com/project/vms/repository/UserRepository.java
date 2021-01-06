package com.project.vms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.project.vms.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where u.userId = ?1 ")
	User findByUserId(int id);
	
	@Query("select e from User e where e.username=?1 and e.password = ?2")
	User isUserExist(String username, String password);

}
