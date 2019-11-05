import { Component, OnInit } from '@angular/core';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Observable} from 'rxjs';
import {ViewWorkoutProgramService} from './view-workout-program.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {switchMap, take} from 'rxjs/Operators';


@Component({
  selector: 'app-view-workout-program',
  templateUrl: './view-workout-program.component.html',
  styleUrls: ['./view-workout-program.component.css']
})
export class ViewWorkoutProgramComponent implements OnInit {

  //workoutProgram: WorkoutProgram;
  workoutProgram$: Observable<WorkoutProgram>;

  constructor(private viewWorkoutProgramService: ViewWorkoutProgramService, private route: ActivatedRoute, private router: Router) {
    //this.workoutProgram$ = this.route.paramMap.pipe(switchMap((params: ParamMap) =>
    //this.viewWorkoutProgramService.getWorkoutProgram(params.get('id'))));

    

    //console.log("1: " + this.workoutProgram$.pipe.name);
    this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id']);

    //  this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id'])
    // .subscribe((program) => {
    //     this.workoutProgram = program;
    // });
    /*var workoutPrograms = this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id']).subscribe(
      data => console.log(data)
    );*/
    
    
    //console.log("2: " + this.workoutProgram$.pipe(take(1)));

    //this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram('id');
  }

  ngOnInit() {
    
  }

}
