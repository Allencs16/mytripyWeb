import { Trip } from './models/trip.model';
import { TripService } from './services/trip.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  listTrips: Trip[] = [];

  displayedColumns: string[] = ['name', 'description', 'state', 'distanceFromSource', 'price', 'place', 'food', 'startDay', 'endDay'];

  constructor(private tripService: TripService){
    this.tripService.getTrips().subscribe(trips => {
      this.listTrips = trips;
    })
  }
}
