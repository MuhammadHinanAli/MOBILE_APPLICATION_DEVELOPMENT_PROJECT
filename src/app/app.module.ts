import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {IonicStorageModule} from '@ionic/storage-angular'; //IMPORT STORAGE ANGULAR FUNCTION // ALSO IMPOTED IN NGMODULE
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';  //IMPORT HTTP ANGULAR FUNCTION TO ACCESS HTTP // ALSO IMPORTED IN NGMODULE

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
