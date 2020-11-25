import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeelsComponent } from './home/keels/keels.component';
import { UserComponent } from './profile/user/user.component';

const routes: Routes = [

  {path:'',component:KeelsComponent},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
