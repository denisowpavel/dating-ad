import { Component, Inject, Injector, OnInit } from '@angular/core';
import { IAnnouncement } from '@interfaces/announcement';
import { Gender, Goal } from '@interfaces/enums';
import { AnnouncementService } from '@services/announcement.service';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogService } from '@taiga-ui/core';
import { AddComponent } from '@components/add/add.component';
import { FilterComponent } from '@components/filter/filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  list: IAnnouncement[] = [];
  private readonly addDialog = this.dialogService.open<string>(
    new PolymorpheusComponent(AddComponent, this.injector),
    {}
  );
  private readonly filterDialog = this.dialogService.open<string>(
    new PolymorpheusComponent(FilterComponent, this.injector),
    {}
  );

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit() {
    this.loadList();
    this.showAddDialog();
  }

  private loadList(): void {
    this.announcementService.list().subscribe((list) => {
      console.log(list);
      this.list = list;
    });
  }

  public showAddDialog(): void {
    this.addDialog.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
  public showFilterDialog(): void {
    this.filterDialog.subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
