import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookTableComponent } from './book-table/book-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
