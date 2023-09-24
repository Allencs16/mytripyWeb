import { DashboardService } from './services/dashboard.service';
import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, ApexGrid, ApexMarkers, ChartComponent } from 'ng-apexcharts';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';


export interface salesOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  ngOnInit(): void {

  }
  
  constructor(
    private userService: UserService,
    private dashboardService: DashboardService
  ){
  }
}
