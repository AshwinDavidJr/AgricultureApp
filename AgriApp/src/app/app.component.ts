import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user:boolean=true;
  userType:String = "admin";
  ngOnInit(): void {

  }
  title = 'AgriApp';
  flag:boolean=false;


  changeUser(){
    this.user=false;
  }
}
