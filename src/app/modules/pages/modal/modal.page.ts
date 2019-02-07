import {Component, OnInit} from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: 'modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  host: {'class': 'modal'},
  providers: []
})

export class ModalPage implements OnInit {
  passedId = null;

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

