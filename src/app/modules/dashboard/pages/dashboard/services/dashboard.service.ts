import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    protected http: HttpClient
  ) { } 

}
