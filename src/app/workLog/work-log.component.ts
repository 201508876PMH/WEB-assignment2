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
  workoutPrograms: WorkoutProgram[];
  constructor(private workLogService: WorkLogService,
              private workoutProgramService: WorkoutProgramService) {}

  ngOnInit() {
    this.workLogService.getWorkLogs().subscribe((data) =>{
      this.worklogs = data;
      console.log(data);
      this.workoutProgram$ = this.workoutProgramService.getWorkoutProgramsByIds(data);
      this.workoutProgram$.subscribe(lort => {
        console.log("lort ",lort);
        this.workoutPrograms = lort;
      });
      console.log("PROGRAM SDSAs",this.workoutProgram$);
    });
  }

  getNameForWorkout(worklog: WorkLog) {
    // return this.workoutPrograms.indexOf(worklog.workoutProgramId).name;
  }
}
