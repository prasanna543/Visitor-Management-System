package com.project.vms.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Visitor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int visitorId;
	public String visitorName;
	public String phoneNumber;
	public String address;
	public String gender;
	public String faculty;
	public String purpose;
	public Date inTime;
	public Date outTime;
	
	public Visitor() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Visitor(String visitorName, String phoneNumber, String address, String gender, String faculty,
			String purpose, Date inTime, Date outTime) {
		super();
		this.visitorName = visitorName;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.gender = gender;
		this.faculty = faculty;
		this.purpose = purpose;
		this.inTime = inTime;
		this.outTime = outTime;
	}
	public int getVisitorId() {
		return visitorId;
	}
	public void setVisitorId(int visitorId) {
		this.visitorId = visitorId;
	}
	public String getVisitorName() {
		return visitorName;
	}
	public void setVisitorName(String visitorName) {
		this.visitorName = visitorName;
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
	public String getFaculty() {
		return faculty;
	}
	public void setFaculty(String faculty) {
		this.faculty = faculty;
	}
	public String getPurpose() {
		return purpose;
	}
	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}
	public Date getInTime() {
		return inTime;
	}
	public void setInTime(Date inTime) {
		this.inTime = inTime;
	}
	public Date getOutTime() {
		return outTime;
	}
	public void setOutTime(Date outTime) {
		this.outTime = outTime;
	}
	
	
	

}
