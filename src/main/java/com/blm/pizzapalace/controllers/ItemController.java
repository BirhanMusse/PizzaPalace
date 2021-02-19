package com.blm.pizzapalace.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Cart;
import com.blm.pizzapalace.models.Item;
import com.blm.pizzapalace.models.Topping;
import com.blm.pizzapalace.repository.CartRepository;
import com.blm.pizzapalace.repository.ItemRepository;
import com.blm.pizzapalace.repository.ToppingRepository;

@RestController
@RequestMapping("/item")
public class ItemController {

	@Autowired
	ItemRepository itemRepo;
	
	@Autowired
	CartRepository cartRepo;
	
	@Autowired
	ToppingRepository toppingRepo;
	@PostMapping("/add")
	public ResponseEntity<String> addItem(@RequestBody Item item){
		ResponseEntity<String> resp = null;
		try {
			itemRepo.save(item);
			resp= new ResponseEntity<>("SUCCESS",HttpStatus.OK);
		} catch(Exception e){
			resp= new ResponseEntity<>("DID NOT WORK",HttpStatus.OK);

		}
		return resp;
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<Item>> getAll(){
		ResponseEntity<List<Item>> resp = null;
		try {
			List<Item> items = itemRepo.findAll();
			resp = new ResponseEntity<>(items,HttpStatus.OK);
		} catch(Exception e){
			resp= new ResponseEntity<>(null,HttpStatus.OK);

		}
		return resp;
	}
	
	@PutMapping("/addtopping")
	public Item addTopping(@RequestBody Item item) {
		Item updatedItem = itemRepo.findById(item.getId()).get();
		List<Topping> topys = new ArrayList<>();
		for(Topping t: item.getToppings()) {
			topys.add(t);
		}
		topys.add(toppingRepo.findById(1).get());
		updatedItem.setToppings(topys);
		itemRepo.save(updatedItem);
		return updatedItem;
		
	}
	
	@PutMapping("/addtopping/{toppingId}")
	public Item addTopping2(@RequestBody Item item, @PathVariable("toppingId") int toppingId) {
		Item updatedItem = itemRepo.findById(item.getId()).get();
		List<Topping> topys = updatedItem.getToppings();
		topys.add(toppingRepo.findById(toppingId).get());
		updatedItem.setToppings(topys);
		itemRepo.save(updatedItem);
		return updatedItem;
		
	}
	
	@PostMapping("/cart")
	public Cart getCart(@RequestBody Item item) {
		Cart cart = cartRepo.findByItem(item);
		return cart;
	}
}
