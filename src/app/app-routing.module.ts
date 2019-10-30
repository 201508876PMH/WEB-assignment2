import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {WorkoutProgramsComponent} from './workout-programs/workout-programs.component';
import {CreateWorkoutProgramComponent} from './create-workout-program/create-workout-program.component';
import {ViewWorkoutProgramComponent} from './view-workout-program/view-workout-program.component';
import {AuthGuard} from './guards/authGuard';


const routes: Routes = [
  {path: 'createAccount', component: CreateAccountComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'workoutPrograms', component: WorkoutProgramsComponent, canActivate: [AuthGuard]},
  {path: 'workoutPrograms', component: WorkoutProgramsComponent},
  {path: 'createWorkoutProgram', component:CreateWorkoutProgramComponent,  canActivate: [AuthGuard]},
  {path: 'viewWorkoutProgram/:id', component:ViewWorkoutProgramComponent,  canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
