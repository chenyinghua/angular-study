import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from '../../services/menuService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  isCollapsed = false;
  menu = [];

  constructor(private menuService: MenuService, private ref: ChangeDetectorRef) { }

  getRequestContact() {
    this.menuService.getRequestContact()
      .subscribe(res => {
        this.menu = res.json();
        this.ref.detectChanges();
      }, error => {
        console.log(error);
      });
  }

  ngOnInit() {
    this.getRequestContact();
  }

}
