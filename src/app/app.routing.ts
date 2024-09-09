// importar modulos de router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

//Importar componentes que tienen una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { SearchComponent } from './components/search/search.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

//Array de rutas

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'blog/article/:id', component: ArticleDetailsComponent },
  { path: 'search/:search', component: SearchComponent },
  { path: 'createArticle', component: CreateArticleComponent },
  { path: 'blog/edit/:id', component: EditArticleComponent },
  { path: '**', component: ErrorComponent },
];

// Exportar el modulo de rutas

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> =
  RouterModule.forRoot(appRoutes);
