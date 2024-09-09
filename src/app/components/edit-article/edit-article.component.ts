import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { articleService } from '../../../services/article.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Global } from '../../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrl: './edit-article.component.css',
  providers: [articleService],
})
export class EditArticleComponent implements OnInit {
  public article: Article;
  public file: File;
  public fileName: string;
  public fileAlert: number;
  public url: string;
  public status:string
  public formData:FormData

  constructor(
    private _articleServices: articleService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.article = {} as Article;
    this.url = Global.url;
    this.fileAlert = 2;
    this.formData=new FormData()
  }

  update() {
    this._articleServices.update(this.article._id, this.article).subscribe(
      (response) => {        
        if (response.status.toLowerCase() == 'success') {
          this.status = 'success';
          this.article = response.article;
          if(this.file && this.file.type.includes('image')){
            this.fileName = this.file.name;
            this.formData.append('file0', this.file, this.fileName);
            this._articleServices.uploadImage(this.formData, this.article._id).subscribe(
              res=>{
                console.log(res);
              },
              error=>{
                console.log(error);
                console.log('Error subiendo la imagen');
              }
            )
          }
          Swal.fire('Artículo editado con éxito', '', 'success');
          setTimeout(() => {
            this._router.navigate(['/blog/article/'+this.article._id]);
          }, 1000);
          
        } else {
          Swal.fire('ERROR', 'Error al editar el artículo', 'error');
          console.log('Error al editar el artículo');
          this.status = 'error';
        }
      },
      (error) => {
        Swal.fire('ERROR', 'Error al guardar el artículo', 'error');
        console.log(error);
        this.status = 'error';
      },
    );
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.fileName = this.file.name;

    if (this.file.type.includes('image')) {
      this.fileAlert = 0;
    } else {
      this.fileAlert = 1;
    }
  }
  deleteImage() {
    this.file = new File([], '');
    this.fileName = '';
    this.fileAlert = 2;
  }

  getArticle() {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._articleServices.getArt(id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(['/home']);
          }
        },
        (error) => {
          console.log(error);
          this._router.navigate(['/home']);
        }
      );
    });
  }

  ngOnInit() {
    this.getArticle();
  }
}
