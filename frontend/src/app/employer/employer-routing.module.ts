import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddjobComponent } from './addjob/addjob.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewjobComponent } from './viewjob/viewjob.component';


const routes: Routes = [{path: 'empDash', component: DashboardComponent},
  {path: 'empDash', component: DashboardComponent,children: [{ path: 'job', component: AddjobComponent },
  {path: 'viewjob', component: ViewjobComponent}]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
