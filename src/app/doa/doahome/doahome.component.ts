import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-doahome',
  templateUrl: './doahome.component.html',
  styleUrls: ['./doahome.component.css']
})

export class DoahomeComponent implements OnInit {
  user='DOA-Srilanka';
  id='Online';
  constructor(
    public route:Router,
    private ngAuth: AngularFireAuth,
    private  auth: AngularFireAuth,
    private cooky: CookieService,
    private afs: AngularFirestore,
    private cookie: CookieService
  ) { }

  singOut(){
    this.auth.signOut();
    this.cooky.deleteAll();
    this.route.navigate(['/user'])
  } 
   
  ngOnInit(): void {
    this.getUserData();
    this.afs.collection("admins").doc(this.cookie.get("doa")).get().subscribe(user=>{
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
