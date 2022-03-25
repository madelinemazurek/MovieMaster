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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'about', component: AboutComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'adminPage', component: AdminPageComponent},
  {path: 'ticketselect', component: TicketSelectComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'addTheater', component: AddTheaterComponent},
  {path: 'addShow', component:AddShowsComponent},
  {path: 'addBranch', component:AddBranchComponent},
  {path: 'addShowroom', component:AddShowroomComponent},
  {path: 'addShowing', component:AddShowingComponent},
  {path: 'addTicket', component:AddTicketsComponent},
  {path: 'addSystemAdmin', component:AddSystemAdminComponent},
  {path: 'addMovie', component:AddMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
