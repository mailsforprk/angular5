import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  private tail : number = 20;
  ngOnInit() {
    this.tail = 20;
  }

  onClick(){
    this.tail= this.tail == 40 ? 20:40;
  }

}
