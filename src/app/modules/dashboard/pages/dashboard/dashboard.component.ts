import { SemanasService } from './../semanas/services/semanas.service';
import { DashboardService } from './services/dashboard.service';
import { Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexPlotOptions, ApexYAxis, ApexXAxis, ApexFill, ApexTooltip, ApexStroke, ApexLegend, ApexGrid, ApexMarkers, ChartComponent } from 'ng-apexcharts';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { TripService } from '../trip/services/trip.service';
import { TripQuantitative } from './models/trip-quantitatives.model';


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

  quantitativesTrip: TripQuantitative;

  ngOnInit(): void {
    this.getKmTotalFromMonth();
  }
  
  constructor(
    private semanasService: SemanasService
  ){
  }

  getKmTotalFromMonth(){
    this.semanasService.getQuantitatives()
    .subscribe(quantitatives => {
      this.quantitativesTrip = quantitatives;
    })
  }
}
