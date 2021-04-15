import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnHookComponent } from './learn-hook/learn-hook.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';

const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxjsComponent },
  { path: 'learn-hook', component: LearnHookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
