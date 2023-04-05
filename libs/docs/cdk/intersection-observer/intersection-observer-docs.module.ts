import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { API_FILES } from '@fundamental-ngx/docs/cdk/shared';
import { IntersectionObserverHeaderComponent } from './intersection-observer-header/intersection-observer-header.component';
import { IntersectionObserverDocsComponent } from './intersection-observer-docs.component';
import { examples } from './examples';
import { IntersectionObserverModule } from '@fundamental-ngx/cdk/utils';

const routes: Routes = [
    {
        path: '',
        component: IntersectionObserverHeaderComponent,
        children: [
            { path: '', component: IntersectionObserverDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.intersectionObserver } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, IntersectionObserverModule],
    exports: [RouterModule],
    declarations: [examples, IntersectionObserverDocsComponent, IntersectionObserverHeaderComponent],
    providers: [currentComponentProvider('intersection-observer')]
})
export class IntersectionObserverDocsModule {}
