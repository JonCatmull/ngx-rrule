import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import * as moment from "moment";
import { timeZones } from "./timezones.const";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  form: UntypedFormGroup;
  rRule;
  testRule;

  hideStart = false;
  hideEnd = false;
  timeZone =
    Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/London";
  timeZones = timeZones;

  maxEndDate = new Date(2025, 0, 5);

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    const startDate = moment()
      .startOf("month")
      .startOf("day")
      .format("YYYYMMDD");
    const endDate = moment().endOf("month").endOf("day").format("YYYYMMDD");
    this.testRule = `DTSTART:${startDate}T000000 RRULE:FREQ=WEEKLY;INTERVAL=2;BYSETPOS=-1;BYDAY=-1MO;UNTIL=${endDate}T000000`;
    this.form = this.formBuilder.group({
      testRule: this.testRule,
    });

    this.form.valueChanges.subscribe(() => {
      this.rRule = this.form.value.testRule.rRule;
    });
  }

  rruleChange(e) {
    const rrule = e.target.value;
    console.log(rrule);
    this.form.patchValue({
      testRule: rrule,
    });
  }
}
