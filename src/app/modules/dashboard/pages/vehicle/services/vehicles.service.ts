import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Vehicle } from '../models/vehicle.model';
import { HttpClient } from '@angular/common/http';
import { configMap } from 'src/app/core/utils/config-map';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends GenericService<Vehicle>{

  constructor(
    httpClient: HttpClient
  ) { 
    super(httpClient, 'vehicles');
  }

  getAllVehicles(){
    return this.getHttpClient().get(`${this.api}`)
    .pipe(configMap());
  }
}
