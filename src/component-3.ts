import { Component } from '@angular/core';
import './app.component.css';
@Component({
    selector: 'app-component-3',
    standalone: true,
    imports: [],
    template: `
<p class="test-red"> hello, this is angular and vite </p>
`,

})
export class Component3 {

    ngOnInit(): void { }
}