import { Component, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  public url: string;
  @Input() articles: Article[];
  @Input() searchProp?:boolean

  constructor() {
    this.url = Global.url;
    this.articles=[]
  }
}
