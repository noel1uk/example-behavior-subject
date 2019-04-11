import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BehaviorSubjectComponent } from './behavior-subject/behavior-subject.component';
import { DataService } from './data-service/data.service';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorSubjectComponent,
    ParentComponent,
    SiblingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
