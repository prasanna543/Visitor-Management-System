import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardComponent } from './components/guard/guard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisitorService } from './services/visitor.service';
import { GuardService } from './services/guard.service';
import { HttpClientModule } from '@angular/common/http';
import { FacultyService } from './services/faculty.service';
import { VisitorGridComponent } from './components/visitor-grid/visitor-grid.component';
import { FacultyGridComponent } from './components/faculty-grid/faculty-grid.component';
import { GuardGridComponent } from './components/guard-grid/guard-grid.component';
import { LoginComponent } from './components/login/login.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    GuardComponent,
    NavbarComponent,
    FooterComponent,
    VisitorComponent,
    FacultyComponent,
    VisitorGridComponent,
    FacultyGridComponent,
    GuardGridComponent,
    LoginComponent,
    UserCreationComponent
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
