import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerComponent } from './passenger/passenger.component';
import { BussearchComponent } from './bussearch/bussearch.component';

const routes: Routes = [
  { path: "bussearch/passenger", component: PassengerComponent },
  { path: "bussearch", component: BussearchComponent },
  { path: '', redirectTo: 'bussearch', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

