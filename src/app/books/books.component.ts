import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BookListComponent } from './pages/book-list.component';
import { CenturySummaryComponent } from './pages/century-summary.component';
import { BookStore } from './services/books.store';

@Component({
    selector: 'app-books',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [BookListComponent, CenturySummaryComponent],
    template: `
        <div>
            @if(store.getBookList()) {
                <div class=pb-20>
                    <app-book-list [books]="store.getBookList()"/>
                </div>
                <div>
                    <app-century-summary [books]="store.getBookList()"/>
                </div>
            }
        </div>
    `,
    styles: ``
})
export class BooksComponent {
    store = inject(BookStore);
}