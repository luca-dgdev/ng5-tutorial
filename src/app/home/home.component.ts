import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  p { font-weight: bold }
  div { color: gray; }
  `],
  animations: [
   trigger('goals', [
     transition('* => *', [
       query(':enter', style({opacity: 0}), {optional: true}),
       query(':enter', stagger('300ms', [
         animate('.6s ease-in', keyframes([
           style({opacity: 0, transform: 'transalateY(-75%)', offset:0}),
           style({opacity: .5, transform: 'transalateY(35px)', offset:.3}),
           style({opacity: 1, transform: 'transalateY(0)', offset:1}),
         ]))
       ]), {optional: true})
     ])
   ]) 
  ]
})
export class HomeComponent implements OnInit {
l
itemCount: number;
btnText: string = 'Add an item';
goalText: string = 'My first goal';
goals = ['aaa', 'bbb', 'ccc'];

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
