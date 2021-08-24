import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from "@angular/fire/firestore";
import {MatDialog} from '@angular/material/dialog';
import { EmailviewComponent } from '../emailview/emailview.component';

export interface PeriodicElement {
  position:boolean;
  admin:string;
  date:string;
  topic:string;
}

@Component({
  selector: 'app-viewmgs',
  templateUrl: './viewmgs.component.html',
  styleUrls: ['./viewmgs.component.css']
})
export class ViewmgsComponent implements OnInit {

  displayedColumns: string[] = ['admin', 'date', 'topic','position',];
  message;
  modal;
  data: PeriodicElement;
  ele_data: PeriodicElement[];


  constructor(
    public dialog: MatDialog,
    private afs: AngularFirestore) { }

    openDialog() {
      const dialogRef = this.dialog.open(EmailviewComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

  ngOnInit(): void {

    this.afs.collection("message").get().subscribe((data) => {
      console.log("asd")
      let message = data.docs.map((data, index) => ({position: data.data()["position"], admin: data.data()["admin"], date: data.data()["date"], topic: data.data()["topic"]}));
      this.message = new MatTableDataSource(message);
    }
    );
  }

}
