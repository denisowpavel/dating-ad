import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender, Goal } from '@interfaces/enums';
import { SelectService } from '@services/select.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent implements OnInit {
  announcementForm = new FormGroup({
    gender: new FormControl(Gender.Male, Validators.required),
    lookingFor: new FormControl(Gender.Female, Validators.required),
    description: new FormControl('', [Validators.required, Validators.min(10)]),
    goal: new FormControl(Goal.Sex, Validators.required),
    location: new FormGroup({}),
    user: new FormGroup({}),
  });
  constructor(public selectService: SelectService) {}

  ngOnInit(): void {}
}
