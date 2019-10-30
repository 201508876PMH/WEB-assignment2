import { Component, OnInit } from '@angular/core';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Observable} from 'rxjs';
import {ViewWorkoutProgramService} from './view-workout-program.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {switchMap} from 'rxjs/Operators';


@Component({
  selector: 'app-view-workout-program',
  templateUrl: './view-workout-program.component.html',
  styleUrls: ['./view-workout-program.component.css']
})
export class ViewWorkoutProgramComponent implements OnInit {

  workoutProgram$: Observable<WorkoutProgram>;

  constructor(private viewWorkoutProgramService: ViewWorkoutProgramService, private route: ActivatedRoute, private router: Router) {
    //this.workoutProgram$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
    //this.viewWorkoutProgramService.getWorkoutProgram(params.get('id'))));

    this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id']);
    


    //this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram('id');
  }

  ngOnInit() {
    
  }

}
