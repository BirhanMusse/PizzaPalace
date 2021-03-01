package com.blm.pizzapalace.springsecurity.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.blm.pizzapalace.models.Customer;
import com.blm.pizzapalace.repository.CustomerRepository;
@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	CustomerRepository customerRepo;
	
	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Customer customer = customerRepo.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username "+ username ));
		return UserDetailsImpl.build(customer);
	}
}
