package com.proyecto.model;

public class Persona {

	private String name;
	private String country;
	private int age;
	
	public Persona() {
		
	}
	
	public Persona(String name, String country, int age) {
		super();
		this.name = name;
		this.country = country;
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	
}
