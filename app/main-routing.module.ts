import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MainComponent } from '~/main.component';
import { BrowseComponent } from '~/browse.component';
import { CategoryComponent } from '~/category.component';
import { SearchComponent } from '~/search.component';

const routes: Routes = [
  {
    path: ':fakeId', // this dynamic param needed to get routing to work in angular
    component: MainComponent,
    children: [
      {path: "", redirectTo: "/main/10/(featured:featured//browse:browse//search:search)", pathMatch: "full"},

      {path: "featured", loadChildren: './featured.module#FeaturedModule', outlet: 'featured'},
      {path: "featured/item", loadChildren: './item.module#ItemModule', outlet: 'featured'},

      {path: "browse", component: BrowseComponent, outlet: "browse"},
      {path: "browse/category", component: CategoryComponent, outlet: "browse"},
      {path: "browse/category/item", loadChildren: './item.module#ItemModule', outlet: "browse"},

      {path: "search", component: SearchComponent, outlet: "search"},

    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class MainRoutingModule {
}
