import {WorkoutProgram} from '../models/workoutProgram.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewWorkoutProgramService {

  workoutProgramUrl = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/getWorkoutProgram/';
  workoutProgram: WorkoutProgram;

  constructor(private httpClient: HttpClient) {
    //this.getWorkoutProgram();
  }

  public getWorkoutProgram(id: String): Observable<WorkoutProgram> {

    return this.httpClient.get<WorkoutProgram>(this.workoutProgramUrl + id);
  }
}
