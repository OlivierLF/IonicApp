import {Component, OnInit} from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: 'menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  host: {'class': 'menu'},
  providers: []
})

export class MenuPage implements OnInit {
private pages: any; 
private selectedPath: String;
    

  ngOnInit() {
    this.pages =[
      {
        title: 'Accueil',
        url: '/main'
      },{
        title: 'Liste des items',
        url: '/liste-items'
      },{
        title: 'Mes items',
        url: '/mes-items'
      }
        
    ];
    this.selectedPath='';
  }
  constructor(public router: Router) {
    this.router.events.subscribe((event: RouterEvent)=> {
      this.selectedPath = event.url;
    });
}
}

