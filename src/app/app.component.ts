import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuoteService } from './services/quote.service';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
interface Quote {
  id?: number;
  quote?: string;
  author?: string;
}
export class AppComponent {

  quoteList : string | undefined = '';

  constructor(private q:QuoteService){

  }
  ngOnInit() {
     this.fetchQuote();
  }
   
  fetchQuote(){
    this.q.fetchQuote().subscribe((res : Quote) =>{
       this.quoteList = res.quote ;
    })
  }
 
}
