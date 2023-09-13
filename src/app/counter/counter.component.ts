import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="counter" *ngIf="validStep; else invalid">
      <div class="counter__container">
        <button (click)="decrement()" class="counter__button">-</button>
        <input
          type="text"
          class="counter__input"
          [value]="counterValue"
          readonly
          disabled
        />
        <button (click)="increment()" class="counter__button">+</button>
      </div>
    </div>
    <ng-template #invalid>
      There is no valid step paramete in querystring {{ this.validStep }}
    </ng-template>
  `,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  validStep: boolean = false;
  step: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.hasOwnProperty('step')) {
        console.log('1 ' + typeof Number(params['step']));
        if (!isNaN(+params['step'])) {
          this.step = params['step'];
          this.validStep = true;
        }
      }

      console.log(this.step);
      console.log(this.validStep);
    });
  }

  counterValue: number = 0;

  increment() {
    this.counterValue = this.counterValue + Number(this.step);
  }
  decrement() {
    this.counterValue = this.counterValue - Number(this.step);
  }
}
