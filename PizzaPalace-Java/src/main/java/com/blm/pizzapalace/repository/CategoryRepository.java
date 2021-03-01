package com.blm.pizzapalace.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.blm.pizzapalace.models.Category;
import com.blm.pizzapalace.models.Role;
@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
public Optional<Role> findByName(String name);

}
