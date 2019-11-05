import {WorkoutProgram} from '../models/workoutProgram.model';
import {HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkLog} from '../models/workLog.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutProgramService {

  baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/';
  workoutProgramsUrl = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/';
  addWorkoutUrl = 'createWorkoutProgram';
  addWorkLogUrl = this.baseUrl + 'users/addWorkLog';

  workoutPrograms: WorkoutProgram[];
  private workoutProgramsByIdUrl: string = 'https://protected-eyrie-63584.herokuapp.com/api/workoutPrograms/getWorkourProgramsById';

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  createWorkout(name: String): any {
    this.httpClient.post(this.workoutProgramsUrl + 'createWorkoutProgram', name).subscribe((data) => {
        this.router.navigate(['/workoutPrograms']);
        return true;
      }, (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {
          console.log('An error occured while creating workout program:', err.error.message);
        } else {
          console.log(`Backend return code ${err.status}, body was: ${err.error}`);
        }
      }
    );
  }

  public getWorkoutPrograms(): Observable<WorkoutProgram[]> {
    return this.httpClient.get<WorkoutProgram[]>(this.workoutProgramsUrl + 'getWorkoutPrograms');
  }

  public addWorkLog(workLog: WorkLog): void {
    this.httpClient.post<WorkLog>(this.addWorkLogUrl, workLog).subscribe();
  }

  getWorkoutProgramsByIds(workoutProgramIds): Observable<WorkoutProgram[]> {

    return this.httpClient.post<WorkoutProgram[]>(this.workoutProgramsByIdUrl, workoutProgramIds);
  }
}
