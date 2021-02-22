package com.blm.pizzapalace.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blm.pizzapalace.models.Customer;
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	Optional<Customer> findByUsername(String username);

Boolean existsByUsername(String username);

Boolean existsByEmail(String email);

}
