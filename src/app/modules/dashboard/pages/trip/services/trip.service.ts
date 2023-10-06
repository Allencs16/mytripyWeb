import { configMap } from 'src/app/core/utils/config-map';
import { Loading } from './../../../../../core/interfaces/loading.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { Trip } from 'src/app/shared/models/trip.model';

@Injectable({
  providedIn: 'root'
})
export class TripService extends GenericService<Trip>{

  constructor(httpClient: HttpClient) { 
    super(httpClient, 'trip');
  }

  getTrips(loading?: Loading){
    return this.getHttpClient().get(`${this.api}`)
    .pipe(configMap())
  }

  getTotalKm(loading?: Loading){
    return this.getHttpClient().get(`${this.api}/totalKm`)
    .pipe(configMap());
  }
}
