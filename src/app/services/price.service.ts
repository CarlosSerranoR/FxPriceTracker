import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { interval, Observable, timer } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PriceService {
  constructor(private http: HttpClient) {}
  cont = 6;

  allPrices = [
    {
      id: 1,
      instrument: "EUR/USD",
      bid: 1.1,
      ask: 1.2,
      timestamp: "01-06-2020 12:01:01:001",
    },
    {
      id: 2,
      instrument: "EUR/JPY",
      bid: 119.6,
      ask: 119.9,
      timestamp: "01-06-2020 12:01:02:001",
    },
    {
      id: 3,
      instrument: "GBP/USD",
      bid: 1.25,
      ask: 1.256,
      timestamp: "01-06-2020 12:01:01:001",
    },
    {
      id: 4,
      instrument: "GBP/USD",
      bid: 1.9898,
      ask: 2.334,
      timestamp: "01-06-2020 12:01:01:001",
    },
    {
      id: 5,
      instrument: "EUR/USD",
      bid: 1.9898,
      ask: 2.334,
      timestamp: "01-06-2020 12:01:01:001",
    },
  ];

  getAllPrices() {
    return this.allPrices;
  }

  getLatestPrice(instrument) {
    return {
      id: this.cont++,
      instrument: instrument,
      bid: (Math.random() * (3 - 0) + 0).toFixed(4),
      ask: (Math.random() * (3 - 0) + 0).toFixed(4),
      timestamp: this.formatDate(new Date()),
    };
  }

  /**
   * // TODO: Replace for dummy getLatestPrice method
   */
  getLatestPriceHttp(instrument) {
    return this.http
      .get("getAllPricesURL?instrument" + instrument, {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        observe: "response",
      })
      .subscribe();
  }
  /**
   * // TODO: Replace for dummy getAllPrices method
   */
  getAllPricesHttp() {
    return this.http
      .get("getAllPricesURL", {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        observe: "response",
      })
      .subscribe();
  }

  formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      hour = "" + d.getHours(),
      min = "" + d.getMinutes(),
      seg = "" + d.getSeconds(),
      mil = "" + d.getMilliseconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (hour.length < 2) hour = "0" + hour;
    if (min.length < 2) min = "0" + min;

    return [day, month, year].join("-") + " " + [hour, min, seg, mil].join(":");
  }
}
