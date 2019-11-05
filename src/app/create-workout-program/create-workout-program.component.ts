import { Component, OnInit } from '@angular/core';
import {WorkoutProgramService} from '../workout-programs/workout-program.service';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-workout-program',
  templateUrl: './create-workout-program.component.html',
  styleUrls: ['./create-workout-program.component.css']
})
export class CreateWorkoutProgramComponent implements OnInit {
  workoutProgramForm: FormGroup;
  private name;

  constructor(private workoutProgramService: WorkoutProgramService,
              private router: Router,) {
    this.name = new FormControl();
    this.workoutProgramForm = new FormGroup({
      name: this.name
    });
  }

  ngOnInit() {
  }

  createWorkout(value: any) {

    this.workoutProgramService.createWorkout(value).subscribe((data) => {
      if(data) {
        this.router.navigate(['/workoutPrograms']);
      }
    });
  }
}
