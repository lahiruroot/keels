import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: 'app-emailview',
  templateUrl: './emailview.component.html',
  styleUrls: ['./emailview.component.css']
})
export class EmailviewComponent implements OnInit {

  constructor(
    private afs: AngularFirestore,
  ) { }
  model=[];
  ngOnInit(): void {
    this.afs.collection("message").get().subscribe(data=>{
      data.docs.forEach(msg=>{
        this.model.push(msg.data());
      })
    })
    console.log(this.model);
  }

}
