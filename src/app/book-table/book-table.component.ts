import { Component, AfterViewInit, Input } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements AfterViewInit {
  @Input() author: any;

  constructor() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }

  private open(url: string): void {
    window.open(url);
  }
}
