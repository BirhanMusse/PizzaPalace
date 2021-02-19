package com.blm.pizzapalace.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Order;
import com.blm.pizzapalace.repository.OrderRepository;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	OrderRepository orderRepo;
	
	
	@GetMapping("/get")
	public List<Order> getAll(){
		return orderRepo.findAll();
	}
	
	@GetMapping("/get/{id}")
	public Order getAll(@PathVariable("id") Integer Id){
		return orderRepo.findById(Id).get();
	}
	

}
