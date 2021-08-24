import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-pricingdata',
  templateUrl: './pricingdata.component.html',
  styleUrls: ['./pricingdata.component.css']
})
export class PricingdataComponent implements OnInit {
  
  pricingform = this.fb.group({
    prName : ['', Validators.required],
    PrQuant : ['', Validators.required],
    esPrice : ['', Validators.required],
    condition : ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private fireAuth: AngularFireAuth, 
    // private fireStore: AngularFirestore,
    private agfire: AngularFirestore,
    private snack: MatSnackBar,
    private storage: AngularFireStorage
  ) { }

  ngOnInit():void{
    // this.pricess();
  }
    async pricess() {  
    this.agfire.collection(`prcing`).add({
      prName: this.pricingform.value.prName,
      PrQuant: this.pricingform.value.PrQuant,
      esPrice: this.pricingform.value.esPrice,
      condition: this.pricingform.value.condition,
      })
   
    }
}
