import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 3;

  previousRate: number;
  constructor() { }

  ngOnInit() {
  }


  setRate(num: number) {
    this.rate = num;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(num: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }

    this.rate = num;
  }

  clearTemporary(num: number) {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
    }
    this.previousRate = undefined;
  }

}
