import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styles: []
})
export class SimpleFormComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      })
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      "has-error": this.isFieldValid(field),
      "has-feedback": this.isFieldValid(field)
    };
  }
  validateAllFormFields(formGroup: FormGroup) {
    // get a reference for the form keys and iterate
    Object.keys(formGroup.controls).forEach(field => {
      // get the control object
      const control = formGroup.get(field); //{3}
      if (control instanceof FormControl) {
        // if its a control field, mark the control as touched or dirty
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        // otherwise call the method again on the group
        this.validateAllFormFields(control);
      }
    });
  }
  onSubmit() {
    if (this.form.valid) {
      console.log("form submitted");
    } else {
      this.validateAllFormFields(this.form); //{7}
    }
  }

  reset() {
    this.form.reset();
  }
}
