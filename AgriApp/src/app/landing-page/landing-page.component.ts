import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { data } from 'jquery';

import { userModel } from '../models/userModel';
import { AdminServicesService } from '../Services/admin-services.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  //data:userModel= new userModel("","","","","","","");
  loginUser:userModel=new userModel("","","","","","","");
  currentUser:userModel=new userModel("","","","","","","");
  
  flag:Boolean = true;
  @Output() newItemEvent = new EventEmitter();
  loginForm!:FormGroup;
  
  
  constructor( private fb:FormBuilder, private service:AdminServicesService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm=this.fb.group(
      {
        userName:[""],
        password:[""],
      }
    )
  }

  changeParentUser(){
    this.newItemEvent.emit();
  }
  Authenticate(){

    console.log("in authentication function");
    
    //console.log(this.loginForm.value.userName);
    
    this.currentUser.userName=this.loginForm.value.userName;
    this.currentUser.password=this.loginForm.value.password;

    this.service.authenticateUser(this.currentUser).subscribe(res=>{
      this.loginUser = res;
      this.validateUser(this.loginUser);
  }
    );
    //console.log(this.service.currentUser);
    
    // console.log("usertype: "+this.currentUser.userType);
    //this.loginForm.reset();
  }

  validateUser(user:userModel){
    console.log("in validate user function "+user)
    if(user.password==this.loginForm.value.password){
      
      if(user.userType=="Dealer"){
        
        // this.service.currentUser=user;
        console.log("currentUser updated : "+user.location);
        
        this.router.navigate(['/dealer'])
        
      }
    }

  }

}
