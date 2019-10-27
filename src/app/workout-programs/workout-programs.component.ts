import {WorkoutProgramService} from './workout-program.service';
import {Observable} from 'rxjs';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-workout-programs',
  templateUrl: './workout-programs.component.html',
  styleUrls: ['./workout-programs.component.css']
})
export class WorkoutProgramsComponent implements OnInit {

  workoutPrograms$: Observable<WorkoutProgram[]>;

  constructor(private workoutProgramService: WorkoutProgramService) {
    this.workoutPrograms$ = this.workoutProgramService.getWorkoutPrograms();
  }

  ngOnInit() {
  }

}
