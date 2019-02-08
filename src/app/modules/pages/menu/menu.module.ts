import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { RouterModule, Routes } from "@angular/router";
import { MenuPage } from "./menu.page";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    { 
        path: "", 
        component: MenuPage, 
        children: [
            {
                path: 'liste-items',
                loadChildren: '../page1/page1.page.module#Page1PageModule'
              },
              {
                path: 'main',
                loadChildren: '../../main/main.page.module#MainPageModule'
              },
              {
                path: 'mes-items',
                loadChildren: '../MyItems/myItems.page.module#MyItemsPageModule'
              }
        ]
    },
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [],
  declarations: [MenuPage]
})
export class MenuPageModule {}
