import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [
    {
      city: 'Pune',
      temprature: '38',
    },
    {
      city: 'Mumbai',
      temprature: '33',
    },
    {
      city: 'Bangalore',
      temprature: '27',
    },
    {
      city: 'Delhi',
      temprature: '40',
    },
    {
      city: 'Lucknow',
      temprature: '45',
    },
  ];
}
