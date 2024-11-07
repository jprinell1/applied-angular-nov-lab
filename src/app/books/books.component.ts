import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'app-books',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    @for(book of clientResponse(); track book.id) {
                        <tr>
                            <td>{{book.id}}</td>
                            <td>{{book.title}}</td>
                            <td>{{book.author}}</td>
                            <td>{{book.year}}</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    `,
    styles: ``
})
export class BooksComponent {
    #httpClient$ = inject(HttpClient);
    clientResponse = toSignal(this.#httpClient$.get<{
        data: { 
            id: string; 
            title: string; 
            author: string; 
            year: number;
        }[];
    }>('/api/books')
        .pipe(map((res) => res.data)));
}