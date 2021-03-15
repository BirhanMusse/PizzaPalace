package com.blm.pizzapalace.controllers;

import java.util.List;
import java.util.Optional;

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
import com.blm.pizzapalace.repository.OrderHistoryRepository;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	ItemRepository itemRepo;
	
	@Autowired
	OrderHistoryRepository historyRepo;
	
	
	
	@GetMapping("/get")
	public List<Cart> getAll(){
		List<Cart> carts = cartRepo.findAll();
		return carts;
	}
	
	@GetMapping("/get/{id}")
	public Cart getById(@PathVariable("id") Integer id){
		return cartRepo.findById(id).get();
		//return cartRepo.findById(id).get();
	}
	
	@GetMapping("/get/cust/{id}")
	public Cart getByCustomerId(@PathVariable("id") Integer id){
		return cartRepo.findByCustomer_Id(id);
		//return cartRepo.findById(id).get();
	}
	
	@GetMapping("/getbycust/{id}")
	public Cart getBycust(@PathVariable("id") Integer id){
		Cart carts = cartRepo.findByCustomer_Id(id);
		System.out.println("SYSOUT BELOW");
		System.out.println("SYSOUT BELOW");
System.out.println(carts);
		
		System.out.println("SYSOUT ABOVE");
		System.out.println("SYSOUT ABOVE");

		
		return carts;
	}
	

	
	@PutMapping("/addItem/{cartId}")
	public Cart addItems(@RequestBody Item item, @PathVariable("cartId") Integer cartId) {
		System.out.println(itemRepo.findById(item.getId()));
		if(itemRepo.findById(item.getId()).isEmpty()) {
			itemRepo.save(item);
		}
		
		Cart updatedCart = cartRepo.findById(cartId).get();
		List<Item> items = updatedCart.getItem();
		items.add(item);
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
