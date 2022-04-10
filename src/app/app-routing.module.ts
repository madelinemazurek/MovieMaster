import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutComponent } from './components/about/about.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { TicketSelectComponent } from './components/ticket-select/ticket-select.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddTheaterComponent } from './components/add-theater/add-theater.component';
import { AddBranchComponent } from './components/add-branch/add-branch.component';
import { AddShowsComponent } from './components/add-shows/add-shows.component';
import { AddShowroomComponent } from './components/add-showroom/add-showroom.component';
import { AddShowingComponent } from './components/add-showing/add-showing.component';
import { AddTicketsComponent } from './components/add-tickets/add-tickets.component';
import { AddSystemAdminComponent } from './components/add-system-admin/add-system-admin.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddMovieWriterComponent } from './components/add-movie-writer/add-movie-writer.component';
import { AddMovieCastComponent } from './components/add-movie-cast/add-movie-cast.component';
import { AddMovieDirectorComponent } from './components/add-movie-director/add-movie-director.component';
import { AddMovieGenreComponent } from './components/add-movie-genre/add-movie-genre.component';
import { AddMovieProducerComponent } from './components/add-movie-producer/add-movie-producer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { DeleteBranchComponent } from './components/delete-branch/delete-branch.component';
import { DeleteMovieComponent } from './components/delete-movie/delete-movie.component';
import { DeleteMovieCastComponent } from './components/delete-movie-cast/delete-movie-cast.component';
import { DeleteMovieDirectorComponent } from './components/delete-movie-director/delete-movie-director.component';
import { DeleteMovieGenreComponent } from './components/delete-movie-genre/delete-movie-genre.component';
import { DeleteMovieProducerComponent } from './components/delete-movie-producer/delete-movie-producer.component';
import { DeleteMovieWriterComponent } from './components/delete-movie-writer/delete-movie-writer.component';
import { DeleteShowingComponent } from './components/delete-showing/delete-showing.component';
import { DeleteShowroomComponent } from './components/delete-showroom/delete-showroom.component';
import { DeleteShowsComponent } from './components/delete-shows/delete-shows.component';
import { DeleteSystemAdminComponent } from './components/delete-system-admin/delete-system-admin.component';
import { DeleteTheaterComponent } from './components/delete-theater/delete-theater.component';
import { DeleteTicketsComponent } from './components/delete-tickets/delete-tickets.component';
import { UserValidationService } from './services/user-validation.service';
import { AdminValidationService } from './services/admin-validation.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'adminPage', component: AdminPageComponent, canActivate:[AdminValidationService]},
  {path: 'ticketselect', component: TicketSelectComponent},
  {path: 'checkout', component: CheckoutComponent, canActivate:[UserValidationService]},
  {path: 'addTheater', component: AddTheaterComponent},
  {path: 'addShow', component:AddShowsComponent},
  {path: 'addBranch', component:AddBranchComponent},
  {path: 'addShowroom', component:AddShowroomComponent},
  {path: 'addShowing', component:AddShowingComponent},
  {path: 'addTicket', component:AddTicketsComponent},
  {path: 'addSystemAdmin', component:AddSystemAdminComponent},
  {path: 'addMovie', component:AddMovieComponent},
  {path: 'addMovieWriter', component:AddMovieWriterComponent},
  {path: 'addMovieCast', component:AddMovieCastComponent},
  {path: 'addMovieDirector', component:AddMovieDirectorComponent},
  {path: 'addMovieGenre', component:AddMovieGenreComponent},
  {path: 'addMovieProducer', component:AddMovieProducerComponent},
  {path: 'deleteBranch', component:DeleteBranchComponent},
  {path: 'deleteCustomer', component:DeleteCustomerComponent},
  {path: 'deleteMovie', component:DeleteMovieComponent},
  {path: 'deleteMovieCast', component:DeleteMovieCastComponent},
  {path: 'deleteMovieDirector', component:DeleteMovieDirectorComponent},
  {path: 'deleteMovieGenre', component:DeleteMovieGenreComponent},
  {path: 'deleteMovieProducer', component:DeleteMovieProducerComponent},
  {path: 'deleteMovieWriter', component:DeleteMovieWriterComponent},
  {path: 'deleteShowing', component:DeleteShowingComponent},
  {path: 'deleteShowroom', component:DeleteShowroomComponent},
  {path: 'deleteShows', component:DeleteShowsComponent},
  {path: 'deleteSystemAdmin', component:DeleteSystemAdminComponent},
  {path: 'deleteTheater', component:DeleteTheaterComponent},
  {path: 'deleteTicket', component:DeleteTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserValidationService, AdminValidationService]
})
export class AppRoutingModule { }
