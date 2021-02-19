package com.blm.pizzapalace.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blm.pizzapalace.models.Cart;
import com.blm.pizzapalace.models.Item;
@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {
	public Cart findByItem(Item item);

	public List<Cart> findByCustomer_Id(Integer id);
}
