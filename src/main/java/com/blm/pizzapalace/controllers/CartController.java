package com.blm.pizzapalace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Cart;
import com.blm.pizzapalace.models.Item;
import com.blm.pizzapalace.repository.CartRepository;
import com.blm.pizzapalace.repository.ItemRepository;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	ItemRepository itemRepo;
	
	@GetMapping("/get")
	public List<Cart> getAll(){
		List<Cart> carts = cartRepo.findAll();
		return carts;
	}
	
	@GetMapping("/get/{id}")
	public Cart getById(@PathVariable("id") Integer id){
		return cartRepo.findById(id).get();
	}
	
	@PutMapping("/addItem")
	public Cart addItem(@RequestBody Item item, @RequestBody Cart cart) {
		Cart updatedCart = cartRepo.findById(cart.getId()).get();
		List<Item> items = updatedCart.getItem();
		items.add(itemRepo.findById(item.getId()).get());
		updatedCart.setItem(items);
		cartRepo.save(updatedCart);
		
		return updatedCart;
		
	}
	@PutMapping("/addItem/{cartId}")
	public Cart addItem(@RequestBody Cart cart, @PathVariable("cartId") Integer Item_id) {
		Cart updatedCart = cartRepo.findById(cart.getId()).get();
		List<Item> items = updatedCart.getItem();
		items.add(itemRepo.findById(Item_id).get());
		updatedCart.setItem(items);
		cartRepo.save(updatedCart);
		
		return updatedCart;
		
	}
	
	@PutMapping("/removeitem/{cartId}")
	public Cart removeItem(@RequestBody Cart cart, @PathVariable("cartId") Integer Item_id) {
		Cart updatedCart = cartRepo.findById(cart.getId()).get();
		List<Item> items = updatedCart.getItem();
		items.remove(itemRepo.findById(Item_id).get());
		updatedCart.setItem(items);
		cartRepo.save(updatedCart);
		
		return updatedCart;
	}

}
