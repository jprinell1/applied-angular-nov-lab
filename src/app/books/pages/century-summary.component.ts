import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { bookData } from './book-list.component';

@Component({
    selector: 'app-century-summary',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <h2>Books by Century</h2>
        <div class="overflow-x-auto h-60 w-1/4">
            <table class="table table-pin-rows overflow-y-scroll">
                <thead>
                    <tr>
                        <th>Century</th>
                        <th>Number of Books</th>
                    </tr>
                </thead>
                <tbody>
                    @for(book of books(); track book.id) {
                        <tr>
                            <td>{{book.year}}</td>
                            <td>12</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    `,
    styles: ``
})
export class CenturySummaryComponent {
    books = input.required<bookData[] | undefined>();
}