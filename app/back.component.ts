import { Component, OnInit } from "@angular/core";
import * as application from "tns-core-modules/application";
import { RouterExtensions } from 'nativescript-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "back-button",
  moduleId: module.id,
  templateUrl: "./back.component.html",
  styleUrls: ['./back.component.css']
})
export class BackComponent {

  constructor(private router: RouterExtensions,
              private activatedRoute: ActivatedRoute) {
  }



  goBack(): void {
    this.router.back({relativeTo: this.activatedRoute});
  }
}
