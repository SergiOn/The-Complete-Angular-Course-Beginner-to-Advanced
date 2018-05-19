import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TitleCasePipe } from './title-case.pipe';
import {FavoriteComponent} from "./favorite.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewCourseFormComponent} from "./new-course-form/new-course-form.component";
import { InputFormatDirective } from './input-format/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    TitleCasePipe,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
