import { NgModule } from '@angular/core';
import { FormsModule } from '@fundamental-ngx/cdk/forms';
import { DataSourceModule } from '@fundamental-ngx/cdk/data-source';
import { UtilsModule } from '@fundamental-ngx/cdk/utils';
import { IntersectionObserverModule } from './utils/intersection-observer';

@NgModule({
    imports: [],
    declarations: [],
    exports: [FormsModule, DataSourceModule, UtilsModule, IntersectionObserverModule]
})
export class FundamentalNgxCdkModule {}
