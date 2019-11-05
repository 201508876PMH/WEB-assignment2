import {WorkoutProgram} from '../models/workoutProgram.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkLog} from '../models/workLog.model';
import {publishReplay, refCount} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkoutProgramService {

  baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/';
  workoutProgramsUrl = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/';
  addWorkoutUrl = 'createWorkoutProgram'
  addWorkLogUrl = this.baseUrl + 'users/addWorkLog';

  workoutPrograms: WorkoutProgram[];

  constructor(private httpClient: HttpClient) {
  }

  createWorkout(name: String) {
    return this.httpClient.post(this.workoutProgramsUrl + 'createWorkoutProgram', name);
  }

  public getWorkoutPrograms(): Observable<WorkoutProgram[]> {
    return this.httpClient.get<WorkoutProgram[]>(this.workoutProgramsUrl + 'getWorkoutPrograms');
  }

  public addWorkLog(workLog: WorkLog): void {
    this.httpClient.post<WorkLog>( this.addWorkLogUrl, workLog ).subscribe();
  }
}
