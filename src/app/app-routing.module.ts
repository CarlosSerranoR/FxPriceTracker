import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PricesComponent } from "./pages/prices/prices.component";

const routes: Routes = [
  {
    path: "",
    children: [{ path: "prices", component: PricesComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
