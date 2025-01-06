import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndPoint, RandomQuoteEndpoint } from './endpoints';
import { QuoteModel } from '../models';

@Injectable({
  providedIn: 'root'
})



export class QuoteService {


  constructor(private http: HttpClient) { }


  fetchQuote = (): Observable<QuoteModel> => {
    return this.http.get<QuoteModel>(RandomQuoteEndpoint);
  };
}
