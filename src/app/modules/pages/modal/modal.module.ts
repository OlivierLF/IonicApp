import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { ModalPage } from "./modal.page";
import { MenuPageModule } from "../menu/menu.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ModalPage
      }
    ])
  ],
  bootstrap: [ModalPage],
  declarations: [ModalPage]
})
export class ModalPageModule {
}
