import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { bookData, BookListComponent } from './pages/book-list.component';
import { CenturySummaryComponent } from './pages/century-summary.component';

@Component({
    selector: 'app-books',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BookListComponent, CenturySummaryComponent],
    template: `
        <div>
            @if(clientResponse()) {
                <div class=pb-20>
                    <app-book-list [books]="clientResponse()"/>
                </div>
                <div>
                    <app-century-summary [books]="clientResponse()"/>
                </div>
            }
        </div>
    `,
    styles: ``
})
export class BooksComponent {
    #httpClient$ = inject(HttpClient);  
    clientResponse = toSignal(this.#httpClient$.get<{
        data: bookData[];
    }>('/api/books')
        .pipe(map((res) => res.data)));
}