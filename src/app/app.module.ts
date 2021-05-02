import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { FormsModule } from '@angular/forms';
import { PassengerComponent } from './passenger/passenger.component';
import { MyserviceService } from './myservice.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BussearchComponent,
    PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   // Validators,
  //  FormBuilder,
   // FormGroup,
    //FormControl
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
