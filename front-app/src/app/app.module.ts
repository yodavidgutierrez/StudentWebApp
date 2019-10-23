import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './ui/layout/footer/footer.component';
import { SidebarComponent } from './ui/layout/sidebar/sidebar.component';
import { NavbarComponent } from './ui/layout/navbar/navbar.component';
import { DashboardComponent } from './ui/pages/dashboard/dashboard.component';
import { ListStudentsComponent } from './ui/pages/list-students/list-students.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './ui/pages/student/student.component';
import { UpdateStudentComponent } from './ui/pages/update-student/update-student.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    ListStudentsComponent,
    StudentComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
