import { Component, OnInit } from "@angular/core";

import { Client } from "../client";
import { ClientsListService } from "../clients-list.service";

@Component({
  selector: "app-clients-list",
  templateUrl: "./clients-list.component.html",
  styleUrls: ["./clients-list.component.css"]
})
export class ClientsListComponent implements OnInit {
  private _clientListService: ClientsListService;
  private errorMessage;

  clients: Client[];

  constructor(clientListService: ClientsListService) {
    this._clientListService = clientListService;
  }

  ngOnInit(): void {
    this._clientListService.getClientsList().subscribe(
      clients => {
        debugger;
        this.clients = clients;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
