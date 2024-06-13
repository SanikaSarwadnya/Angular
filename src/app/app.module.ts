import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponentComponent } from './binding-component/binding-component.component';
import { StudentComponent } from './student/student.component';
import { CourseComponent } from './course/course.component';
import { MathComponent } from './math/math.component';
import { HelpComponent } from './help/help.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ModelCompComponent } from './model-comp/model-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponentComponent,
    StudentComponent,
    CourseComponent,
    MathComponent,
    HelpComponent,
    EventBindingComponent,
    ModelCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
