import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore'
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserComponent } from '../user/user.component';
import { RegsnackComponent } from 'src/app/snackbars/regsnack/regsnack.component';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {
  lat;
  lng;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    pass: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    conpass: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    hometown: new FormControl('', Validators.required),



  });

  constructor(
    private snack: MatSnackBar, public route: Router, private fireAuth: AngularFireAuth, private fireStore: AngularFirestore, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }



  signUp() {

    navigator.geolocation.getCurrentPosition(latlon => {
      this.lat = latlon.coords.latitude;
      this.lng = latlon.coords.longitude;
    }, function () {
      alert('User not allowed')
    }, { timeout: 10000 });

    this.fireAuth.createUserWithEmailAndPassword(this.profileForm.value.mail, this.profileForm.value.pass,).then(author => {
      this.snack.open("sign up success", "ok", {
        duration: 2000,
      });

      this.fireStore.collection('users').doc(author.user.uid).set({
        uid: author.user.uid,
        firstName: this.profileForm.value.firstName,
        lastName: this.profileForm.value.lastName,
        pass: this.profileForm.value.pass,
        mail: this.profileForm.value.mail,
        conpass: this.profileForm.value.conpass,
        id: this.profileForm.value.id,
        phone: this.profileForm.value.phone,
        date: this.profileForm.value.date,
        address: this.profileForm.value.address,
        hometown: this.profileForm.value.hometown,
        lat: this.lat,
        lng: this.lng,
      });

      this.fireStore.collection('login').doc(this.profileForm.value.id).set({
        pwd: this.profileForm.value.pass,
        user: this.profileForm.value.mail,
      });
      this.route.navigate(['/user'])
    })
  }

  seller() {
    this.route.navigate(['/sellerdash'])
  }

  durationInSeconds = 5;


  openSnackBar() {
    this._snackBar.openFromComponent(RegsnackComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

