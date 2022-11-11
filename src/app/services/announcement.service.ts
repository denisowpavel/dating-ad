import { Injectable } from '@angular/core';
import { Gender, Goal } from '@interfaces/enums';
import { Observable, of } from 'rxjs';
import { IAnnouncement } from '@interfaces/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  public list(): Observable<IAnnouncement[]> {
    return this.MOCList();
  }

  public MOCList(): Observable<IAnnouncement[]> {
    return of([
      {
        Id: '0',
        Gender: Gender.Male,
        LookingFor: Gender.Female,
        Goal: Goal.Relationship,
        Description:
          'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at, eligendi id illum in molestias praesentium quia. Adipisci architecto asperiores autem consequatur ipsam iure magni nihil obcaecati repellendus ullam.',
        Location: {
          Country: 'Montenegro',
          City: 'Bar',
          Latitude: 19.092515,
          Longitude: 42.099633,
        },
      },
      {
        Id: '1',
        Gender: Gender.Female,
        LookingFor: Gender.Male,
        Goal: Goal.Relationship,
        Description: 'Description 2',
        Location: {
          Country: 'Montenegro',
          City: 'Budva',
          Latitude: 19.092515,
          Longitude: 42.099633,
        },
      },
    ]);
  }
}
