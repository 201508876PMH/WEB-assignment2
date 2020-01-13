import { Injectable } from '@angular/core';
import {Exercise} from '../models/exercise.model'
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AddExerciseService {

  //baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/';
  baseUrl = 'http://localhost:3000/api/';
  addExerciseUrl = this.baseUrl + 'workoutPrograms/addExercise/';

  constructor(private httpClient: HttpClient, private router: Router) { 
    
  }

  public addExercise(exercice: Exercise, workoutProgramId: String): void {
    this.httpClient.post<Exercise>( this.addExerciseUrl + workoutProgramId, exercice ).subscribe(data => {
        // this.saveToken(data.token);

        this.router.navigate(['/viewWorkoutProgram/' + workoutProgramId]);

        return true;
      }, (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          console.log('An error occured while adding exercise:', err.error.message);
        } else {
          console.log(`Backend return code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }
}
