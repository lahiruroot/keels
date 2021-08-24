import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-adminreg',
  templateUrl: './adminreg.component.html',
  styleUrls: ['./adminreg.component.css']
})
export class AdminregComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  adminform = this.fb.group({
    adminFame: ['', Validators.required],
    adminLname: ['', Validators.required],
    adminEmail: ['', Validators.required],
    pNmuber: ['', Validators.required],
    adminPass:['',Validators.required],
    adminConpass:['',Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private fireAuth: AngularFireAuth, 
    private fireStore: AngularFirestore,
    private snack: MatSnackBar,
    private storage: AngularFireStorage
  ) { }

  ngOnInit(): void {
  }

  singUp(){
    this.fireAuth.createUserWithEmailAndPassword(this.adminform.value.adminEmail, this.adminform.value.adminPass,).then(author => {
      alert("signUp success");
      this.fireStore.collection('admins').doc(author.user.uid).set({
        uid: author.user.uid,
        adminFame: this.adminform.value.adminFame,
        adminLname: this.adminform.value.adminLname,
        adminPass: this.adminform.value.adminPass,
        adminEmail: this.adminform.value.adminEmail,
        pNmuber: this.adminform.value.pNmuber,
      });
      // this.route.navigate(['/user'])
    }).catch(err=>{
      console.log(err);
    })
  }
  hide = true;
}
