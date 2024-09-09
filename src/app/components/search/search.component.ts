import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { articleService } from '../../../services/article.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [articleService],
})
export class SearchComponent implements OnInit {
  public title: string;
  public articles: Article[];
  public searchString:string

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: articleService
  ) {
    this.title = 'Busqueda:';
    this.articles=[]
    this.searchString=''
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let search = params['search'];
      this.searchString=search
      this._articleService.search(search).subscribe(
        (response) => {
          this.articles = response.articles;
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
