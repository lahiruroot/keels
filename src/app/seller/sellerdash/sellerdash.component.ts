import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellerdash',
  templateUrl: './sellerdash.component.html',
  styleUrls: ['./sellerdash.component.css']
})
export class SellerdashComponent implements OnInit {
  fullName='';
  id=''; 
  constructor( 
    public route:Router,
    private afs: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private cookie: CookieService,
    private  auth: AngularFireAuth,
    private cooky: CookieService,
  ) { }


  singOut(){
    this.auth.signOut();
    this.cooky.deleteAll();
    this.route.navigate(['/user'])
  } 
   


  ngOnInit(): void {
     
    this.getUserData();
    this.afs.collection("users").doc(this.cookie.get("uId")).get().subscribe(user=>{
      this.fullName = user.data()["firstName"] + " " +  user.data()["lastName"];
      this.id = user.data()["id"];
    })
  }
  
  async getUserData() {
    await this.ngAuth.currentUser.then(user => {
      if (user != null) {
        this.afs.collection('users').doc(user.uid).get().subscribe(() => {
          // console.log(doc.data.);
        });
      }
    });
  }

}
