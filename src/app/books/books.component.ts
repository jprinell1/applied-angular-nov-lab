import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-books',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
        <p>Books goes here</p>
    `,
    styles: ``
})
export class BooksComponent {

}