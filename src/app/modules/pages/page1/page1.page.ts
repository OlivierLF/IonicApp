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

  private articles: Array<any>;
  private articlesSaved: Array<Article>;

  public toShow: boolean;

  constructor(public page1Service: Page1Service, private modalController:ModalController, private activatedRoute: ActivatedRoute) {
    this.toShow = true;
  }

  ngOnInit() {
    this.articlesSaved = [];
    this.page1Service.getArticles().subscribe(
      (data: Array<any>) => {
        this.toShow=false;
        this.articles = data;
        this.page1Service.getArticlesPersist().then((val)=> {
          this.articlesSaved=val;
          for (let article of this.articlesSaved){
            for (let arti of this.articles){
              if(arti.id == article.id){
                arti.persiste=true;                
              }
            }
          }
        });
      },
      error => {
        this.toShow=true;
        this.page1Service.getArticlesPersist().then((val)=> {
          this.articles=val;
        });
        
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
        //console.log("Les articles ont bien été stockés");
      }
    );
  }
  save(id: number){
    for (let article of this.articles){
      if(article.id == id){
        article.persiste = !article.persiste;
        this.articlesSaved.push(article);
        this.perist();
      }
    }
  }
  delete(id: number){
    let i=0;
    for (let article of this.articlesSaved){
      if(article.id == id){
        let supp= this.articlesSaved.splice(i,1);
        this.perist();        
      }
      i++;
    }
    for (let article of this.articles){
      if(article.id == id){
        article.persiste = !article.persiste;
      }
    }
  }
}

