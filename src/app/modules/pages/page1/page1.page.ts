import {Component, OnInit} from "@angular/core";
import {Page1Service} from "./page1.service";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { ActivatedRoute } from "@angular/router";

interface Article {
  userId: number;
  id: number;
  title: String;
  body: String;
  persiste: boolean;
}

@Component({
  selector: 'page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  host: {'class': 'page1'},
  providers: [Page1Service]
})
export class Page1Page implements OnInit {

  public articles: Array<any>;
  public articlesSaved: Array<Article>;

  public toShow: boolean;

  constructor(public page1Service: Page1Service, private modalController:ModalController, private activatedRoute: ActivatedRoute) {
    this.toShow = true;
  }

  ngOnInit() {
    this.articlesSaved = [];
    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.articles = data;
      }
    );
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

  perist(){
    this.page1Service.persistArticles(this.articlesSaved).then(
      ok => {
        console.log("Les articles ont bien été stockés");
      }
    );
  }
  save(id: number){
    for (let article of this.articles){
      if(article.id == id){
        article.persiste = !article.persiste;
        console.log(article);
        let length = this.articlesSaved.push(article);
        this.perist();
      }
    }
  }
}

