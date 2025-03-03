import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../../services/global';
import { articleService } from '../../../services/article.services';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.css',
})
export class SingleArticleComponent implements OnInit {
  public url: string;
  public articleImage: string;
  @Input() article: Article;

  constructor(private _articleService: articleService) {
    this.url = Global.url;
  }

  ngOnInit() {
    if (this.article.image) {
      this._articleService.getImagesFromDS3(this.article.image).subscribe({
        next: (res) => {
          if (res?.fileUrl) {
            this.articleImage = res.fileUrl;
          }
        },
        error: (error) => {
          console.error('Error al obtener la imagen:', error);
          this.articleImage = 'assets/default-image.jpg';
        },
      });
    }
  }
}
