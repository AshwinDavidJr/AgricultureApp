package com.AgricultureApp.Payment_MicroserviceAPI.resources;

import org.springframework.data.mongodb.repository.MongoRepository;


import com.AgricultureApp.Payment_MicroserviceAPI.models.paymentModel;

public interface paymentRepository extends MongoRepository<paymentModel, String> {

	paymentModel findByorderID(String orderId);
}
