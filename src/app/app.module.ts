import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { SimpleFormComponent } from "./simple-form.component";
import { FieldErrorDisplayComponent } from "./field-error-display.component";
@NgModule({
  declarations: [AppComponent, SimpleFormComponent, FieldErrorDisplayComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
