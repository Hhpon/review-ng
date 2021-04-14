import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-text',
  templateUrl: './inner-text.component.html',
  styleUrls: ['./inner-text.component.sass'],
})
export class InnerTextComponent implements OnInit {
  @Input() innerText = '';

  constructor() {}

  ngOnInit(): void {}
}
