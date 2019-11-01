export class WorkLog {
  constructor(date: Date, workoutProgramId: string) {
    this.date = date;
    this.workoutProgramId = workoutProgramId;
  }
    date: Date;
    workoutProgramId: string;
}
