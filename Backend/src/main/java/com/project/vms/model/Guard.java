package com.project.vms.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Guard {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int guardId;
	private String guardName;
	private String phoneNumber;
	private String address;
	private String gender;
	public Guard() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Guard(String guardName, String phoneNumber, String address, String gender) {
		super();
		this.guardName = guardName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.gender = gender;
	}
	public int getGuardId() {
		return guardId;
	}
	public void setGuardId(int guardId) {
		this.guardId = guardId;
	}
	public String getGuardName() {
		return guardName;
	}
	public void setGuardName(String guardName) {
		this.guardName = guardName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

	
}
