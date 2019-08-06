import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: "Category",
	moduleId: module.id,
	templateUrl: "./category.component.html",
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	constructor(private routerExtensions: RouterExtensions,
              private activatedRoute: ActivatedRoute) {
	}

	ngOnInit(): void {
	}

	goBack(): void {
		this.routerExtensions.back({relativeTo: this.activatedRoute});
	}
}
