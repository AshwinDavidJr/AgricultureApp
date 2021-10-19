package com.dealer.resource;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import com.dealer.model.Dealer;
import com.mongodb.assertions.Assertions;

class DealerControllerTest {

	@InjectMocks
	DealerController controller;
	@Mock
	DealerService dealerService;
	
	@BeforeEach
	void setup()
	{
		MockitoAnnotations.initMocks(this);
	}
	
	@Test
	void testGetAll() {
		List<Dealer> testCrops = new ArrayList<Dealer>();
		testCrops.add(new Dealer());
		when(controller.getAll()).thenReturn(testCrops);
		
		List<Dealer> result = controller.getAll();
		
		Assertions.assertNotNull(result);
	}

	@Test
	void testGetfarmer() {
		fail("Not yet implemented");
	}

	@Test
	void testAddfarmer() {
		fail("Not yet implemented");
	}

	@Test
	void testDeleteDealer() {
		fail("Not yet implemented");
	}

	@Test
	void testGetUsers() {
		fail("Not yet implemented");
	}

	@Test
	void testUpdate() {
		fail("Not yet implemented");
	}

	@Test
	void testCall() {
		fail("Not yet implemented");
	}

	@Test
	void testGetFarmer() {
		fail("Not yet implemented");
	}

	@Test
	void testGetFarmerById() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAllCrops() {
		fail("Not yet implemented");
	}

	@Test
	void testGetAllCropsByFarmerId() {
		fail("Not yet implemented");
	}

}
