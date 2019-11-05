import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {WorkLog} from '../models/workLog.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkLogService {

  baseUrl = 'https://protected-eyrie-63584.herokuapp.com/api/';
  worklogUrl: string = this.baseUrl + "workLog/getWorkLog";

  constructor(private httpClient: HttpClient) { }

  getWorkLogs(): Observable<WorkLog[]>{
    return this.httpClient.get<WorkLog[]>(this.worklogUrl);

  }
}
