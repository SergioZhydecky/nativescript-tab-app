import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturedComponent } from "./featured.component";
import { ItemComponent } from "./item.component";
import { BrowseComponent } from "./browse.component";
import { CategoryComponent } from "./category.component";
import { SearchComponent } from "./search.component";

const routes: Routes = [
    { path: "", redirectTo: "/(featured:featured//browse:browse//search:search)", pathMatch: "full" },

    { path: "featured", component: FeaturedComponent, outlet: "featured" },
    { path: "featured/fitem", component: ItemComponent, outlet: "featured" },

    { path: "browse", component: BrowseComponent, outlet: "browse" },
    { path: "browse/category", component: CategoryComponent, outlet: "browse" },
    { path: "browse/category/item", component: ItemComponent, outlet: "browse" },

    { path: "search", component: SearchComponent, outlet: "search" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, {
      // enableTracing:true,

    })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
