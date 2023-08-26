import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public sidebarShow: boolean = false;

  toggleMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }

}
