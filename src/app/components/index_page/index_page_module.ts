import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedComponentsModule} from '@app/components/shared/shared_components_module';

import {IndexPageComponent} from './index_page.component';

/** Index page module class. */
@NgModule({
  declarations: [IndexPageComponent],
  exports: [IndexPageComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
})
export class IndexPageModule {
}
