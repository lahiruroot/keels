import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(private afs: AngularFirestore,
    public route: Router) { }
  model = [];
  ngOnInit(): void {

    this.afs.collection("user_products").get().subscribe(data => {
      data.docs.forEach(prod => {
        var ob = { "prod": prod.data(), "docId": prod.id }
        this.model.push(ob);
      })
    })
    console.log(this.model);
  }

  gateway() {
    this.route.navigate(['/gateway'])
  }
  conform(docid, userid, confirm, name) {
    this.afs.collection("user_products").doc(`${docid}`).update({
      confirm: true
    });

    this.afs.collection(`users/${userid}/msg`).add({
      confirm: confirm,
      name: name
    })
  }
}
