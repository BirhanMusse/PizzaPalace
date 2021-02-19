package com.blm.pizzapalace.models;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ITEM")
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
	private Integer id;

	@ManyToMany(cascade = {CascadeType.ALL})
	@JoinTable( name = "item_toppings",
	
			joinColumns = @JoinColumn (name="item_id"),
			inverseJoinColumns = @JoinColumn(name = "topping_id")
			)
	List <Topping> toppings;

	@Enumerated(EnumType.STRING)
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private ECategory category;
	
	@ManyToOne(fetch = FetchType.LAZY)
	private Cart cart;
	

	@Column
	private String name;
	 
	@Column
	private Integer price;

	 
	@Column
	private Integer points;
	
	@Column
	private String SpecialReq;
	
	public Integer getId() {
		return id;
	}

	public Cart getCart() {
		return cart;
	}

	public void setCart(Cart cart) {
		this.cart = cart;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public List<Topping> getToppings() {
		return toppings;
	}

	public void setToppings(List<Topping> toppings) {
		this.toppings = toppings;
	}

	public ECategory getCategory() {
		return category;
	}

	public void setCategory(ECategory category) {
		this.category = category;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}

	public String getSpecialReq() {
		return SpecialReq;
	}

	public void setSpecialReq(String specialReq) {
		SpecialReq = specialReq;
	}
	
}
