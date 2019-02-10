import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
  host: { class: "main" },
  providers: []
})
export class MainPage implements OnInit {
  public identifiant: string;

  constructor(public router: Router) {}

  ngOnInit() {
    this.identifiant = localStorage.getItem("identifiant");
  }
}
