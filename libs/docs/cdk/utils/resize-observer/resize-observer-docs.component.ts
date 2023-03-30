import { Component } from '@angular/core';
import { getAssetFromModuleAssets } from '@fundamental-ngx/docs/shared';

const defaultExampleTs = 'resize-observer-service-usage-example.component.ts';

@Component({
    templateUrl: './resize-observer-docs.component.html'
})
export class ResizeObserverDocsComponent {
    basicExample = [
        {
            code: getAssetFromModuleAssets(defaultExampleTs),
            language: 'ts',
            fileName: 'resize-observer-service-usage-example',
            component: 'ResizeObserverServiceUsageExampleComponent'
        }
    ];
}
