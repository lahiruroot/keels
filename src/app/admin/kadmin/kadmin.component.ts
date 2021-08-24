import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AdminregComponent } from 'src/app/admins/adminreg/adminreg.component';
import { MapComponent } from 'src/app/map/map.component';

@Component({
  selector: 'app-kadmin',
  templateUrl: './kadmin.component.html',
  styleUrls: ['./kadmin.component.css']
})
export class KadminComponent implements OnInit {
  user='Keelslk';
  id='Online';
  

  constructor(
    public route:Router,
    private afs: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private cookie: CookieService,
    private  auth: AngularFireAuth,
    private cooky: CookieService,
    public dialog: MatDialog,
  ) { }
  
  openDialog() {
    const dialogRef = this.dialog.open(MapComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  singOut(){
    this.auth.signOut();
    this.cooky.deleteAll();
    this.route.navigate(['/user'])
  } 

  ngOnInit(): void {
    this.getUserData();
    this.afs.collection("admins").doc(this.cookie.get("Keels")).get().subscribe(user=>{
      this.user = user.data()["user"];
      this.id = user.data()["id"];
    })
  }
  

  async getUserData() {
    await this.ngAuth.currentUser.then(user => {
      if (user != null) {
        this.afs.collection('admins').doc(user.uid).get().subscribe(() => {
          // console.log(doc.data.);
        });
      }
      

    });
    

  }

}
