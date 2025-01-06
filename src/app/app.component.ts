import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteService } from './services/quote.service';
import { QuoteModel } from './models';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  quoteList : string = '';

  constructor(private httpService:QuoteService){

  }
  ngOnInit() {
     this.fetchQuote();
  }
   
  fetchQuote(){
    this.httpService.fetchQuote().subscribe((res : QuoteModel) =>{
       this.quoteList = res.quote  ?? '';
    })
  }
 
}
