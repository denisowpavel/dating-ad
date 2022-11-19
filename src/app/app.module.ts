import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiModeModule,
  TuiButtonModule,
  TuiSvgModule, TuiDataListModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  TuiActionModule,
  TuiInputModule,
  TuiMarkerIconModule, TuiSelectModule, TuiTextAreaModule,
  TuiToggleModule,
} from '@taiga-ui/kit';
import { LocationPipe } from './pipes/location.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { AddComponent } from './components/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LocationPipe, FilterComponent, AddComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiModeModule,
    TuiActionModule,
    TuiButtonModule,
    TuiInputModule,
    TuiToggleModule,
    TuiMarkerIconModule,
    TuiSvgModule,
    TuiTextAreaModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiSelectModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
