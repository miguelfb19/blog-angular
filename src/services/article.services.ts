import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { UrlTree } from "@angular/router";

@Injectable()
export class articleService{
    public url:string

    constructor(
        private _http: HttpClient
    ){
        this.url=Global.url
    }

    getArticles():Observable<any>{
        return this._http.get(this.url+'articles')
    }

    getLastArticles():Observable<any>{
        return this._http.get(this.url+'articles/true')
    }

    getArt(articleId:string):Observable<any>{
        return this._http.get(this.url+'article/'+articleId)
    }
    search(searchString:string):Observable<any>{
        return this._http.get(this.url+'search/'+searchString)
    }
    save(articulo:any):Observable<any>{
        let params = JSON.stringify(articulo) //cuando hago solicitudes HTTP estas no reciben objetos literales como parametros sino que debo pasar jsonString o numeros...
        let headers= new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'save', params, {headers: headers})
    }
    uploadImage(formData:any, id:string):Observable<any>{
        return this._http.post(this.url+'upload-image/'+id, formData)
    }

    delete(id:string):Observable<any>{
        return this._http.delete(this.url+'article/'+id);
    }

    update(id:string, article:any):Observable<any>{
        let params = JSON.stringify(article)
        let headers= new HttpHeaders().set('Content-Type', 'application/json')
        return this._http.put(this.url+'article/'+id, params, {headers: headers})
    }
}