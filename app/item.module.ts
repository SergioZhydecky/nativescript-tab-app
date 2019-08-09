import { NgModule } from '@angular/core';
import { ItemComponent } from '~/item.component';
import { ItemRoutingModule } from '~/item-routing.module';

@NgModule({
  imports: [
    ItemRoutingModule
  ],
  declarations: [
    ItemComponent,
  ],
  schemas: [
  ]
})
export class ItemModule {
}
