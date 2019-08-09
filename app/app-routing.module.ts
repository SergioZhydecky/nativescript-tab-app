import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { BrowseComponent } from '~/browse.component';
import { CategoryComponent } from '~/category.component';
import { SearchComponent } from '~/search.component';
import { MainComponent } from '~/main.component';
import { AppComponent } from '~/app.component';

const routes: Routes = [
  // { path: "", redirectTo: "/(featured:featured//browse:browse//search:search)", pathMatch: "full" },
  //
  // { path: "featured", loadChildren: './featured.module#FeaturedModule', outlet: "featured" },
  // { path: "featured/item", loadChildren: './item.module#ItemModule', outlet: "featured" },
  //
  // { path: "browse", component: BrowseComponent, outlet: "browse" },
  // { path: "browse/category", component: CategoryComponent, outlet: "browse" },
  // { path: "browse/category/item",  loadChildren: './item.module#ItemModule', outlet: "browse" },
  //
  // { path: "search", component: SearchComponent, outlet: "search" },
  {path: '', loadChildren: './item.module#ItemModule'},
  {path: 'main', loadChildren: './main.module#MainModule'}

];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, {
    // enableTracing:true
  })],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
