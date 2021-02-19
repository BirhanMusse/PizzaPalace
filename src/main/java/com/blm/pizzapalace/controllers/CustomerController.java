package com.blm.pizzapalace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Customer;
import com.blm.pizzapalace.repository.CustomerRepository;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	CustomerRepository custRepo;
	
	@PostMapping("/add")
	public Customer addCustomer (@RequestBody Customer customer){
		custRepo.save(customer);
		return customer;
	}
	@GetMapping("/get")
	public List <Customer> getAll (){
		List <Customer> customer = custRepo.findAll();
		return customer;
	}
	
//	@GetMapping("/carts/{Id}")
//	public List <Cart> CartsbyCust(@PathVariable("Id")){
//		
//		List<Cart> carts = 
//	}
}
