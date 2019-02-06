import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const defaultsRoutes: Routes = [
  {
    path: '',
    loadChildren: '../modules/pages/menu/menu.module#MenuPageModule'
  }
];

const concatRoutes: Routes = [...defaultsRoutes] as Routes;

@NgModule({
  imports: [
    RouterModule.forRoot(concatRoutes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
