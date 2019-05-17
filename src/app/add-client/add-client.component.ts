import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { AddClientService } from "../add-client.service";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  newclient: Client = new Client();
  private _addClientService: AddClientService;
  onSubmit() {
    debugger;
    this._addClientService.addClient(this.newclient).subscribe(client => {
      debugger;
    });
  }
  constructor(addClientService: AddClientService) {
    this._addClientService = addClientService;
  }

  ngOnInit() {}
}
