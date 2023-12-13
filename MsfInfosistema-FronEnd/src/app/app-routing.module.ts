import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsfdptosCrudComponent } from './msfdptos-crud/msfdptos-crud.component';

const routes: Routes = [
  { path: 'msfdptos', component: MsfdptosCrudComponent },
  { path: '', redirectTo: '/msfdptos', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

