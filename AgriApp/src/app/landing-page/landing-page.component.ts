import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  flag:Boolean = true;
  @Output() newItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  changeParentUser(){
    this.newItemEvent.emit();
  }

}
