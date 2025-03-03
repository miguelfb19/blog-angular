import { Component, OnInit } from '@angular/core';
import { articleService } from '../../../services/article.services';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css',
  providers: [articleService],
})
export class ArticleDetailsComponent implements OnInit {
  public article: Article;
  public url: string;
  public articleImage: string;
  constructor(
    private _articleService: articleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = {} as Article;
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id = params['id'];

      this._articleService.getArt(id).subscribe({
        next: (response) => {
          if (response.article) {
            this.article = response.article;
            console.log(response.article.image);
      
            if (response.article.image) {
              this._articleService.getImagesFromDS3(response.article.image).subscribe({
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
          } else {
            this._router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.error('Error al obtener el artículo:', error);
          this._router.navigate(['/home']);
        },
      });
      
    });
  }

  delete() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Estás seguro?',
        text: 'No podrás recuperarlo una vez borrado',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, borrar!',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._articleService.delete(this.article._id).subscribe(
            (response) => {
              if (response.status.toLowerCase() == 'success') {
                swalWithBootstrapButtons.fire({
                  title: 'Borrado!',
                  text: 'El artículo se borro con éxito',
                  icon: 'success',
                });
                setTimeout(() => {
                  this._router.navigate(['/blog']);
                }, 1000);
              }
            },
            (error) => {
              swalWithBootstrapButtons.fire({
                title: 'Error',
                text: 'Hubo un error al borrar el artículo',
                icon: 'error',
              });
              console.log(error);
            }
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelado',
            text: 'No se ha borrado',
            icon: 'error',
          });
        }
      });
  }
}
