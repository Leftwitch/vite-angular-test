import { Component, inject } from '@angular/core';
import { HeroService } from './_services/test-service';
@Component({
    selector: 'app-component-2',
    standalone: true,
    imports: [],
    template: `
<p class="test-red"> helllo, this is angular and vite </p>
`,
})
export class Component2 {
    hero = inject(HeroService)


    ngOnInit(): void {
        this.hero.hello()
    }
}