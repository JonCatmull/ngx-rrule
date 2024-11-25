# NgxRrule

> Recurrence rules generator form control for Angular

> Inspired and partially forked from https://github.com/Fafruch/react-rrule-generator  
> Forked from [kumar-muthu/ngx-rrule](https://github.com/kumar-muthu/ngx-rrule)

[![Alpha](https://img.shields.io/badge/status-alpha-yellow.svg)](Alpha)
[![npm version](https://badge.fury.io/js/ngx-rrule.svg)](https://badge.fury.io/js/ngx-rrule)
[![LICENSE](https://img.shields.io/npm/l/express.svg)](LICENSE)

## Description

This is an [Angular](https://angular.io/) form control for generating recurrence rules, styled with [Angular Material](https://material.angular.io/). It's built with the help of the powerful [rrule.js](https://github.com/jakubroztocil/rrule) library.

It also uses:

- [lodash](https://github.com/lodash/lodash)

This project is a fork of [kumar-muthu/ngx-rrule](https://github.com/kumar-muthu/ngx-rrule), updated to integrate Angular Material for styling and modern UI enhancements.

## Demo

https://kumar-muthu.github.io/ngx-rrule/

## Installation and Docs

#### Install

```bash
$ ng add @angular/material
$ npm i @unbroken/ngx-rrule rrule
```

#### Import `NgxRruleModule` in your app:

```ts
import { NgxRruleModule } from "ngx-rrule";

@NgModule({
  imports: [NgxRruleModule],
})
export class AppModule {}
```

#### Global Styles (`styles.scss`)

Add Angular Material typography and theming to your styles:

```scss
@import "@angular/material/prebuilt-themes/indigo-pink.css";
@import "@angular/material/core/theming/all-theme";
```

#### Example Usage (`app.component.html`)

```html
<form [formGroup]="myform">
  <ngx-rrule formControlName="testRule" [hideStart]="false" [hideEnd]="false" tz="America/New_York" [frequency]="['Daily', 'Monthly', 'Weekly', 'Yearly']"></ngx-rrule>
</form>
```

#### Example Component (`app.component.ts`)

```ts
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  myform: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myform = this.formBuilder.group({
      testRule: "",
    });

    this.myform.valueChanges.subscribe(() => {
      const rRuleFormValue = this.myform.value.testRule;

      // Get the rrule object.
      // This is an instance of RRule. Refer to https://github.com/jakubroztocil/rrule on how to use it
      console.log(rRuleFormValue.rRule);

      // Optional - Raw value of the ngxRrule used internally
      console.log(rRuleFormValue.raw);
    });
  }
}
```

### Options

| Option      | Description                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| `hideStart` | (optional) Hides the start date part in the form. Defaults to `false`.                                        |
| `hideEnd`   | (optional) Hides the until (end) date part in the form. Defaults to `false`.                                  |
| `frequency` | (required) Specifies one or more of the following recurrence options: `Daily`, `Weekly`, `Monthly`, `Yearly`. |
| `tz`        | (optional) Sets the timezone. Defaults to the local timezone.                                                 |

---

## Features

- **Angular Material Styling**: Fully integrated with Angular Material for consistent, modern UI.
- **Dynamic Recurrence Options**: Supports `Daily`, `Weekly`, `Monthly`, and `Yearly` recurrence frequencies.
- **Timezone Support**: Configure timezone for recurrence rules.

## Credit

- Forked from [kumar-muthu/ngx-rrule](https://github.com/kumar-muthu/ngx-rrule)
- Inspired by [Fafruch/react-rrule-generator](https://github.com/Fafruch/react-rrule-generator)

## License

MIT
