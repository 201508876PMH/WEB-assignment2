import { Component, OnInit } from '@angular/core';
import {WorkLogService} from './work-log.service';
import {Observable} from 'rxjs';
import {WorkLog} from '../models/workLog.model';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {WorkoutProgramService} from '../workout-programs/workout-program.service';

@Component({
  selector: 'app-workLog',
  templateUrl: './work-log.component.html',
  styleUrls: ['./work-log.component.css']
})
export class WorkLogComponent implements OnInit {

  workLogs$: Observable<WorkLog[]>;
  worklogs: WorkLog[];
  workoutProgram$: Observable<WorkoutProgram[]>;
  workoutProgram: WorkoutProgram[];
  constructor(private workLogService: WorkLogService,
              private workoutProgramService: WorkoutProgramService) {}

  ngOnInit() {
    this.workLogService.getWorkLogs().subscribe((data) =>{
      this.worklogs = data;
      console.log(data);
      this.workoutProgram$ = this.workoutProgramService.getWorkoutProgramsByIds(data);
      this.workoutProgram$.subscribe(lort => {
        console.log("lort ",lort);
      });
      console.log("PROGRAM SDSAs",this.workoutProgram$);
    });
  }

}
