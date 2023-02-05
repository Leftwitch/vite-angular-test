import { Component } from '@angular/core';
import { Component2 } from './component-2';
import { Component3 } from './component-3';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        Component2,
        Component3,
    ],
    template: `
        <p class="test-red"> hello, this is angular and vite </p>
        <app-component-2></app-component-2>
        <app-component-3></app-component-3>
    `,
})
export class AppComponent {
    constructor() { }
    ngOnInit(): void { }
}