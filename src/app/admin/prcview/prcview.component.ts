import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFirestore } from "@angular/fire/firestore";

export interface PeriodicElement {
  position: boolean;
  prName: string;
  PrQuant: string;
  esPrice: string;
  condition: string;
}

@Component({
  selector: 'app-prcview',
  templateUrl: './prcview.component.html',
  styleUrls: ['./prcview.component.css']
})
export class PrcviewComponent implements OnInit {

  displayedColumns: string[] = ['position', 'prName', 'PrQuant', 'esPrice', 'condition',];
  pricing;
  modal;
  data: PeriodicElement;
  ele_data: PeriodicElement[];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.pricing.filter = filterValue.trim().toLowerCase();
  }

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.afs.collection("prcing").get().subscribe((data) => {
      console.log("asd")
      let prcing = data.docs.map((data, index) => ({ position: data.data()["position"], prName: data.data()["prName"], PrQuant: data.data()["PrQuant"], esPrice: data.data()["esPrice"], condition: data.data()["condition"] }));
      this.pricing = new MatTableDataSource(prcing);
    }
    );
  }

}
