import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { NgxRruleComponent } from "./ngx-rrule.component";
import { StartComponent } from "./components/start/start.component";
import { EndComponent } from "./components/end/end.component";
import { RepeatComponent } from "./components/repeat/repeat.component";
import { WeeklyComponent } from "./components/repeat/weekly/weekly.component";
import { MonthlyComponent } from "./components/repeat/monthly/monthly.component";
import { YearlyComponent } from "./components/repeat/yearly/yearly.component";

@NgModule({
  declarations: [
    NgxRruleComponent,
    StartComponent,
    EndComponent,
    RepeatComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonToggleModule,
  ],
  exports: [NgxRruleComponent],
})
export class NgxRruleModule {}
