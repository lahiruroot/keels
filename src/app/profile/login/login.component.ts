import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    pwd: new FormControl('', Validators.required),
  });

  constructor(
    public route: Router,
    private fireAuth: AngularFireAuth,
    private snack: MatSnackBar,
    private cookie: CookieService,
    private afs: AngularFirestore
  ) { }




  ngOnInit(): void {
  }
  reg() {
    this.route.navigate(['/reg'])
  }
  seller() {
    this.route.navigate(['/sellerdash'])
  }

  singIn() {
    if (this.loginForm.value.email == 'keels' || this.loginForm.value.email == 'doa') {

      this.afs.collection("admins").doc(this.loginForm.value.email).get().subscribe(da => {
        // console.log(da.data());
        if (this.loginForm.value.email == 'keels') {
          if (da.data()["pwd"] == this.loginForm.value.pwd) {
            this.route.navigate(['/keelsadmin']);
          } else {
            this.snack.open('Login', "ok", {
              duration: 2000,
            });
          }
        }

        if (this.loginForm.value.email == 'doa') {
          if (da.data()["pwd"] == this.loginForm.value.pwd) {
            this.route.navigate(['/doahome']);
          } else {
            this.snack.open('invalid password', "ok", {
              duration: 2000,
            });
          }
        }
      })
    } else {

      this.afs.collection("login").doc(this.loginForm.value.email).get().subscribe(da => {
        // console.log(da.data());

        if (da.data() != null) {
          this.fireAuth.signInWithEmailAndPassword(da.data()["user"], da.data()["pwd"]).then(user => {
            this.cookie.set("uId", user.user.uid);
            this.route.navigate(['/sellerdash']);
          }).catch(er => {
            this.snack.open('Login Sucessfull', "ok", {
              duration: 2000,
            });
          })
        }        

      })

    }


  }
}
