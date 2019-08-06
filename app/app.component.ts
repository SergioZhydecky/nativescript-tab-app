import { Component, OnInit } from "@angular/core";
import * as application from 'tns-core-modules/application';
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  public tabSelectedIndex = 0;

  constructor(private router: RouterExtensions,
              private activatedRoute: ActivatedRoute) {
    this.router.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      tap(() => {
        console.log(this.activatedRoute.root.children);
      })
    ).subscribe(d => {
      console.log('nav end')
    });
  }

  public ngOnInit() {
    application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
      args.cancel = true;
      switch (this.tabSelectedIndex) {
        case 0:
          this.router.back({relativeTo: this.activatedRoute.root.children.find(x => x.outlet === "featured")});
          break;

        case 1:
          this.router.back({relativeTo: this.activatedRoute.root.children.find(x => x.outlet === "browse")});
          break;

        case 2:
          this.router.back({relativeTo: this.activatedRoute.root.children.find(x => x.outlet === "search")});
          break;
      }
    });
  }

  switchTabByIndex(index: number) {
    this.tabSelectedIndex = index;
  }

}
