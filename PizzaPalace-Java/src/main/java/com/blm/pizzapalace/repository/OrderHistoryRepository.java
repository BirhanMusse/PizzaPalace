package com.blm.pizzapalace.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.blm.pizzapalace.models.OrderHistory;

public interface OrderHistoryRepository extends JpaRepository<OrderHistory, Integer> {

}
