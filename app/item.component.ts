import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: "Item",
	moduleId: module.id,
	templateUrl: "./item.component.html",
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions,
              private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
	}

	goBack(): void {
		this.routerExtensions.back({relativeTo: this.activatedRoute});
	}
}
