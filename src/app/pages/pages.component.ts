import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{

  isCollapsed = false;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

  }

  ngOnInit(): void {
  }

  sidebarCollapse() {
    this.isCollapsed = !this.isCollapsed;
    let sidebar = this.elementRef.nativeElement.querySelector(".sidebar-logo img");
    console.log(sidebar);
    if(sidebar) {
      if(this.isCollapsed) {
        this.renderer2.setStyle(sidebar, "display", "none");
      } else {
        this.renderer2.setStyle(sidebar, "display", "inline-block");
      }
    }

  }

  clrLocal() {
    localStorage.clear();
  }


}
