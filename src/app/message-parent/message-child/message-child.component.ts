import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-message-child',
  templateUrl: './message-child.component.html',
  styleUrls: ['./message-child.component.sass'],
})
export class MessageChildComponent implements OnInit {
  @Output() onChangeCount = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeCount() {
    this.onChangeCount.emit();
  }
}
