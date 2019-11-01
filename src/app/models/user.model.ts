import {WorkLog} from './workLog.model';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  emailAddress: string;
  workLogs: WorkLog[];
}
