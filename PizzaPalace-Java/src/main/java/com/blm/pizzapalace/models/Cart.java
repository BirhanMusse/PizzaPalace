package com.blm.pizzapalace.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="CART")
public class Cart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
	private Integer id;
	
	@JsonBackReference(value = "cart-customer")
	@OneToOne(mappedBy = "cart")
	private Customer customer;
	
	@JsonBackReference(value = "cart-orderHistory")
    @ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "orderHistory_id", referencedColumnName = "id")
	private OrderHistory orderHistory;
	
	
	@Column(name = "Order_date")
	public String date;
	
	
//	@JsonBackReference
//  @OneToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "customer_id", referencedColumnName = "id")
//	private Customer customer;
//	
//	
//	@JsonManagedReference
//	@OneToOne (mappedBy = "customer")
//	private Cart cart;
	
	
	

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@OneToMany(cascade = {CascadeType.ALL})
	@JoinTable(
			name = "Cart_Item",
			joinColumns = @JoinColumn(name="cart_id"),
			inverseJoinColumns = @JoinColumn(name="item_id")
			)
	private List <Item> item;
	

	
	public List<Item> getItem() {
		return item;
	}

	public void setItem(List<Item> item) {
		this.item = item;
	}

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

	

}
