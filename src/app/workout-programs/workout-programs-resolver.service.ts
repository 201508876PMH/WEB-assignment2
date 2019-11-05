import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {WorkoutProgramService} from './workout-program.service';

@Injectable({
  providedIn: 'root'
})

export class WorkoutProgramsResolverService implements Resolve<any> {

  constructor(private http: HttpClient,
              private workoutProgramService: WorkoutProgramService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> | Promise<any> | any {

    return this.workoutProgramService.getWorkoutPrograms();
  }
}
