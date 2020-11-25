import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './home/main/main.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { GaleryComponent } from './home/galery/galery.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { LoginComponent } from './profile/login/login.component';
import { RegisterComponent } from './profile/register/register.component';
import { PhedderComponent } from './profile/phedder/phedder.component';
import { PfooterComponent } from './profile/pfooter/pfooter.component';
import { PnavbarComponent } from './profile/pnavbar/pnavbar.component';
import { ProtComponent } from './doa/prot/prot.component';
import { DoalogComponent } from './doa/doalog/doalog.component';
import { KeelsComponent } from './home/keels/keels.component';
import { UserComponent } from './profile/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    GaleryComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PhedderComponent,
    PfooterComponent,
    PnavbarComponent,
    ProtComponent,
    DoalogComponent,
    KeelsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
