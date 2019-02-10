import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { MyItemsService } from "./myItems.service";
import { Storage } from "@ionic/storage";

interface Article {
  userId: number;
  id: number;
  title: String;
  body: String;
  persiste: boolean;
}

@Component({
  selector: "myItems",
  templateUrl: "./myItems.page.html",
  styleUrls: ["./myItems.page.scss"],
  host: { class: "MyItems" },
  providers: []
})
export class MyItemsPage implements OnInit {
  public articles: Array<any>;

  public toShow: boolean;

  private user: String;

  constructor(
    private modalController: ModalController,
    private storage: Storage
  ) {
    this.toShow = true;
  }

  ngOnInit() {
    this.storage.get("articles").then(val => {
      this.articles = val;
    });
    this.storage.get("user").then(val => {
      this.user = val;
    });
  }

  async goToItemDetail(article: Article) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        custom_id: article
      }
    });
    modal.present();
  }

  save(id: number) {
    for (let article of this.articles) {
      if (article.id == id) {
        article.persiste = !article.persiste;
        this.articles.push(article);
      }
    }
  }
  delete(id: number) {
    let i = 0;
    for (let article of this.articles) {
      if (article.id == id) {
        let supp = this.articles.splice(i, 1);
        this.storage.set("articles", this.articles);
      }
      i++;
    }
    for (let article of this.articles) {
      if (article.id == id) {
        article.persiste = !article.persiste;
      }
    }
  }
  deleteAll() {
    this.articles = [];
    this.storage.set("articles", this.articles);
  }
}
