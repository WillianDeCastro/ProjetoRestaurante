import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;

  input: any;
  @ContentChild(NgModel) myNgModel: NgModel;
  @ContentChild(FormControlName) myControl: FormControlName;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {

    this.input = this.myNgModel || this.myControl;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa que o ngModel ou a formControlName seja implementado');
    }
  }


  hasSuccess(): boolean {
    return (this.myControl.valid && (this.myControl.dirty || this.myControl.touched));
  }

  hasError(): boolean {
    return (this.myControl.invalid && (this.myControl.dirty || this.myControl.touched));
  }
}
