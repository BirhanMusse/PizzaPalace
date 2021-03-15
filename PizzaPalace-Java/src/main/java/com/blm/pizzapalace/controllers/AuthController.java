package com.blm.pizzapalace.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blm.pizzapalace.models.Cart;
import com.blm.pizzapalace.models.Customer;
import com.blm.pizzapalace.models.ERole;
import com.blm.pizzapalace.models.OrderHistory;
import com.blm.pizzapalace.models.Role;
import com.blm.pizzapalace.repository.CustomerRepository;
import com.blm.pizzapalace.repository.RoleRepository;
import com.blm.pizzapalace.springsecurity.payload.request.LoginRequest;
import com.blm.pizzapalace.springsecurity.payload.request.SignupRequest;
import com.blm.pizzapalace.springsecurity.payload.response.JwtResponse;
import com.blm.pizzapalace.springsecurity.payload.response.MessageResponse;
import com.blm.pizzapalace.springsecurity.security.jwt.JwtUtils;
import com.blm.pizzapalace.springsecurity.security.services.UserDetailsImpl;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	CustomerRepository customerRepo;

	@Autowired
	RoleRepository roleRepo;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser( @RequestBody SignupRequest signUpRequest) {
		if (customerRepo.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (customerRepo.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Customer user = new Customer(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepo.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "owner":
					Role ownerRole = roleRepo.findByName(ERole.ROLE_OWNER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(ownerRole);

					break;
				default:
					Role userRole = roleRepo.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		user.setCart(new Cart());
		user.setOrderHistory(new OrderHistory());
		customerRepo.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}