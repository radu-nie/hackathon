import { Component } from '@angular/core';

@Component({
  selector: 'app-chart-module',
  templateUrl: './chart-module.component.html',
  styleUrls: ['./chart-module.component.css']
})
export class ChartModuleComponent {

  globalChartOptions: any = {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom'
    }
  }
  lineChartData: Array<any> = [{
    data: [6, 5, 8, 8, 5, 5, 4],
    label: "Series A",
    borderWidth: 1
  }, {
    data: [5, 4, 4, 2, 6, 2, 5],
    label: "Series B",
    borderWidth: 1
  }];
  lineChartLabels: Array<any> = ["1", "2", "3", "4", "5", "6", "7"];
  lineChartOptions: any = Object.assign({
    animation: !1,
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0.02)"
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0.02)"
        },
        ticks: {
          beginAtZero: !0,
          suggestedMax: 9
        }
      }]
    }
  }, this.globalChartOptions);

  lineChartColors: Array<any> = [{
    backgroundColor: "#7986cb",
    borderColor: "#3f51b5",
    pointBackgroundColor: "#3f51b5",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(148,159,177,0.8)"
  }, {
    backgroundColor: "#eeeeee",
    borderColor: "#e0e0e0",
    pointBackgroundColor: "#e0e0e0",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(77,83,96,1)"
  }, {
    backgroundColor: "rgba(148,159,177,0.2)",
    borderColor: "rgba(148,159,177,1)",
    pointBackgroundColor: "rgba(148,159,177,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: "rgba(148,159,177,0.8)"
  }];
  lineChartLegend = true;
  lineChartType = "line";
  lineChartSteppedData: Array<any> = [{
    data: [6, 5, 8, 8, 5, 5, 4],
    label: "Series A",
    borderWidth: 1,
    fill: !1,
    steppedLine: !0
  }, {
    data: [5, 4, 4, 2, 6, 2, 5],
    label: "Series B",
    borderWidth: 1,
    fill: !1,
    steppedLine: !0
  }];
  lineChartPointsData: Array<any> = [{
    data: [6, 5, 8, 8, 5, 5, 4],
    label: "Series A",
    borderWidth: 1,
    fill: !1,
    pointRadius: 10,
    pointHoverRadius: 15,
    showLine: !1
  }, {
    data: [5, 4, 4, 2, 6, 2, 5],
    label: "Series B",
    borderWidth: 1,
    fill: !1,
    pointRadius: 10,
    pointHoverRadius: 15,
    showLine: !1
  }];
  lineChartPointsOptions: any = Object.assign({
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0.02)"
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0,0,0,0.02)",
          zeroLineColor: "rgba(0,0,0,0.02)"
        },
        ticks: {
          beginAtZero: !0,
          suggestedMax: 9
        }
      }]
    },
    elements: {
      point: {
        pointStyle: "rectRot"
      }
    }
  }, this.globalChartOptions);

}
