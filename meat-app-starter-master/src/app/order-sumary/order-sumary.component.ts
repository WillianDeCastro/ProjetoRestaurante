import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order-sumary',
  templateUrl: './order-sumary.component.html'
})
export class OrderSumaryComponent implements OnInit {
  rated: boolean;
  numberChoosed: number;

  constructor() { }

  ngOnInit() {
  }

  ratedChoose(num: number) {
    this.rated = true;
    this.numberChoosed = num;
    
  }

}
