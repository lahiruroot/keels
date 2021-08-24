import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


export interface PeriodicElement {
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent implements OnInit {
  messageform = this.fb.group({
    admin : ['', Validators.required],
    topic : ['', Validators.required],
    date : ['', Validators.required],
    msg : ['', Validators.required],
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

  ngOnInit(): void {
  }
  async message() {  
    this.agfire.collection(`message`).add({
      admin: this.messageform.value.admin,
      topic: this.messageform.value.topic,
      date: this.messageform.value.date,
      msg: this.messageform.value.msg,
      })
    }

}
