import { Semanas } from "../../semanas/models/semanas.model";

export interface Trip{
	id: number;
  name: string;
  description: string;
  state: string;
  distanceFromSource: number;
  price: number;
  place: string;
  food: number;
  startDay: Date;
  endDay: Date;
  week: Semanas;
  stays: string;
  vehicle: string;
}