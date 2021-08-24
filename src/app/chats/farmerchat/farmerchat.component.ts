import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-farmerchat',
  templateUrl: './farmerchat.component.html',
  styleUrls: ['./farmerchat.component.css']
})
export class FarmerchatComponent implements OnInit {

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  isLinear = false;
  shop = new FormGroup({
    nic: new FormControl('', Validators.required),
    catagory: new FormControl('', Validators.required),
    quntity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });

  constructor(
    private agfire: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

}
