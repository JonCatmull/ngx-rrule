import {
  Component,
  OnInit,
  Output,
  forwardRef,
  EventEmitter,
} from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from "@angular/forms";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  standalone: false,
  selector: "ngx-yearly",
  templateUrl: "./yearly.component.html",
  styleUrls: ["./yearly.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearlyComponent),
      multi: true,
    },
  ],
})
export class YearlyComponent implements OnInit, ControlValueAccessor {
  @Output() onChange = new EventEmitter();
  public form: UntypedFormGroup;
  private propagateChange;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      interval: 0,
      mode: "on",
      on: this.formBuilder.group({
        month: "Jan",
        day: 1,
      }),
      onThe: this.formBuilder.group({
        month: "Jan",
        day: "Monday",
        which: "First",
      }),
    });

    this.form.valueChanges.subscribe(() => {
      this.onFormChange();
    });

    setTimeout(() => {
      this.onFormChange();
    }, 100);
  }

  writeValue = (input: any): void => {
    this.form.patchValue(input);
  };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onFormChange = () => {
    if (this.propagateChange) {
      this.propagateChange(this.form.value);
    }
    this.onChange.emit();
  };

  public range = (start, end) =>
    Array.from({ length: end - start }, (v, k) => k + start);
}
