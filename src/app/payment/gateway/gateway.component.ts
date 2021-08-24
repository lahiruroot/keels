import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  paymentForm = this.fb.group({
    crdname: ['', Validators.required],
    crdnum:['', Validators.required],
    expmonth:['', Validators.required],
    cvvnum:['', Validators.required],
    expyear:['', Validators.required],
    fname:['', Validators.required],
    email:['', Validators.required],
    city:['', Validators.required],
    adress:['', Validators.required],
    stat:['', Validators.required],
    pstcode:['', Validators.required],
  })
  constructor(
    public route : Router,
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private fireAuth: AngularFireAuth, 
    private fireStore: AngularFirestore,
    private snack: MatSnackBar,
    private agfire: AngularFirestore,
    private storage: AngularFireStorage,
    ) { }
 

  ngOnInit(): void {
  }
  async pay(){
    this.agfire.collection(`payments`).add({
      crdname: this.paymentForm.value.crdname,
      crdnum:  this.paymentForm.value.crdnum,
      expmonth: this.paymentForm.value.expmonth,
      cvvnum: this.paymentForm.value.cvvnum,
      expyear:this.paymentForm.value.expyear,
      fname:this.paymentForm.value.fname,
      email:this.paymentForm.value.email,
      city:this.paymentForm.value.city,
      adress:this.paymentForm.value.adress,
      stat:this.paymentForm.value.stat,
      pstcode:this.paymentForm.value.pstcode,
               
    })

  }
  cart(){
    this.route.navigate(['/doacart'])
  }
}
