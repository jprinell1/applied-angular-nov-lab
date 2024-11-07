import { Routes } from "@angular/router";
import { BooksComponent } from "./books.component";
import { BookService } from "./services/books.services";
import { BookStore } from "./services/books.store";

export const BOOKS_ROUTES: Routes = [
    {
      path: '',
      component: BooksComponent,
      providers: [BookStore, BookService],
    },
  ];