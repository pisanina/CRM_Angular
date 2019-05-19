import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { ClientsComponent } from "./clients/clients.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { ClientsListComponent } from "./clients-list/clients-list.component";
import { ClientEditComponent } from "./client-edit/client-edit.component";
import { SellerComponent } from "./seller/seller.component";
import { ActionClientComponent } from './action-client/action-client.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    ClientsComponent,
    HomeComponent,
    ClientsListComponent,
    ClientEditComponent,
    SellerComponent,
    ActionClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "Home", component: HomeComponent },
      { path: "Clients", component: ClientsComponent },
      { path: "Client/:id", component: ClientEditComponent },
      { path: "Seller", component: SellerComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
