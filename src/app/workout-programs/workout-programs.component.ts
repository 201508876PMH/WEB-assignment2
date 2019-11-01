import {WorkoutProgramService} from './workout-program.service';
import {Observable} from 'rxjs';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  workoutProgramId: string;
}

@Component({
  selector: 'app-workout-programs',
  templateUrl: './workout-programs.component.html',
  styleUrls: ['./workout-programs.component.css']
})
export class WorkoutProgramsComponent implements OnInit {

  workoutPrograms$: Observable<WorkoutProgram[]>;

  constructor(private workoutProgramService: WorkoutProgramService, public dialog: MatDialog) {
    this.workoutPrograms$ = this.workoutProgramService.getWorkoutPrograms();
  }

  ngOnInit() {
  }


  openDialog(workoutProgramId: string): void {
    const dialogRef = this.dialog.open(WorkLogDialogComponent, {
      data: {workoutProgramId}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  addWorkLog(workoutProgram: string) {
    console.log(workoutProgram);

  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'work-log-dialog',
  templateUrl: 'work-log-dialog.html',
})

// tslint:disable-next-line:component-class-suffix
export class WorkLogDialogComponent {
  date: Date;

  constructor(
    public dialogRef: MatDialogRef<WorkLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onAddClick(workoutProgramId: string): void {
    console.log(this.date);
    this.dialogRef.close();
  }

}
