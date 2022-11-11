import { Component, OnInit } from '@angular/core';
import { IAnnouncement } from '@interfaces/announcement';
import { Gender, Goal } from '@interfaces/enums';
import { AnnouncementService } from '@services/announcement.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  list: IAnnouncement[] = [];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit() {
    this.loadList();
  }

  private loadList(): void {
    this.announcementService.list().subscribe((list) => {
      console.log(list);
      this.list = list;
    });
  }
}
