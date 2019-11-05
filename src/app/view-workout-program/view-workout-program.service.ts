import {WorkoutProgram} from '../models/workoutProgram.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { Exercise } from '../models/exercise.model';


@Injectable({
  providedIn: 'root'
})
export class ViewWorkoutProgramService {
  workoutProgramUrl = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/';
  getWorkoutProgramUrl = this.workoutProgramUrl + 'getWorkoutProgram/';
  getExercisesUrl = this.workoutProgramUrl + 'getExercises/';

  constructor(private httpClient: HttpClient) {
  }

  public getWorkoutProgram(id: String): Observable<WorkoutProgram> {    
    return this.httpClient.get<WorkoutProgram>(this.getWorkoutProgramUrl + id);
  }

  public getExercises(id: String): Observable<Exercise[]> {    
    return this.httpClient.get<Exercise[]>(this.getExercisesUrl + id);
  }
}
