import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { InnerTextComponent } from './inner-text/inner-text.component';
import { LearnRxjsComponent } from './learn-rxjs/learn-rxjs.component';
import { LearnHookComponent } from './learn-hook/learn-hook.component';

@NgModule({
  declarations: [AppComponent, BookListComponent, InnerTextComponent, LearnRxjsComponent, LearnHookComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
