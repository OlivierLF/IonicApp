import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import { MyItemsPage } from "./myItems.page";

@NgModule({
  imports: [
    CommonModule,
    IonicModule, 
    RouterModule.forChild([
      {
        path: '',
        component: MyItemsPage
      }
    ])
  ],
  bootstrap: [MyItemsPage],
  declarations: [MyItemsPage]
})

export class MyItemsPageModule {
}
