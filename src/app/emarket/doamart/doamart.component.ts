import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-doamart',
  templateUrl: './doamart.component.html',
  styleUrls: ['./doamart.component.css']
})
export class DoamartComponent implements OnInit {

  constructor(private afs: AngularFirestore,
              public route : Router) { }
model=[];
  ngOnInit(): void {

    this.afs.collection("doa_stor").get().subscribe(data=>{
      data.docs.forEach(prod=>{
        this.model.push(prod.data());
      })
    })
    console.log(this.model);
  }

  gateway(){
    this.route.navigate(['/gateway'])
  }

}
