import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";
import { BookListApiResponse } from "../types";

@Injectable()
export class BookService {
    #http = inject(HttpClient);

    loadBookList() {
        return this.#http
          .get<BookListApiResponse>('/api/books')
          .pipe(map((res) => res.data));
    }
}