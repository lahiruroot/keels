import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  isLinear = false;
  shop = new FormGroup({
    nic: new FormControl('', Validators.required),
    catagory: new FormControl('', Validators.required),
    quntity: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  });
  secondFormGroup = new FormGroup({
    address: new FormControl('', Validators.required),
  });

  shopForm = new FormGroup({
    // uid: new this.firstFormGroup('', Validators.required),

  });


  constructor(
    private agfire: AngularFirestore,
    private ngAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    private snack: MatSnackBar,

  ) { }



  ngOnInit() {
    this.addProduct();
  }

  /*async addProduct() {

    await this.ngAuth.currentUser.then(user => {
      if (user != null) {
        if (this.downloadURL) {


          this.downloadURL.subscribe(url => {
            this.agfire.collection(`users/${user.uid}/product`).add({
              nic: this.shop.value.nic,
              catagory: this.shop.value.catagory,
              quntity: this.shop.value.quntity,
              price: this.shop.value.price,
              img:url
            }).then(() => {
              this.snack.open("Added success", "ok");
            })


            this.agfire.collection(`user_products`).add({
              uid: user.uid,
              nic: this.shop.value.nic,
              catagory: this.shop.value.catagory,
              quntity: this.shop.value.quntity,
              price: this.shop.value.price,
              img:url,
              confirm:false
            });

            console.log("===========================")
          })
        }
     }
    })
  }*/


  async addProduct() {
    await this.ngAuth.currentUser.then(user => {
        if(user != null) {
          this.agfire.collection(`user_products`).add({
            uid: user.uid,
            nic: this.shop.value.nic,
            catagory: this.shop.value.catagory,
            quntity: this.shop.value.quntity,
            price: this.shop.value.price,
            img:"",
            confirm:false
          });
        } //else {
        //   // navigatye to login
          
        // }
    });

    
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
