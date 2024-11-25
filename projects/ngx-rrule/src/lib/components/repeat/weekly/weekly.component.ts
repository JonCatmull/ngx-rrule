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
      days: [],
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
      days: Object.entries(input.days || {})
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key),
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
        interval: this.weeklyForm.value.weeklyInterval ?? 0,
        days: {
          mon: false,
          tue: false,
          wed: false,
          thu: false,
          fri: false,
          sat: false,
          sun: false,
        },
      };

      this.weeklyForm.value.days.forEach((day) => {
        value.days[day] = true;
      });
      this.propagateChange(value);
      this.onChange.emit();
    }
  };
}
