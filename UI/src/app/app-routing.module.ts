import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { GuardComponent } from './components/guard/guard.component';
import { VisitorComponent } from './components/visitor/visitor.component';

const routes: Routes = [{
  path:'guard',
  component:GuardComponent

},
  {
    path:'visitor',
    component:VisitorComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'faculty',
    component:FacultyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
