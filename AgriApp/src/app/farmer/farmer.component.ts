import { Component, OnInit } from '@angular/core';
import { userModel } from '../models/userModel';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  loggeduser:userModel=new userModel("","","","","","","");
  constructor() { }

  ngOnInit(): void {
    this.loggeduser=JSON.parse(sessionStorage.loggedUser);
  }

}
