import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardComponent } from './components/guard/guard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { AdminComponent } from './components/admin/admin.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisitorService } from './services/visitor.service';
import { GuardService } from './services/guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FacultyService } from './services/faculty.service';

@NgModule({
  declarations: [
    AppComponent,
    GuardComponent,
    NavbarComponent,
    FooterComponent,
    VisitorComponent,
    AdminComponent,
    FacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [VisitorService,GuardService,FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
