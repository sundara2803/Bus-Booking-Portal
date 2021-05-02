import { Component, OnInit, Input } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { NewserviceService } from '../newservice.service';
import * as moment from 'moment';

import { FormBuilder,Validators, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  public formGroup: FormGroup;
//public numb: FormArray;
  constructor(private myservice: MyserviceService, public newservice: NewserviceService,private formBuilder: FormBuilder) { 
    console.log(this.newservice);
  }
  ngOnInit() {
    this.getArray()
    this.createFormGroup()
    
  }
  nums = [];
  //nums: number[];
  num;
  getArray() {
    console.log(this.newservice.bd);
    let i = 0;
    console.log("Hello");
    this.num = this.newservice.noOfPassenger;
    console.log(this.num);
    for (i = 1; i <= this.num; i++){
      console.log("hi");
      this.nums.push(i);
      console.log("how r u"); 
    }
    
    console.log(this.nums);
    return this.nums;  
  }

  createFormGroup() {
    this.formGroup = this.formBuilder.group({
      "passenger": this.formBuilder.group({
        'name': ['', Validators.compose([Validators.required])],
        'seat': ['', Validators.compose([Validators.required])],
        'gender': ['', Validators.compose([Validators.required])]
       // numb: this.formBuilder.array([this.passengers()])
      })
    })
  }
  /* name: '',
      dob:'',
      seat: '',
      gender:'',
      price: */
  
  //  passengers(): FormGroup {
  //   return this.formBuilder.group({
  //      numb=this.newservice.noOfPassenger
  //   });
  // } 
  

  age;
  public calculateAge(birthdate: any): number {
    console.log(birthdate);
    return this.age = moment().diff(birthdate, 'years');  
  }
  busBooked() {
    alert("Bus is booked successfully- Happy journey");
  }
  
}
  //nums: number[] = [1, 2, 3];
  // nums;
  // getData() {
  //   this.nums=this.newservice.noOfPassenger;
  //  return this.nums;
  // }
  
 /*  public ageFromDOB(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  } */
 
   /* public CalculateAge(data): void
   {
    console.log("Hello");
     console.log(data.target.value);
   
     const today = this.myservice.showTodayDate();
      /*      var timeDiff = Math.abs(Date.now() - data.target.value);
          this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365); 
     console.log(timeDiff); */
    /*  let dob = data.target.value;
     console.log(today);
     console.log(today.getFullYear());
     let age = today.getFullYear() - dob.getFullYear();
     console.log(age);
     const m = today.getMonth() - dob.getMonth();
     console.log(m);
     if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
       age--;
     }
     console.log(age);
   }  */
