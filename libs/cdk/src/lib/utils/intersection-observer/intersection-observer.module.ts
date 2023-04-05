import { NgModule } from '@angular/core';
import { RenderWhenInViewDirective } from './render-when-in-view.directive';

@NgModule({
    imports: [RenderWhenInViewDirective],
    declarations: [],
    exports: [RenderWhenInViewDirective]
})
export class IntersectionObserverModule {}
