import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../bookService';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!: number;
  book!: Book;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(res => {
      this.book = res;
    })
  }
  updateBook(){
    this.bookService.updateBook(this.id,this.book).subscribe(
      res => {
        this.book = new Book();
        this.gotoList();
      });
  }
  gotoList() {
    this.router.navigate(['']);
  }
  onSubmit() {
    this.updateBook();
  }

}
