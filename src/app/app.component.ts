import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BookListComponent } from './book-list/book-list.component';
import { InnerTextComponent } from './inner-text/inner-text.component';

interface testObj {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  title = 'test-ng';
  bookList = ['计算机体系结构精髓', 'JavaScript高级程序设计'];
  testValue = '';
  innerText = '这是一个内容投影标签';
  oldTestValue: string;
  obj: testObj = { value: '' };

  @ViewChild(BookListComponent) bookListElement: any;
  @ContentChild(InnerTextComponent) innerTextElement: any;

  constructor() {
    this.testValue = '123';
    this.oldTestValue = this.testValue;
  }
  
  

  ngOnChanges() {
    console.log('onChange');
  }

  ngDoCheck() {
    if (this.testValue !== this.oldTestValue) {
      console.log(this.testValue);
      this.oldTestValue = this.testValue;
    }
    console.log(this.obj);
    console.log('DoCheck');
  }

  changeValue() {
    this.testValue += 1;
  }

  changeBookList() {
    const bookClone = this.bookList.slice();
    bookClone.push('网络是怎样连接的');
    this.bookList = bookClone;
    console.log('DoCheck');
    this.bookList.push('网络是怎样链接的');
  }

  ngAfterContentInit() {
    console.log('contentInit');
  }

  ngAfterContentChecked() {
    console.log('contentChecked');
  }

  ngAfterViewInit() {
    console.log(this.bookListElement);
    console.log('afterViewInit');
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked');
  }
}
