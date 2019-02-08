import {Component, OnInit} from "@angular/core";
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
  selector: 'myItems',
  templateUrl: './myItems.page.html',
  styleUrls: ['./myItems.page.scss'],
  host: {'class': 'MyItems'},
  providers: []
})
export class MyItemsPage implements OnInit {

  public articles: Array<any>;

  public toShow: boolean;

  constructor(private modalController:ModalController, private storage: Storage) {
    this.toShow = true;
  }

  ngOnInit() {
    // this.storage.get('articles').then((val)) => {
    //   this.articles = val;
    // }
    this.storage.get("articles").then((val)=> {
      this.articles=val;
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
  save(id: number){
    for (let article of this.articles){
      if(article.id == id){
        article.persiste = !article.persiste;
      }
    }
  }
}
