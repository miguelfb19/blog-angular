import { Component, OnInit } from '@angular/core';
import { articleService } from '../../../services/article.services';
import { Article } from '../../models/article';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
  providers: [articleService],
})
export class BlogComponent implements OnInit {
  public title: string;
  public articles: Article[];
  public url: string;

  constructor(private _articleService: articleService) {
    this.title = 'BLOG';
    this.url = Global.url;
    this.articles = [];
  }

  ngOnInit() {
    this._articleService.getArticles().subscribe(
      (response) => {
        if (response.articles) {
          this.articles = response.articles;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
