import { Component, OnInit } from '@angular/core';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Observable} from 'rxjs';
import {ViewWorkoutProgramService} from './view-workout-program.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {switchMap, take} from 'rxjs/Operators';
import { Exercise } from '../models/exercise.model';


@Component({
  selector: 'app-view-workout-program',
  templateUrl: './view-workout-program.component.html',
  styleUrls: ['./view-workout-program.component.css']
})
export class ViewWorkoutProgramComponent implements OnInit {

  //workoutProgram: WorkoutProgram;
  workoutProgram$: Observable<WorkoutProgram>;
  exercises$: Observable<Exercise[]>;

  constructor(private viewWorkoutProgramService: ViewWorkoutProgramService, 
    private route: ActivatedRoute, 
    private router: Router) {
      this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id']);
      this.exercises$ = this.viewWorkoutProgramService.getExercises(this.route.snapshot.params['id']);
      
      console.log("Exercises: ", this.exercises$)
  }

  ngOnInit() {
    
  }

}
