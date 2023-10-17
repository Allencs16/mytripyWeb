import { Trip, TripDTO } from './../models/trip.model';
import { configMap } from 'src/app/core/utils/config-map';
import { Loading } from './../../../../../core/interfaces/loading.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

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

  createTrip(trip: TripDTO, loading?: Loading){
    return this.getHttpClient().post(`${this.api}`, trip)
    .pipe(configMap());
  }
}
