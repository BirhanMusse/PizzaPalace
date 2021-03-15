package com.blm.pizzapalace.models;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;

@Entity
@Table(name="CUSTOMER")
public class Customer {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id")
	private Integer id;

	@JsonManagedReference(value = "cart-customer")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cart_id")
	private Cart cart;
	

	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "Customer_Role",
			joinColumns = @JoinColumn(name="customer_id"),
			inverseJoinColumns = @JoinColumn(name = "role_id")
			)
	private Set<Role> roles = new HashSet<>();
	
	@JsonManagedReference(value = "customer-orderHistory")
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "order_id")
	@NotNull
	private OrderHistory orderHistory;
	
	public OrderHistory getOrderHistory() {
		return orderHistory;
	}

	public void setOrderHistory(OrderHistory orderHistory) {
		this.orderHistory = orderHistory;
	}

	@Column
	private String name;
	
	@Column(unique = true)
	private String username;
	
	@Column
	private String password;
	
	@Column
	private String email;
	
	@Column
	private String address;
	
	@Column
	private Integer points;
	
	public Customer () {
		
	}
	
	public Customer (String username, String email, String password) {
		this.username=username;
		this.email=email;
		this.password=password;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}
	
	
}
