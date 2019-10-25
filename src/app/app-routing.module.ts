import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WorkoutProgramsComponent } from './workout-programs/workout-programs.component';


const routes: Routes = [
  { path: 'createAccount', component: CreateAccountComponent },  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workoutPrograms', component: WorkoutProgramsComponent },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
