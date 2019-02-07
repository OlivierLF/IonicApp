import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;

  public toShow: boolean;
  passeId = null;

  constructor(public page1Service: Page1Service, private modalController:ModalController, private activatedRoute: ActivatedRoute) {
    this.toShow = true;
  }

  ngOnInit() {
    //console.log("INIT PAGE1");

    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.articles = data;

        this.page1Service.persistArticles(data).then(
          ok => {
            //console.log("Les articles ont bien été stockés");
          }
        );
      }
    );
  }

  async goToItemDetail(id: String) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        custom_id: id
      }
    });
    modal.present();
    //console.log("hehehe");
}
}

