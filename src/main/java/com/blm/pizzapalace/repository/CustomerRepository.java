package com.blm.pizzapalace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blm.pizzapalace.models.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
