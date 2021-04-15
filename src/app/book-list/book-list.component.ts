import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { InnerTextComponent } from '../inner-text/inner-text.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent implements OnInit {
  @Input() bookList: any[] = [];
  @ContentChild(InnerTextComponent) innerTextElement: any;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit() {
    this.bookList = ['网络是怎样连接的'];
    console.log(this.innerTextElement);
    console.log('contentInit');
  }

  ngAfterContentChecked() {
    console.log('contentChecked');
  }
}
