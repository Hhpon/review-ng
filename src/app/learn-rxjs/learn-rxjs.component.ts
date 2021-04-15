import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-learn-rxjs',
  templateUrl: './learn-rxjs.component.html',
  styleUrls: ['./learn-rxjs.component.sass'],
})
export class LearnRxjsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.learnRxjs();
  }

  learnRxjs() {
    const letters = of('a', 'b', 'c');
    const result = letters.pipe(
      mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
    );
    result.subscribe((x) => console.log(x));
  }
}
