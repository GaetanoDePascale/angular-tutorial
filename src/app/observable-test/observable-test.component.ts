import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  myObservableTest = new Observable((observer) => {
    console.log('Starting observable');

    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
  });

  ngOnInit() {
    this.myObservableTest.subscribe((value) => {
      console.log(value);
    });
  }
}
