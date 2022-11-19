import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, Goal } from '@interfaces/enums';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  announcementForm = new FormGroup({
    Gender: new FormControl(Gender.Male, Validators.required),
    LookingFor: new FormControl(Gender.Female, Validators.required),
    Description: new FormControl('', [Validators.required, Validators.min(10)]),
    Goal: new FormControl(Goal.Sex, Validators.required),
    Location: new FormGroup({}),
    User: new FormGroup({}),
  });
  constructor() {}

  ngOnInit(): void {}
}
