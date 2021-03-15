package com.blm.pizzapalace.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
public class OrderHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
	private Integer id;
	
	@JsonBackReference(value = "customer-orderHistory")
	@OneToOne(mappedBy = "orderHistory")
	private Customer customer;
	
	
	@JsonManagedReference(value = "cart-orderHistory")
	@OneToMany(mappedBy = "orderHistory")
	private List<Cart> carts;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public List<Cart> getCarts() {
		return carts;
	}

	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}
	
	
}
