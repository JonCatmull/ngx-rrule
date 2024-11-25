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
  selector: "ngx-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StartComponent),
      multi: true,
    },
  ],
})
export class StartComponent implements OnInit, ControlValueAccessor {
  @Output() onChange = new EventEmitter();
  public form: UntypedFormGroup;
  public startDate;
  private propagateChange;

  constructor(private formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      startDate: "",
    });

    setTimeout(() => {
      this.form.valueChanges.subscribe(() => {
        this.onFormChange();
      });
      this.onFormChange();
    }, 100);
  }

  writeValue = (input: any): void => {
    this.form.patchValue({
      startDate: new Date(input.onDate.date),
    });
  };

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  onFormChange = () => {
    if (this.propagateChange) {
      this.propagateChange({
        onDate: {
          date: new Date(this.form.value.startDate),
        },
      });
    }
    this.onChange.emit();
  };
}
