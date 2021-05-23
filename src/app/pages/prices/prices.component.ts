import { PriceService } from "./../../services/price.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";

import { interval } from "rxjs";

@Component({
  selector: "app-prices",
  templateUrl: "./prices.component.html",
  styleUrls: ["./prices.component.scss"],
})
export class PricesComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  displayedColumns: string[] = ["id", "instrument", "bid", "ask", "timestamp"];
  instruments = ["EUR/USD", "EUR/JPY", "GBP/USD"];

  cont = 0;
  dataSource;
  constructor(private priceService: PriceService) {}

  ngOnInit() {
    const data = this.priceService.getAllPrices();
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    interval(5000).subscribe(() => {
      const index = new Date().getTime() % 3;
      this.dataSource.data = this.dataSource.data.concat(
        this.priceService.getLatestPrice(this.instruments[index])
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
}
