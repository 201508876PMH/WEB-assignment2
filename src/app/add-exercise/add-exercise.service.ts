import { Injectable } from '@angular/core';
import {Exercise} from '../models/exercise.model'
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddExerciseService {

  baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/';
  addExerciseUrl = this.baseUrl + 'addExercise/';

  constructor(private httpClient: HttpClient) { 
    
  }

  public addExercise(exercice: Exercise, workoutProgramId: String): void {
    this.httpClient.post<Exercise>( this.addExerciseUrl + workoutProgramId, exercice ).subscribe();
  }
}
