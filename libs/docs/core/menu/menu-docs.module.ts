import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent, currentComponentProvider, SharedDocumentationPageModule } from '@fundamental-ngx/docs/shared';
import { API_FILES } from '@fundamental-ngx/docs/core/shared';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuDocsComponent } from './menu-docs.component';
import {
    MenuAddonExampleComponent,
    MenuExampleComponent,
    MenuSeparatorExampleComponent
} from './examples/menu-examples.component';

import { MenuWithSubmenuExampleComponent } from './examples/menu-with-submenu-example.component';
import { DeprecatedMenuCompactDirective, MenuModule } from '@fundamental-ngx/core/menu';
import { MenuMobileExampleComponent } from './examples/menu-mobile-example.component';
import { moduleDeprecationsProvider } from '@fundamental-ngx/cdk/utils';
import { MenuScrollbarExampleComponent } from './examples/menu-scrollbar-example.component';
import { ExtendedMenuExampleComponent } from './examples/extended-menu-example.component';
import { FormControlModule } from '@fundamental-ngx/core';

const routes: Routes = [
    {
        path: '',
        component: MenuHeaderComponent,
        children: [
            { path: '', component: MenuDocsComponent },
            { path: 'api', component: ApiComponent, data: { content: API_FILES.menu } }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), SharedDocumentationPageModule, MenuModule, FormControlModule],
    exports: [RouterModule],
    declarations: [
        MenuDocsComponent,
        MenuHeaderComponent,
        MenuExampleComponent,
        MenuAddonExampleComponent,
        MenuMobileExampleComponent,
        MenuSeparatorExampleComponent,
        MenuWithSubmenuExampleComponent,
        MenuScrollbarExampleComponent,
        ExtendedMenuExampleComponent
    ],
    providers: [moduleDeprecationsProvider(DeprecatedMenuCompactDirective), currentComponentProvider('menu')]
})
export class MenuDocsModule {}
