import { Component, OnChanges, OnInit } from '@angular/core';

interface testObj {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnChanges, OnInit {
  title = 'test-ng';
  testValue = '';
  bookList = ['计算机体系结构精髓', 'JavaScript 高级程序设计'];
  oldTestValue: string;
  obj: testObj = { value: '' };
  constructor() {
    this.testValue = '123';
    this.oldTestValue = this.testValue;
  }

  ngOnChanges() {
    console.log('onChange');
  }

  ngOnInit() {
    console.log('onInit');
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
  }
}
