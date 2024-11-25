import {
  Component,
  OnInit,
  Output,
  forwardRef,
  EventEmitter,
} from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import * as _ from "lodash";

@Component({
  standalone: false,
  selector: "ngx-weekly",
  templateUrl: "./weekly.component.html",
  styleUrls: ["./weekly.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WeeklyComponent),
      multi: true,
    },
  ],
})
export class WeeklyComponent implements OnInit, ControlValueAccessor {
  @Output() onChange = new EventEmitter();
  public weeklyForm: UntypedFormGroup;
  private propagateChange;
  public days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.weeklyForm = this.formBuilder.group({
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      weeklyInterval: 0,
    });

    this.weeklyForm.valueChanges.subscribe(() => {
      this.onFormChange();
    });

    setTimeout(() => {
      this.onFormChange();
    }, 100);
  }

  writeValue = (input: any): void => {
    this.weeklyForm.patchValue({
      ...input.days,
      weeklyInterval: input.interval,
    });
  };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onFormChange = () => {
    if (this.propagateChange) {
      const value = {
        interval: 0,
        days: [],
      };

      value.interval = this.weeklyForm.value.weeklyInterval;
      value.days = _.omit(this.weeklyForm.value, ["weeklyInterval"]);
      this.propagateChange(value);
      this.onChange.emit();
    }
  };
}
