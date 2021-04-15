import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent implements OnChanges, OnInit {
  @Input() bookList: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.bookList);
    console.log(changes);
    console.log('ngOnChange');
  }

  ngOnInit(): void {}
}
