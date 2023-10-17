import { Semanas } from "../../semanas/models/semanas.model";
import { Vehicle } from "../../vehicle/models/vehicle.model";

export interface Trip{
	id: number;
  name: string;
  description: string;
  state: string;
  distanceFromSource: number;
  place: string;
  startDay: Date;
  endDay: Date;
  week: Semanas;
  stays: string;
  vehicle: Vehicle;
}

export interface TripDTO{
	id: number;
  name: string;
  description: string;
  state: string;
  distanceFromSource: number;
  place: string;
  startDay: Date;
  endDay: Date;
  wekkId: number;
  stayId: number;
  vehicleId: number;
}