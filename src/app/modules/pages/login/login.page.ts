import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(public router: Router, private storage: Storage) {}

  private user: String;

  ngOnInit() {
    this.storage.get("user").then(val => {
      this.user = val;
    });
  }

  validateLogin(name: string) {
    this.storage.set("user", name);
    this.user = name;
    this.router.navigateByUrl("liste-items");
  }
}
