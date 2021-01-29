import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../bookService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id!: number;
  book!: Book;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.book = new Book();
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(res => {
      this.book =res;
    });
  }
  list(){
    this.router.navigate(['']);
  }

}
