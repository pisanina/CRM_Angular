import { Component, OnInit } from "@angular/core";
import { Action } from "../action";
import { ActionService } from "../action.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-action-client",
  templateUrl: "./action-client.component.html",
  styleUrls: ["./action-client.component.css"]
})
export class ActionClientComponent implements OnInit {
  newaction: Action = new Action();
  private _actionService: ActionService;
  private errorMessage;
  actions: Action[];
  private id: number;

  constructor(actionService: ActionService, private route: ActivatedRoute) {
    this._actionService = actionService;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      debugger;
      this.id = +params["id"];
    });
    this._actionService.getActionforClient(this.id).subscribe(
      actions => {
        debugger;
        this.actions = actions;
      },
      error => (this.errorMessage = <any>error)
    );
  }
}
