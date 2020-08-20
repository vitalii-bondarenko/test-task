import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { LineChartData } from '../../rest/users/users.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: [ './line-chart.component.scss' ]
})
export class LineChartComponent implements OnInit {

  @Input()
  chartData: LineChartData;

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontColor: '#CCCCCC',

          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontColor: '#CCCCCC',
            maxTicksLimit: 6,
            beginAtZero: true
          },
          gridLines: {
            color: '#F1F1F1'
          }
        }
      ]
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#3A80BA',
      backgroundColor: 'rgba(0,0,0,0)',
      pointBackgroundColor: '#3A80BA'
    },
  ];

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    this.lineChartData.push({
      data: this.chartData.values,
      label: this.chartData.label,
      pointRadius: this.getPoints()
    });

    this.lineChartLabels = this.chartData.labels;
  }

  getPoints(): number[] {
    const points = Array(this.chartData.values.length).fill(1);
    points[ 0 ] = 10;
    points[ points.length - 1 ] = 10;
    return points;
  }

}
