import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Main",
  moduleId: module.id,
  templateUrl: "./main.component.html",
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public tabSelectedIndex = 0;

  constructor() {
  //
  }

  public ngOnInit() {

  }

  switchTabByIndex(index: number) {
    this.tabSelectedIndex = index;
  }

}
