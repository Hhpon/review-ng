import { Component, OnInit } from '@angular/core';
import { of, interval, forkJoin, concat } from 'rxjs';
import { mergeMap, map, tap, switchMap, take, concatMap, exhaustMap } from 'rxjs/operators';

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
    const letters1 = of('d', 'e', 'f');
    // const result = letters.pipe(
    //   mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
    // );
    // result.subscribe((x) => console.log(x));

    var mainstream = interval(500);
    mainstream
      .pipe(concatMap((x) => interval(200).pipe(take(5))))
      .subscribe((res) => console.log(res));

    /**
     * forkJoin是并行处理异步方法的
     */
    // forkJoin({ letters: letters, letters1: letters1 }).subscribe((res) => {
    //   console.log(res);
    // });

    /**
     * map 处理返回结果
     * tap 处理的与返回结果无关
     */
    // letters
    //   .pipe(
    //     mergeMap((x) => {
    //       return letters1.pipe(
    //         tap((i) => {
    //           return x + i;
    //         })
    //       );
    //     })
    //   )
    //   .subscribe((res) => console.log(res));
  }
}
