import { Component, OnInit, Input,ElementRef,ViewChild } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { NewserviceService } from '../newservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bussearch',
  templateUrl: './bussearch.component.html',
  styleUrls: ['./bussearch.component.scss']
})
export class BussearchComponent implements OnInit {
 // num: number[]=[1,2,3,4,5,6,7,8,9,10];
  //@ViewChild('k', { static: True }) ki: ElementRef;
  // @ViewChild('k') public ki: ElementRef;
  
  onChange(data) {
    this.newservice.noOfPassenger = data.target.value;
    console.log(data.target.value);
  }
  onItemChange(event) {
    this.newservice.id = event;
    console.log(event);
  }
  
  source;
  destination;
  busName;
  journyDate;
  totalTime;
  price;
  bd: Array<NewserviceService> = [];
  onBook() {
    let ns = new NewserviceService();
    let i;
    for (i = 1; i < this.bus.busdetails.length;i++){
    if (this.bus.busdetails[i].ID == this.newservice.id) { 
      ns.source = this.bus.busdetails[i].Source;
      ns.destination = this.bus.busdetails[i].Destination;
      ns.busName = this.bus.busdetails[i].TN;
      ns.journyDate = this.bus.busdetails[i].DA;
      ns.totalTime = this.bus.busdetails[i].TT;
      ns.price = this.bus.busdetails[i].Price;
      this.newservice.bd.push(ns);
    }
    
    }
    console.log(this.newservice.bd);
  }

  constructor(private myservice: MyserviceService,private newservice:NewserviceService,private router: Router) {}

  ngOnInit() {
  }
  bus = {
    busdetails:
      [{
        "ID": "001",
        "TN": "Parveen Travels",
        "DA": "10:00 PM - 5.00 AM",
        "TT": 7,
        "Rating": 4.5,
        "Price": 700,
        "Features": "AC Plug Tracking",
        "Source": "Chennai",
        "Destination": "Madurai"
      },
      {
        "ID": "002",
        "TN": "SRM Travels",
        "DA": "11:00 PM - 7.00 AM",
        "TT": 8,
        "Rating": 4,
        "Price": 600,
        "Features": "AC Plug Tracking",
        "Source": "Chennai",
        "Destination": "Madurai"
      },
      {
        "ID": "003",
        "TN": "KPN Travels",
        "DA": "10:00 PM - 5.00 AM",
        "TT": 7,
        "Rating": 4.2,
        "Price": 650,
        "Features": "Plug Tracking",
        "Source": "Madurai",
        "Destination": "Chennai"
      },
      {
        "ID": "004",
        "TN": "Javavilas Travels",
        "DA": "6:00 PM - 11.00 PM",
        "TT": 5,
        "Rating": 4,
        "Price": 300,
        "Features": "Plug",
        "Source": "Madurai",
        "Destination": "Trichy"
      },
      {
        "ID": "005",
        "TN": "vivegam Travels",
        "DA": "8:00 AM - 11.00 AM",
        "TT": 3,
        "Rating": 3.5,
        "Price": 350,
        "Features": "Plug Tracking",
        "Source": "Trichy",
        "Destination": "Madurai"
      },
      {
        "ID": "006",
        "TN": "Amarnath Travels",
        "DA": "10:00 AM - 4.00 AM",
        "TT": 7,
        "Rating": 4.5,
        "Price": 500,
        "Features": "AC Plug",
        "Source": "Trichy",
        "Destination": "Chennai"
        },
        {
          "ID": "007",
          "TN": "ABC Travels",
          "DA": "11:00 AM - 7.00 AM",
          "TT": 8,
          "Rating": 3.5,
          "Price": 600,
          "Features": "Plug",
          "Source": "Chennai",
          "Destination": "Madurai"
        }
      ]
  }

  //now = new Date();
 /*  handleChange(evt){ 
console.log(evt);
}  */
  sources = ['Trichy', 'Chennai', 'Madurai'];
  destinations = ['Chennai', 'Trichy', 'Madurai'];
  onClickSearch(data) {
    var sour = data.s;
    var des = data.d;
    console.log(sour);
    console.log(des);
    if (data.s == "" || data.d == "" || data.jdate == "") {
      alert("source or destination or journey Date is not given");
    } else {
      if (data.s == data.d) {
        alert("select different location-Given source and Destination are same");
      }
     

      if (data.jdate <= this.myservice.showTodayDate()) {
        alert("Selected date is in the past- Select a date in future");
      }
      else {
        alert("Selected Source is " + data.d + " And Destination is " + data.s + " - Bus is available for Date of journey is " + data.jdate);
      
      }
    }
  
  }
}
