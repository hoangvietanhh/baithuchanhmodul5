import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../bookService';
import {Book} from '../book';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  book: Book = new Book();
  submitted = false;
  formCreate?: FormGroup;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formCreate = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      author: ['',[Validators.required]],
      description: ['',[Validators.required]]
    })
  }
  save(){
    // @ts-ignore
    this.bookService.doCreate(this.formCreate.value).subscribe(res => {
        this.gotoList();
      });
  }
  onSubmit(){
    this.save();
  }
  gotoList(){
    this.router.navigate(['']);
  }

}
