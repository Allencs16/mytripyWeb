import { User } from "src/app/core/models/user.model"

export interface Semanas {
  id: number,
  totalPrice: number,
	totalKm: number,
	budget: number,
	expenses: number,
	startDate: Date,
  endDate: Date,
	user: User
	current: boolean
}