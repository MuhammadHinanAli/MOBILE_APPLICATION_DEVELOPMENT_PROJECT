import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage-angular'; //IMPORT FOR STORAGE
import { NavController} from '@ionic/angular'; //IMPORT FOR NAVIGATING

@Component({
  selector: 'app-genre',
  templateUrl: './genre.page.html',
  styleUrls: ['./genre.page.scss'],
})
export class GenrePage implements OnInit {
  myGenre:string =""; //VARIABLE TO STORE THE SELECTED GENRE

  constructor(private storage:Storage,private navCtrl:NavController) { }

  //FUNCTION
  async onSave(){  //FUNCTION WITH ASYNC 
    await this.storage.create();  //BUILT IN FUNCTION OF STORAGE // CREATES DATABASE
    await this.storage.set("genre", this.myGenre); //BUILT IN FUNCTION, WILL NOT RUN TILL HAVE FIRST PROMPT RUNS// SETS AND PASS THE KEY
    await this.navCtrl.navigateBack('/home'); //TO NAVIAGET BACK TO HOME PAGE 
  }

  ngOnInit() {
  }

}
