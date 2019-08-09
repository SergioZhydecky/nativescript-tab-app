import { NgModule } from '@angular/core';
import { MainRoutingModule } from '~/main-routing.module';
import { MainComponent } from '~/main.component';
import { BrowseComponent } from '~/browse.component';
import { CategoryComponent } from '~/category.component';
import { SearchComponent } from '~/search.component';
import { BackComponent } from '~/back.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
  imports: [
    MainRoutingModule,
    NativeScriptCommonModule
  ],
  declarations: [
    MainComponent,
    BrowseComponent,
    CategoryComponent,
    SearchComponent,
    BackComponent
  ],
  schemas: [
  ]
})
export class MainModule {
}
