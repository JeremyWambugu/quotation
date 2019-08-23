import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = 
  [
    new Quote(1,'We are all in the gutter, but some of us are looking at the stars. – Oscar Wilde' , 'Accept no one’s definition of your life; define yourself. – Harvey Fierstein',new Date(2019,8,12)),
    new Quote(2,'No one can make you feel inferior without your consent. – Eleanor Roosevelt', 'If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success. – James Cameron',new Date(2019,8,13)),
    new Quote(3,' It’s not about how hard you can hit; it’s about how hard you can get hit and keep moving forward. —Rocky Balboa, Rocky','Never regret a day in your life. Good days give you happiness and bad days give you experience. —Unknown',new Date(2019,8,14)),
   
    
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  

  constructor() { }

  ngOnInit() {
    
  }

}
