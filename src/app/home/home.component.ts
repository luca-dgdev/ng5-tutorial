import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  p { font-weight: bold }
  div { color: gray; }
  `]
})
export class HomeComponent implements OnInit {

itemCount: number;
btnText: string = 'Add an item';
goalText: string = 'My first goal';
goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}
