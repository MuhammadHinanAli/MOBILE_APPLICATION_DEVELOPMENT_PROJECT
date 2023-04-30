import { Component } from '@angular/core';
import {Storage} from '@ionic/storage-angular'; //IMPORT FOR STORAGE

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myGenre:any ="";
  constructor(private storage:Storage) {}
  
  async ionViewWillEnter(){
    await this.storage.create();
    this.myGenre = await this.storage.get('genre');
  }
}
