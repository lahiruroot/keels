import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoacartComponent } from './doa/doacart/doacart.component';
import { DoahomeComponent } from './doa/doahome/doahome.component';
import { KeelsComponent } from './home/keels/keels.component';
import { MapComponent } from './map/map.component';
import { GatewayComponent } from './payment/gateway/gateway.component';
import { RegisterComponent } from './profile/register/register.component';
import { UserComponent } from './profile/user/user.component';
import { SellerdashComponent } from './seller/sellerdash/sellerdash.component';
import { AdminregComponent} from './admins/adminreg/adminreg.component';
import { KeelsadminComponent } from './admin/keelsadmin/keelsadmin.component';
import { PdataComponent } from './seller/pdata/pdata.component';
import { MessageComponent } from './admin/message/message.component';
import { FarmerchatComponent } from './chats/farmerchat/farmerchat.component';

const routes: Routes = [

  {path:'',component:KeelsComponent},
  {path:'user',component:UserComponent},
  {path:'reg',component:RegisterComponent},
  {path:'sellerdash',component:SellerdashComponent},
  {path:'map',component:MapComponent},
  {path:'doahome',component:DoahomeComponent},
  {path:'gateway',component:GatewayComponent},
  {path:'doacart',component:DoacartComponent},
  {path:'admin',component:AdminregComponent},
  {path:'keelsadmin',component:KeelsadminComponent},
  {path:'pdata',component:PdataComponent},
  {path:'message',component:MessageComponent},
  {path:'farmerchat',component:FarmerchatComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
