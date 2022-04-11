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
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

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
import { AddMovieProducerComponent } from './components/add-movie-producer/add-movie-producer.component';
import { AddMovieWriterComponent } from './components/add-movie-writer/add-movie-writer.component';
import { AddMovieCastComponent } from './components/add-movie-cast/add-movie-cast.component';
import { AddMovieGenreComponent } from './components/add-movie-genre/add-movie-genre.component';
import { AddMovieDirectorComponent } from './components/add-movie-director/add-movie-director.component';
import { DeleteTheaterComponent } from './components/delete-theater/delete-theater.component';
import { DeleteShowsComponent } from './components/delete-shows/delete-shows.component';
import { DeleteBranchComponent } from './components/delete-branch/delete-branch.component';
import { DeleteShowroomComponent } from './components/delete-showroom/delete-showroom.component';
import { DeleteShowingComponent } from './components/delete-showing/delete-showing.component';
import { DeleteTicketsComponent } from './components/delete-tickets/delete-tickets.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { DeleteSystemAdminComponent } from './components/delete-system-admin/delete-system-admin.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { DeleteMovieWriterComponent } from './components/delete-movie-writer/delete-movie-writer.component';
import { DeleteMovieProducerComponent } from './components/delete-movie-producer/delete-movie-producer.component';
import { DeleteMovieCastComponent } from './components/delete-movie-cast/delete-movie-cast.component';
import { DeleteMovieGenreComponent } from './components/delete-movie-genre/delete-movie-genre.component';
import { DeleteMovieDirectorComponent } from './components/delete-movie-director/delete-movie-director.component';

import { HttpClientModule } from '@angular/common/http';
import { TheaterService } from 'src/app/services/theater.service';
import { WebRequestService } from './services/web-request.service';
import { BranchService } from './services/branch.service';
import { MatExpansionPanel } from '@angular/material/expansion';

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
    AddMovieProducerComponent,
    AddMovieWriterComponent,
    AddMovieCastComponent,
    AddMovieGenreComponent,
    AddMovieDirectorComponent,
    DeleteTheaterComponent,
    DeleteShowsComponent,
    DeleteBranchComponent,
    DeleteShowroomComponent,
    DeleteShowingComponent,
    DeleteTicketsComponent,
    DeleteCustomerComponent,
    DeleteSystemAdminComponent,
    DeleteMovieComponent,
    DeleteMovieWriterComponent,
    DeleteMovieProducerComponent,
    DeleteMovieCastComponent,
    DeleteMovieGenreComponent,
    DeleteMovieDirectorComponent
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
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [
    TheaterService,
    WebRequestService,
    BranchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
