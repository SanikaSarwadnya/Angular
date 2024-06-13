import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-component',
  templateUrl: './binding-component.component.html',
  styleUrls: ['./binding-component.component.css']
})
export class BindingComponentComponent {
  img="assets/images/Nature.jpeg";
  day = 'fri'

  book=[
    {bookId:101,
    bookname:'java programmimg',
    author:'xyz',
     price:200,
    qty:50
    },
    {bookId:102,
      bookname:'Networking',
      author:'abc',
       price:500,
      qty:10
      },
      {bookId:103,
        bookname:'Animal',
        author:'pqr',
         price:700,
        qty:12
        },
        {bookId:104,
          bookname:'wings of fire',
          author:'abdul kalam',
           price:150,
          qty:40
          },
          {bookId:105,
            bookname:'shyamchi aai',
            author:'savarkar',
             price:300,
            qty:100
            }
  ]

}
