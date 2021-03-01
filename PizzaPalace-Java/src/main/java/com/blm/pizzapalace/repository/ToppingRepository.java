package com.blm.pizzapalace.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blm.pizzapalace.models.Topping;
@Repository
public interface ToppingRepository extends JpaRepository<Topping, Integer> {

}
