import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AdminregComponent } from 'src/app/admins/adminreg/adminreg.component';
import { MapComponent } from 'src/app/map/map.component';

@Component({
  selector: 'app-doaprofile',
  templateUrl: './doaprofile.component.html',
  styleUrls: ['./doaprofile.component.css']
})
export class DoaprofileComponent implements OnInit {
 constructor(public dialog: MatDialog,){}
 openDialog() {
   const dialogRef = this.dialog.open(MapComponent);
   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
 }
 
  ngOnInit(): void {

  }

}
