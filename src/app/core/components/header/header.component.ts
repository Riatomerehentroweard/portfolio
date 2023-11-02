import {Component} from '@angular/core';
import {Router} from "@angular/router";

interface Link {
  label: string;
  path: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  links: Link[] = [
    {label: 'Home', path: ['/', 'home'],},
    {label: 'Portrait', path: ['/', 'about'],},
    {label: 'Blog', path: ['/', 'blog'],},
  ]

  onLinkClicked(link: Link) {
    void this.router.navigate(link.path);
  }
}
