import { Component, AfterViewInit } from '@angular/core';
import { ItunesSearchService } from '../itunes-search.service';
declare var $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [ItunesSearchService]
})
export class BookListComponent implements AfterViewInit {

  private dickens: any = {};
  private hemingway: any = {};
  private shakespeare: any = {};
  private errorMessage: string = "Error accessing the iTunes API.";
  private errorMessageDickens = "";
  private errorMessageHemingway = "";
  private errorMessageShakespeare = "";

  private dickensURL: string = "https://itunes.apple.com/search?country=gb&term=dickens&media=ebook&limit=10";
  private hemingwayURL: string = "https://itunes.apple.com/search?country=gb&term=heminway&media=ebook&limit=10"
  private shakespeareURL: string = "https://itunes.apple.com/search?country=gb&term=shakespeare&media=ebook&limit=10";

  constructor(private iTunesSearch: ItunesSearchService) {
    this.iTunesSearch.getData(this.dickensURL)
      .subscribe(
      data => this.dickens = data,
      error => this.errorMessageDickens = error);

    this.iTunesSearch.getData(this.hemingwayURL)
      .subscribe(
      data => this.hemingway = data,
      error => this.errorMessageHemingway = error);

    this.iTunesSearch.getData(this.shakespeareURL)
      .subscribe(
      data => this.shakespeare = data,
      error => this.errorMessageShakespeare = error);
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }
}
