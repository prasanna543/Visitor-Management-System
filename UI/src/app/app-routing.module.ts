import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyGridComponent } from './components/faculty-grid/faculty-grid.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { GuardGridComponent } from './components/guard-grid/guard-grid.component';
import { GuardComponent } from './components/guard/guard.component';
import { LoginComponent } from './components/login/login.component';
import { VisitorGridComponent } from './components/visitor-grid/visitor-grid.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { UserCreationComponent } from './components/user-creation/user-creation.component';

const routes: Routes = [{
  path: 'guard',
  component: GuardComponent

},
{
  path: 'visitor',
  component: VisitorComponent
},
{
  path: 'faculty',
  component: FacultyComponent
},
{
  path: 'visitor-grid',
  component: VisitorGridComponent
},
{
  path: 'faculty-grid',
  component: FacultyGridComponent
},
{
  path: 'guard-grid',
  component: GuardGridComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'user-creation',
  component: UserCreationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
