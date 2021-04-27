import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearnHookComponent } from './learn-hook/learn-hook.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { MessageParentComponent } from './message-parent/message-parent.component';

const routes: Routes = [
  { path: 'learn-rxjs', component: LearnRxjsComponent },
  { path: 'learn-hook', component: LearnHookComponent },
  { path: 'message-parent', component: MessageParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
