import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  d = new Date();
  date = this.d. getDate();
  month = this.d. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
  yyyy = this.d.getFullYear();
  dd;
  mm;
  dateStr;
  constructor() { }
  showTodayDate() {
  
    this.dd = this.date < 10 ? '0' + this.date : this.date;
    this.mm = this.month < 10 ? '0' + this.month : this.month;
    this.dateStr = this.yyyy + "-" + this.mm + "-" + this.dd;
    return this.dateStr;
  }
}
