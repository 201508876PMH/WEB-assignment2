import {WorkoutProgram} from '../models/workoutProgram.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutProgramService {

  workoutProgramsUrl = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/';
  workoutPrograms: WorkoutProgram[];

  constructor(private httpClient: HttpClient) {
    //this.getWorkoutPrograms();
  }

  public getWorkoutPrograms(): Observable<WorkoutProgram[]> {

    return this.httpClient.get<WorkoutProgram[]>(this.workoutProgramsUrl + 'getWorkoutPrograms');
  }

  //public addWorkLog(): Observable<WorkoutProgram[]> {
//
  //  return this.httpClient.get<WorkoutProgram[]>(this.workoutProgramsUrl + 'getWorkoutPrograms');
  //}
}
