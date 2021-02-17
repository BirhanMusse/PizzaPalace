package com.blm.pizzapalace.models;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="ITEM")
public class Item {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
	private Integer id;

	@ManyToMany
	@JoinTable( name = "item_toppings",
			joinColumns = @JoinColumn (name="item_id"),
			inverseJoinColumns = @JoinColumn(name = "topping_id")
			)
	Set <Topping> toppings;

	@Enumerated(EnumType.STRING)
	@JoinColumn(name = "category_id", referencedColumnName = "id")
	private ECategory category;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "Item_Cart",
			joinColumns = @JoinColumn(name="item_id"),
			inverseJoinColumns = @JoinColumn(name="cart_id")
			)
	private Set<Cart> carts;
	
	public Set<Cart> getCarts() {
		return carts;
	}

	public void setCarts(Set<Cart> carts) {
		this.carts = carts;
	}

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

	public void setId(Integer id) {
		this.id = id;
	}

	public Set<Topping> getToppings() {
		return toppings;
	}

	public void setToppings(Set<Topping> toppings) {
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
