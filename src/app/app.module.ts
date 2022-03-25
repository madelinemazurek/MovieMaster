import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { TicketSelectComponent } from './components/ticket-select/ticket-select.component';
import { AddTheaterComponent } from './components/add-theater/add-theater.component';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { AddShowroomComponent } from './components/add-showroom/add-showroom.component';
import { AddShowingComponent } from './components/add-showing/add-showing.component';
import { AddTicketsComponent } from './components/add-tickets/add-tickets.component';
import { AddSystemAdminComponent } from './components/add-system-admin/add-system-admin.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    AboutComponent,
    AdminloginComponent,
    CheckoutComponent,
    AdminPageComponent,
    TicketSelectComponent,
    AddTheaterComponent,
    AddShowsComponent,
    AddBranchComponent,
    AddShowroomComponent,
    AddShowingComponent,
    AddTicketsComponent,
    AddSystemAdminComponent,
    AddMovieComponent,
  ],
  imports: [
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
