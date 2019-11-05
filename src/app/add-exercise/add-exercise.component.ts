import { Component, OnInit } from '@angular/core';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Observable} from 'rxjs';
import {ViewWorkoutProgramService} from '../view-workout-program/view-workout-program.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AddExerciseService } from './add-exercise.service';
import {Exercise} from '../models/exercise.model'

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  workoutProgram$: Observable<WorkoutProgram>;
  exerciseForm: FormGroup;
  private exercise: FormControl;
  private description: FormControl;
  private set: FormControl;
  private reps: FormControl;

  constructor(private viewWorkoutProgramService: ViewWorkoutProgramService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private addExerciseService: AddExerciseService) {

    this.workoutProgram$ = this.viewWorkoutProgramService.getWorkoutProgram(this.route.snapshot.params['id']);

    this.exercise = new FormControl();
    this.description = new FormControl();
    this.set = new FormControl();
    this.reps = new FormControl();

    this.exerciseForm = new FormGroup({
      exercise: this.exercise,
      description: this.description,
      set: this.set,
      reps: this.reps
    });
  }

  ngOnInit() {
    this.exerciseForm = this.formBuilder.group({
      exercise: [null, [Validators.required]],
      description: [null, [Validators.required]],
      set: [null, [Validators.required]],
      reps: [null, [Validators.required]]
    });
  }

  addExercise(value: Exercise) {
    console.log("AddExercise: ", value);

    //var id = this.workoutProgram$.subscribe()
    //console.log(id)
    //this.workoutProgram$.subscribe(data => {
//
    //})
    this.addExerciseService.addExercise(value, this.route.snapshot.params['id']);
  }

}
