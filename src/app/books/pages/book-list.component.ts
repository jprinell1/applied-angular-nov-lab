import { Component, ChangeDetectionStrategy, input } from '@angular/core';

export type bookData = { 
    id: string; 
    title: string; 
    author: string; 
    year: number;
};

@Component({
    selector: 'app-book-list',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <h2>Book List</h2>
        <div class="overflow-x-auto h-96 w-2/3">
            <table class="table table-pin-rows overflow-y-scroll">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    @for(book of books(); track book.id) {
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
export class BookListComponent {
    books = input.required<bookData[] | undefined>();
}