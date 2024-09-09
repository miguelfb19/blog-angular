import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { Router } from '@angular/router';
import { articleService } from '../../../services/article.services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrl: './create-article.component.css',
  providers: [articleService],
})
export class CreateArticleComponent {
  public article: Article;
  public status: string;
  public fileName: string;
  public formData: FormData;
  public file: File;
  public fileAlert: number;

  constructor(
    private _articleServices: articleService,
    private _router: Router
  ) {
    this.article = new Article('', '', '', '', '');
    this.status = '';
    this.formData = new FormData();
    this.fileAlert = 0;
  }
  save() {
    this._articleServices.save(this.article).subscribe(
      (response) => {
        if (response.status.toLowerCase() == 'success') {
          this.status = 'success';
          this.article = response.article;
          if (this.file && this.file.type.includes('image')) {
            this.fileName = this.file.name;
            this.formData.append('file0', this.file, this.fileName);
            this._articleServices
              .uploadImage(this.formData, this.article._id)
              .subscribe(
                (res) => {
                  console.log(res);
                },
                (error) => {
                  console.log(error);
                  console.log('Error subiendo la imagen');
                }
              );
          }
          Swal.fire('Artículo guardado con éxito', '', 'success');
          setTimeout(() => {
            this._router.navigate(['/blog']);
          }, 1000);
        } else {
          Swal.fire('ERROR', 'Error al guardar el artículo', 'error');
          console.log('Error al guardar el artículo');
          this.status = 'error';
        }
      },
      (error) => {
        Swal.fire('ERROR', 'Error al guardar el artículo', 'error');
        console.log(error);
        this.status = 'error';
      }
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
    this.fileAlert = 0;
  }
}
