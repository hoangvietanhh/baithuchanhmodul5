import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../bookService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: any;
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.bookService.getBooks().subscribe(res => this.books = res);
  }
  deleteBook(id: any) {
    this.bookService.deleteBookById(id).subscribe(res => {

        this.reloadData();
      },
      (
        error: any) => console.log(error));
  }

  bookDetail(id: any) {
    this.router.navigate(['detail', id]);
  }

  updateBook(id: any) {
    this.router.navigate(['update', id]);
  }

  createBook() {
    this.router.navigate(['create']);
  }
}
