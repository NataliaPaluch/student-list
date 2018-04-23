import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentListComponent } from './student-list/student-list.component';
import {StudentGeneratorService} from './student-generator.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentItemComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
