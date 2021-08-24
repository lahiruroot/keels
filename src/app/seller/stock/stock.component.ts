import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(
    private afs: AngularFirestore,
    private cookie: CookieService
    ) { }
  model=[];
  ngOnInit(): void {
    this.afs.collection(`users/${this.cookie.get("uId")}/msg`).get().subscribe(data=>{
      data.docs.forEach(prod=>{
      this.model.push(prod.data());
      })
      })
  }

}
