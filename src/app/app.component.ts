import {Component, OnInit} from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {
    if('identifiant' in localStorage){
      this.router.navigateByUrl('/liste-items');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }
}
