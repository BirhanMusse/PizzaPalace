package com.blm.pizzapalace.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Topping;
import com.blm.pizzapalace.repository.ToppingRepository;

@RestController
@RequestMapping("/topping")
public class ToppingController {
	
	@Autowired
	ToppingRepository toppingRepo;
	
	@PostMapping("/add")
	public ResponseEntity<String> addTopping(@RequestBody Topping topping){
		ResponseEntity<String> resp = null;
		try {
			toppingRepo.save(topping);
			resp= new ResponseEntity<>("SUCCESS",HttpStatus.OK);
		} catch(Exception e){
			resp= new ResponseEntity<>("DID NOT WORK",HttpStatus.OK);

		}
		return resp;
	}
	
	@GetMapping("/get")
	public ResponseEntity<List<Topping>> getAll(){
		ResponseEntity<List<Topping>> resp = null;
		try {
			List<Topping> toppings = toppingRepo.findAll();
			resp = new ResponseEntity<>(toppings,HttpStatus.OK);
		} catch(Exception e){
			resp= new ResponseEntity<>(null,HttpStatus.OK);

		}
		return resp;
	}
	

}
