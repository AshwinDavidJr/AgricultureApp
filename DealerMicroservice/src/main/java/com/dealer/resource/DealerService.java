package com.dealer.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dealer.model.Dealer;
import com.dealer.repository.DealerRepository;

@Service
public class DealerService {

	@Autowired
	private DealerRepository dealerRepo;

	public List<Dealer> getAll() {
		// TODO Auto-generated method stub
		return dealerRepo.findAll();
	}

	public Optional<Dealer> findById(String id) {
		// TODO Auto-generated method stub
		return dealerRepo.findById(id);
	}

	public String addDealer(Dealer dealer) {
		// TODO Auto-generated method stub
		dealerRepo.save(dealer);
		return "added a dealer : dealer id is "+dealer.getId();
	}

	public String deleteDealer(String id) {
		dealerRepo.deleteById(id);
		return "dealer deleted of id "+id;
	}

	public Dealer getByUsername(String dealerUsername) {
		return dealerRepo.findBydealerUsername(dealerUsername);
	}

	public String update(Dealer dealer) {
		dealerRepo.save(dealer);
		return "dealer updated succesfully "+dealer.getId();
	}
	
	
	
	
}
