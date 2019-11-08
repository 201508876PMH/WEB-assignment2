import {WorkoutProgramService} from './workout-program.service';
import {Observable} from 'rxjs';
import {WorkoutProgram} from '../models/workoutProgram.model';
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {WorkLog} from '../models/workLog.model';
import {AuthenticationService} from '../shared/authentication.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/internal/operators/startWith';
import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {MediaObserver} from '@angular/flex-layout';

export interface DialogData {
  workoutProgramId: string;
}

@Component({
  selector: 'app-workout-programs',
  templateUrl: './workout-programs.component.html',
  styleUrls: ['./workout-programs.component.css']
})

export class WorkoutProgramsComponent implements OnInit {
  workoutPrograms: WorkoutProgram[];
  workoutPrograms$: Observable<WorkoutProgram[]>;
  filter: FormControl;
  filter$: Observable<string>;
  filteredWorkOutPrograms$: Observable<WorkoutProgram[]>;

  constructor(private workoutProgramService: WorkoutProgramService,
              public dialog: MatDialog,
              private route: ActivatedRoute,
              public authService: AuthenticationService,
              private media: MediaObserver) {
  }

  ngOnInit() {
    this.workoutPrograms$ = this.workoutProgramService.getWorkoutPrograms();
    this.filter = new FormControl();
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));
    if (this.filter$) {
      this.filteredWorkOutPrograms$ = combineLatest(this.workoutPrograms$, this.filter$).pipe(
        map(([students, filterString]) => students.filter(student =>
          student.name.indexOf(filterString) !== -1))
      );
    }
    // MED RESOLVER
    this.workoutPrograms = this.route.snapshot.data['workoutProgramList'];
  }

  isEven(n) {
    return n % 2 == 0;
  }

  openDialog(workoutProgramId: string): void {
    const dialogRef = this.dialog.open(WorkLogDialogComponent, {
      data: {workoutProgramId}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
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
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<WorkLogDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private workoutProgramService: WorkoutProgramService,
    public AuthService: AuthenticationService) {
    this.maxDate = new Date();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddClick(workoutProgramId: string): void {
    const workLog = new WorkLog(this.date, workoutProgramId);
    this.workoutProgramService.addWorkLog(workLog);
    this.dialogRef.close();
  }
}
