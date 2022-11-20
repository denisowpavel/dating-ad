import { Gender, Goal } from './enums';
import { IUser } from './user';
import { ILocation } from './location';

export interface IAnnouncement {
  id: string;
  gender: Gender;
  lookingFor: Gender;
  description: string;
  goal: Goal;
  location: ILocation;
  user?: IUser;
  created?: Date;
  marked?: Date;
}
