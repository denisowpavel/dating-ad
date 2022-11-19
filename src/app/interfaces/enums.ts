export enum Gender {
  Female,
  Male,
  Couple,
  Intersex,
  Transgender,
}

 export interface ISelectListItem<Gender> [] = [
    { code:  Gender.Female , label: 'Female' },
  ];
export enum Goal {
  Relationship,
  Sex,
  Travel,
  Virtual,
}
