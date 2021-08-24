import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pdata',
  templateUrl: './pdata.component.html',
  styleUrls: ['./pdata.component.css']
})

export class PdataComponent implements OnInit {
  fullName='';
  firstName='';
  pass='';
  mail='';
  id='';
  phone='';
  address='';
  hometown='';
  date='';


  constructor(
    public route:Router,
    private afs: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private cookie: CookieService,
    private  auth: AngularFireAuth,
    private cooky: CookieService,
    ) {

     }
  
     
 singOut(){
   this.auth.signOut();
   this.cooky.deleteAll();
   this.route.navigate(['/user'])
 } 
  

  ngOnInit(): void {

    this.getUserData();
    this.afs.collection("users").doc(this.cookie.get("uId")).get().subscribe(user=>{
      this.fullName = user.data()["firstName"] + " " +  user.data()["lastName"];
      this.firstName = user.data()["firstName"];
      this.pass = user.data()["pass"];
      this.id = user.data()["id"];
      this.mail = user.data()["mail"];
      this.phone = user.data()["phone"];
      this.address = user.data()["address"];
      this.hometown = user.data()["hometown"];
      this.date = user.data()["date"];
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

  login(){
    this.route.navigate(['/user'])
  } 
}
