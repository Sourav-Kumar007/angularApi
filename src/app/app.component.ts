import { HttpClient } from '@angular/common/http';
import { Component,OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  userList : string = '';

  constructor(private http: HttpClient)
  {

  }
  ngOnInit() {
    this.fetchQuote();
  }

  fetchQuote()
  {
    this.http.get('https://dummyjson.com/quotes/random').subscribe((result : any) => {
      this.userList = result.quote;
      console.log(this.userList);
    })
  }
 
}
