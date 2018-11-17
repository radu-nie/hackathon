import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hackathon London Stock Exchange Group';
  logoName = 'london_stock_exchange';

  constructor() { }

  chart: Chart = new Chart({
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1707.03, 5859.74, 1546.57, 3339.99, 2393.39, 1769.86, 2857.36]
      },
      {
        name: 'Line 2',
        data: [2033.47, 3327.98, 1677.76, 5859.74, 3339.99, 2526.96, 1461.65]
      }
    ]
  });

  ngOnInit() {
  }
}
