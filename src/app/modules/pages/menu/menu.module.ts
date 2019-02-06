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
                path: 'page1',
                loadChildren: '../page1/page1.page.module#Page1PageModule'
              },
              {
                path: 'main',
                loadChildren: '../../main/main.page.module#MainPageModule'
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
