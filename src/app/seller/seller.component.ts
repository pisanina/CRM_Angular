import { Component, OnInit } from "@angular/core";
import { Seller } from "../seller";
import { SellerService } from "../seller.service";

@Component({
  selector: "app-seller",
  templateUrl: "./seller.component.html",
  styleUrls: ["./seller.component.css"]
})
export class SellerComponent implements OnInit {
  newseller: Seller = new Seller();
  private _sellerService: SellerService;
  private errorMessage;
  sellers: Seller[];

  onSubmit() {
    debugger;
    this._sellerService.addSeller(this.newseller).subscribe(seller => {
      debugger;
    });
  }

  constructor(sellerService: SellerService) {
    this._sellerService = sellerService;
  }

  ngOnInit(): void {
    this._sellerService.getSellersList().subscribe(
      sellers => {
        debugger;
        this.sellers = sellers;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
