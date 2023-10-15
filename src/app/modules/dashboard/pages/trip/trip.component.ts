import { SemanasService } from './../semanas/services/semanas.service';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Trip } from './models/trip.model';
import { TripService } from './services/trip.service';
import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Semanas } from '../semanas/models/semanas.model';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent {

  listTrips: Trip[] = [];

  displayedColumns: string[] = ['name', 'description', 'state', 'distanceFromSource', 'place', 'startDay', 'endDay'];

  createTrip: boolean = false;

  form: FormGroup;

  usersForTrip: User[] = [];

  weeksForForm: Semanas[] = [];

  ngOnInit(): void {
    this.getData();
  }

  constructor(
    private tripService: TripService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private semanasService: SemanasService
  ){
    this.getTrips();
    this.buildForm();
  }

  showCardCreate(createTrip: boolean){
    this.createTrip = createTrip;
  }

  getTrips(){
    this.tripService.getTrips().subscribe(trips => {
      this.listTrips = trips;
    })
  }

  getData(){
    this.userService.getByUserTypeAndActive('VIAJANTE')
    .subscribe(users => {
      this.usersForTrip = users
    });

    this.semanasService.getWeeks()
    .subscribe(weeks => {
      this.weeksForForm = this.weeksForForm.concat(weeks);
    })
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [null],
      description: [null],
      state: [null],
      distanceFromSource: [null],
      place: [null],
      startDay: [null],
      endDay: [null],
      userId: [null],
      vehicleId: [null],
      weekId: [null],
      stayId: [null]
    });
  }

  createNewTrip(){
    console.log(this.form.value);
  }
}
