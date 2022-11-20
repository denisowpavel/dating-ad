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
        id: '0',
        gender: Gender.Male,
        lookingFor: Gender.Female,
        goal: Goal.Relationship,
        description:
          'Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores at, eligendi id illum in molestias praesentium quia. Adipisci architecto asperiores autem consequatur ipsam iure magni nihil obcaecati repellendus ullam.',
        location: {
          country: 'Montenegro',
          city: 'Bar',
          latitude: 19.092515,
          longitude: 42.099633,
        },
      },
      {
        id: '1',
        gender: Gender.Female,
        lookingFor: Gender.Male,
        goal: Goal.Relationship,
        description: 'Description 2',
        location: {
          country: 'Montenegro',
          city: 'Budva',
          latitude: 19.092515,
          longitude: 42.099633,
        },
      },
    ]);
  }
}
