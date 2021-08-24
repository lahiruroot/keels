import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  nic: string;
  address: string;
  position: boolean;
  Phone: string;
  email: string;
}
@Component({
  selector: 'app-detailstable',
  templateUrl: './detailstable.component.html',
  styleUrls: ['./detailstable.component.css']
})
export class DetailstableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'nic', 'address', 'phone', 'email','position'];
  dataSource;
  modal;
  data: PeriodicElement;
  ele_data: PeriodicElement[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(
    private afs: AngularFirestore,
    public route: Router,
    ) { }
   
  ngOnInit(): void {
    this.afs.collection("users").get().subscribe((data) => {
      console.log("asd")
      let users = data.docs.map((data, index) => ({ name: data.data()["firstName"], nic: data.data()["id"], address: data.data()["address"], Phone: data.data()["phone"], email: data.data()["mail"],position: data.data()["position"]}));
      this.dataSource = new MatTableDataSource(users);  
    }
    );
  }
 map(){
   this.route.navigate(['/map'])
 }
}
