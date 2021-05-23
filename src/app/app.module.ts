import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PricesComponent } from "./pages/prices/prices.component";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule,
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";

const angularModules = [
  MatSidenavModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatButtonToggleModule,
  MatTooltipModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSortModule,
];
@NgModule({
  declarations: [AppComponent, PricesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...angularModules,
  ],
  providers: [],
  exports: [...angularModules],
  bootstrap: [AppComponent],
})
export class AppModule {}
