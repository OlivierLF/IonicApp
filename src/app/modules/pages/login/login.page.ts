import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(public router: Router) {}

  private user: String;

  ngOnInit() {
    this.user = localStorage.getItem("identifiant");
  }

  validateLogin(name: string) {
    localStorage.setItem("identifiant", name);
    this.router.navigateByUrl("liste-items");
  }
}
