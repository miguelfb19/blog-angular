import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../../services/global';
import { articleService } from '../../../services/article.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[articleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public sliderHomeText: string;
  public articles: Article[] = [];
  public url: string;

  constructor(private _articleService: articleService) {
    this.title = 'ÚLTIMOS ARTÍCULOS';
    this.sliderHomeText =
      'Bienvenido al blog de Miguel con Angular';
    this.url = Global.url;
  }

  ngOnInit() {
    this._articleService.getLastArticles().subscribe(
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
