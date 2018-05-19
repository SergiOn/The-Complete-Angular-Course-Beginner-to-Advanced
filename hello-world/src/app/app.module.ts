import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { TitleCasePipe } from './title-case.pipe';
import {FavoriteComponent} from "./favorite.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    SignupFormComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
