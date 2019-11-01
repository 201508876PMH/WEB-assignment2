import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {HeaderComponent} from './header/header.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {WorkLogDialogComponent, WorkoutProgramsComponent} from './workout-programs/workout-programs.component';
import {HomeComponent} from './home/home.component';
import {CarouselComponent} from './home/carousel/carousel.component';
import {NgbCarouselModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guards/authGuard';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatListModule,
  MatSnackBarModule,
  MatNativeDateModule,
  MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateWorkoutProgramComponent} from './create-workout-program/create-workout-program.component';
import {ViewWorkoutProgramComponent} from './view-workout-program/view-workout-program.component';
import {AuthInterceptor} from './shared/auth.intercepter';



@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    HeaderComponent,
    PageNotFoundComponent,
    LoginComponent,
    WorkoutProgramsComponent,
    HomeComponent,
    CarouselComponent,
    CreateWorkoutProgramComponent,
    ViewWorkoutProgramComponent,
    WorkLogDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbModule,
    MatListModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  entryComponents: [WorkLogDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
