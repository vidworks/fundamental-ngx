import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResizeObserverDocsComponent } from './resize-observer-docs.component';
import { ResizeObserverHeaderComponent } from './resize-observer-header/resize-observer-header.component';
import { currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { ClickedBehaviorModule, FocusableItemModule } from '@fundamental-ngx/cdk/utils';
import { ResizeObserverServiceUsageExampleComponent } from './examples/resize-observer-service-usage-example.component';

const routes: Routes = [
    {
        path: '',
        component: ResizeObserverHeaderComponent,
        children: [
            {
                path: '',
                component: ResizeObserverDocsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedDocumentationPageModule,
        ClickedBehaviorModule,
        FocusableItemModule
    ],
    exports: [RouterModule],
    declarations: [
        ResizeObserverHeaderComponent,
        ResizeObserverDocsComponent,
        ResizeObserverServiceUsageExampleComponent
    ],
    providers: [currentComponentProvider('resize-observer')]
})
export class ResizeObserverDocsModule {}
