import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from "@angular/fire/firestore";
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-doaproducts',
  templateUrl: './doaproducts.component.html',
  styleUrls: ['./doaproducts.component.css']
})
export class DoaproductsComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  form = this.fb.group({
    prodName: ['', Validators.required],
    subDis: ['', Validators.required],
    mainDis: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private afs: AngularFirestore, 
    private snack: MatSnackBar,
    private storage: AngularFireStorage
    ) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.form.valid) {
      if (this.downloadURL) {
        this.downloadURL.subscribe(url=>{
          this.afs.collection("doa_stor").add({
            prodName: this.form.value.prodName,
            subDis: this.form.value.subDis,
            mainDis: this.form.value.mainDis,
            price: this.form.value.price,
            img: url
          }).then(() => {
            this.snack.open("Added success", "ok");
          })
        })
      }
    }
  }

  uploadFile(event) {
  
    let name = new Date();
    const file = event.target.files[0];
    const filePath = name.getTime().toString();
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = fileRef.getDownloadURL())
    )
      .subscribe()
  }
}
