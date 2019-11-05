import { Component, OnInit } from '@angular/core';
import {WorkoutProgramService} from '../workout-programs/workout-program.service';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-workout-program',
  templateUrl: './create-workout-program.component.html',
  styleUrls: ['./create-workout-program.component.css']
})
export class CreateWorkoutProgramComponent implements OnInit {
  workoutProgramForm: FormGroup;
  private name;

  constructor(private workoutProgramService: WorkoutProgramService) {
    this.name = new FormControl();
    this.workoutProgramForm = new FormGroup({
      name: this.name
    });
  }

  ngOnInit() {
  }

  createWorkout(value: any) {
    console.log(value);
    this.workoutProgramService.createWorkout(value);
  }
}
