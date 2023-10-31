import { Vehicle } from './models/vehicle.model';
import { VehiclesService } from './services/vehicles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  listVehicles: Vehicle[] = [];

  displayedColumns: string[] = ['name', 'price', 'brand', 'kmAveragePerLiter', 'maxDistance'];

  constructor(
    private vehicleService: VehiclesService
  ) { }

  ngOnInit() {
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.vehicleService.getAllVehicles()
    .subscribe(vehicles => {
      this.listVehicles = vehicles;
      console.log(this.listVehicles);
    })
  }

}
