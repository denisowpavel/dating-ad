import { Injectable } from '@angular/core';
import {Gender} from "@interfaces/enums";
import {ISelectListItem} from "@interfaces/select-list";

@Injectable({
  providedIn: 'root'
})
export class SelectService {
   genderList: readonly ISelectListItem<Gender> [] = [
    { key:  Gender.Female , label: 'Female' },
    { key:  Gender.Male , label: 'Male' },
    { key:  Gender.Couple , label: 'Couple' },
    { key:  Gender.Intersex , label: 'Intersex' },
    { key:  Gender.Transgender , label: 'Transgender' },
   ];

  constructor() { }
}
