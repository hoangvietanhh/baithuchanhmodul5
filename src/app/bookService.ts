import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookService{
  constructor(private http: HttpClient) {
  }
  public doCreate = (book: any) => {
    return this.http.post('http://localhost:3000/books', book, {responseType: 'text' as 'json'});
  }
// tslint:disable-next-line:typedef
  public getBooks(){
    return this.http.get('http://localhost:3000/books');
  }
// tslint:disable-next-line:typedef
  public getBookById = (id: number) => this.http.get('http://localhost:3000/books/' + id);
// tslint:disable-next-line:align
  public deleteBookById = (id: number) => this.http.delete('http://localhost:3000/books/' + id);

  // @ts-ignore
  public updateBook = (id: number, value: any)  => this.http.put('http://localhost:3000/books/' + id,value)
}
