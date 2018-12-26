import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'mt-about',
  templateUrl: './about.component.html',
  animations: [
    trigger('contentAppear', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0 }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('titleAppear', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-5100px, 0px)' }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
