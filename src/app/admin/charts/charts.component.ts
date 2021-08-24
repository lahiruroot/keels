import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public data = [];

  public barChartData: ChartDataSets[] = [
    { data: this.data, label: 'Production' }
  ];

  constructor(private db : AngularFirestore) { 
    
  }

  ngOnInit(): void {
    this.db.collection("user_products").get().subscribe((data) => {
      let sales = data.docs.map((d, index) => ({ category: d.data()["catagory"], qty: d.data()["quntity"], confirm : d.data()['confirm']}));

      let categories = {};
       for(var i=0;i<sales.length;i++) {
         let e = sales[i];
         if(e['confirm']) {
            if(isNaN(categories[e['category']])) {
              categories[e['category']] = e['qty'];
            } else {
              categories[e['category']] += e['qty'];
             }
         }
       }
       
       for (var key in categories) {
        if (categories.hasOwnProperty(key)) {           
            this.barChartLabels.push(key);
            this.data.push(categories[key]);
        }
      }

      
     

    });
  }

}
