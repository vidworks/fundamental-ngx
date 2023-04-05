import { Component } from '@angular/core';
import { ExampleFile, getExampleFile } from '@fundamental-ngx/docs/shared';

@Component({
    selector: 'app-intersection-observer',
    templateUrl: './intersection-observer-docs.component.html'
})
export class IntersectionObserverDocsComponent {
    intersectionObserverDefaultExample: ExampleFile[] = [
        getExampleFile('intersection-observer-default-example.component.ts')
    ];
}
