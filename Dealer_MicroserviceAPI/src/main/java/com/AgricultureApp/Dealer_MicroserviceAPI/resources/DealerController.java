package com.AgricultureApp.Dealer_MicroserviceAPI.resources;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.AgricultureApp.Dealer_MicroserviceAPI.models.Dealer;

@RestController
@RequestMapping("/dealer")
public class DealerController {

	@RequestMapping("/login/{userName}")
	public String DealerLogin(@PathVariable("userName") String userName) {
		RestTemplate restTemplate = new RestTemplate();
		Dealer dealer = restTemplate.getForObject("http://localhost:8081/login/"+userName, Dealer.class);
		
		return "Hello Dealer  "+dealer.name;
	}
}
