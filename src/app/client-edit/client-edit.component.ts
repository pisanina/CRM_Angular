import { Component, OnInit } from "@angular/core";
import { Client } from "../client";
import { EditClientService } from "../edit-client.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.css"]
})
export class ClientEditComponent implements OnInit {
  client: Client = new Client();
  private _editClientService: EditClientService;
  private id: number;
  onSubmit() {
    debugger;
    this._editClientService.editClient(this.client).subscribe(client => {
      debugger;
    });
  }
  deleteClient() {
    debugger;
    this._editClientService.deleteClient(this.client.ID).subscribe(client => {
      debugger;
    });
  }

  constructor(
    editClientService: EditClientService,
    private route: ActivatedRoute
  ) {
    this._editClientService = editClientService;
  }

  ngOnInit() {
    debugger;

    this.route.params.subscribe(params => {
      debugger;
      this.id = +params["id"];
    });
    this._editClientService.getClient(this.id).subscribe(c => {
      debugger;
      this.client = c;
    });
  }
}
