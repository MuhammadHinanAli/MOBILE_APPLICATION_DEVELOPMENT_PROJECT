import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
      //FUNCTION WITH ASYNC
      async getBrowser(){
        await Browser.open({url: 'https://www.odeoncinemas.ie/'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

      async getBrowser1(){
        await Browser.open({url: 'https://www.cineworld.ie/#/buy-tickets-by-cinema?in-cinema=0001&at=2023-04-30&view-mode=list'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

      async getBrowser2(){
        await Browser.open({url: 'https://www.omniplex.ie/'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

      async getBrowser3(){
        await Browser.open({url: 'https://www.myvue.com/'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

      async getBrowser4(){
        await Browser.open({url: 'https://www.eyecinema.ie/'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

      async getBrowser5(){
        await Browser.open({url: 'https://imccinemas.ie/'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN CINEMA.PAGE.HTML
      }

}
