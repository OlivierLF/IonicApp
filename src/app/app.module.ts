import {APP_BASE_HREF, CommonModule, registerLocaleData} from "@angular/common";
import * as moment from 'moment';
import {CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IonicModule, IonicRouteStrategy} from "@ionic/angular";
import {AppRoutingModule} from "./routing/app-routing.module";
import {IonicStorageModule} from "@ionic/storage";
import {ServiceWorkerModule} from "@angular/service-worker";
import {environment} from "../environments/environment";
import {RouteReuseStrategy} from "@angular/router";
import localeFr from '@angular/common/locales/fr';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ModalPageModule } from "./modules/pages/modal/modal.module";
import { MenuPageModule } from "./modules/pages/menu/menu.module";

registerLocaleData(localeFr);
moment.locale('fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot({
      name: 'ionic-storage',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.PRODUCTION}),
    ModalPageModule,
    MenuPageModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule {
}
