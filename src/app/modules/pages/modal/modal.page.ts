import {Component, OnInit} from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";

interface Article {
  userId: number;
  id: number;
  title: String;
  body: String;
}

@Component({
  selector: 'modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  host: {'class': 'modal'},
  providers: []
})

export class ModalPage implements OnInit {
  //passedId = null;
  passedId: Article;

  constructor(private modalController: ModalController,
              private navParams: NavParams) {
  }

  ngOnInit(){
    this.passedId = this.navParams.get('custom_id');
    
  }

  closeModal(){
    this.modalController.dismiss();
  }
}

