import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.component.html',
  styleUrls: ['./message-parent.component.sass'],
})
export class MessageParentComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  changeCount() {
    this.count++;
  }
}
