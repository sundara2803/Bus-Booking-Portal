import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  noOfPassenger: number;
  id;
  source;
  destination;
  busName;
  journyDate;
  totalTime;
  price;
  bd: Array<NewserviceService> = [];

  constructor() { }
}
