import { Gender, Goal } from './enums';
import { IUser } from './user';
import { ILocation } from './location';

export interface IAnnouncement {
  Id: string;
  Gender: Gender;
  LookingFor: Gender;
  Description: string;
  Goal: Goal;
  Location: ILocation;
  User?: IUser;
  Created?: Date;
  Marked?: Date;
}
