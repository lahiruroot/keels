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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SellerdashComponent } from './seller/sellerdash/sellerdash.component';
import { MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { PdataComponent } from './seller/pdata/pdata.component';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { ShopComponent } from './seller/shop/shop.component';
import { MatExpansionModule} from '@angular/material/expansion';
import { ProfComponent } from './seller/prof/prof.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { StockComponent } from './seller/stock/stock.component';
import {MatStepperModule} from '@angular/material/stepper';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth'; 
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { DoahomeComponent } from './doa/doahome/doahome.component';
import { MapcontrolComponent } from './doa/mapcontrol/mapcontrol.component';
import { DoaprofileComponent } from './doa/doaprofile/doaprofile.component';
import { DoacartComponent } from './doa/doacart/doacart.component';
import { DoadetailsComponent } from './doa/doadetails/doadetails.component';
import { DoaproductsComponent } from './doa/doaproducts/doaproducts.component';
import { DoaselproductsComponent } from './doa/doaselproducts/doaselproducts.component';
import { MatTableModule} from '@angular/material/table';
import { CdkTableModule} from '@angular/cdk/table';
import { DetailstableComponent } from './doa/detailstable/detailstable.component';
import { RegsnackComponent } from './snackbars/regsnack/regsnack.component';
import { GatewayComponent } from './payment/gateway/gateway.component';
import { ChartsModule } from 'ng2-charts';
import { AdminregComponent } from './admins/adminreg/adminreg.component';
import { OrderlistComponent } from './doa/orderlist/orderlist.component';
import { DoamartComponent } from './emarket/doamart/doamart.component';
import { KeelsmartComponent } from './emarket/keelsmart/keelsmart.component';
import { CookieService } from 'ngx-cookie-service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { KeelsadminComponent } from './admin/keelsadmin/keelsadmin.component';
import { PricingComponent } from './admin/pricing/pricing.component';
import { PricingdataComponent } from './admin/pricingdata/pricingdata.component';
import { PrcviewComponent } from './admin/prcview/prcview.component';
import { MessageComponent } from './admin/message/message.component';
import { ViewmgsComponent } from './admin/viewmgs/viewmgs.component';
import { EmailviewComponent } from './admin/emailview/emailview.component';
import { KadminComponent } from './admin/kadmin/kadmin.component';
import { ChartsComponent } from './admin/charts/charts.component';
import { PiechartsComponent } from './admin/piecharts/piecharts.component';
import { FarmerchatComponent } from './chats/farmerchat/farmerchat.component';

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
    SellerdashComponent,
    PdataComponent,
    ShopComponent,
    ProfComponent,
    StockComponent,
    MapComponent,
    DoahomeComponent,
    MapcontrolComponent,
    DoaprofileComponent,
    DoacartComponent,
    DoadetailsComponent,
    DoaproductsComponent,
    DoaselproductsComponent,
    DetailstableComponent,
    RegsnackComponent,
    GatewayComponent,
    AdminregComponent,
    OrderlistComponent,
    DoamartComponent,
    KeelsmartComponent,
    KeelsadminComponent,
    PricingComponent,
    PricingdataComponent,
    PrcviewComponent,
    MessageComponent,
    ViewmgsComponent,
    EmailviewComponent,
    KadminComponent,
    ChartsComponent,
    PiechartsComponent,
    FarmerchatComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCx_tiBdrWmZ1nxSRctIQlPmxP62gnLq_0'
    }),
    MatTableModule,
    CdkTableModule,
    ChartsModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
