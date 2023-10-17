import { TratarErrorService } from './../../../../core/services/tratar-error.service';
import { SemanasService } from './../semanas/services/semanas.service';
import { UserService } from 'src/app/modules/public/pages/login/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from './models/trip.model';
import { TripService } from './services/trip.service';
import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { Semanas } from '../semanas/models/semanas.model';
import { VehiclesService } from '../vehicle/services/vehicles.service';
import { Vehicle } from '../vehicle/models/vehicle.model';

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
  vehiclesForForm: Vehicle[] = [];

  ngOnInit(): void {
    this.getData();
  }

  constructor(
    private tripService: TripService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private semanasService: SemanasService,
    private vehicleService: VehiclesService,
    private tratarErrorService: TratarErrorService
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

    this.vehicleService.getAllVehicles()
    .subscribe(vehicles => {
      this.vehiclesForForm = vehicles;
    })
  }

  buildForm(){
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      state: [null, [Validators.required]],
      distanceFromSource: [null, [Validators.required]],
      place: [null, [Validators.required]],
      startDay: [null, [Validators.required]],
      endDay: [null, [Validators.required]],
      userId: [null, [Validators.required]],
      vehicleId: [null, [Validators.required]],
      weekId: [null, [Validators.required]],
      stayId: [null]
    });
  }

  createNewTrip(){
    this.form.patchValue({
      place: this.form.get('name')
    })
    this.tripService.createTrip(this.form.value)
    .subscribe(trip => {
      console.log(trip);
      this.tratarErrorService.avisoMensagemSalvo('Viagem Salva com sucesso.');
    });
  }
}
