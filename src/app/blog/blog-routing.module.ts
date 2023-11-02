import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog/blog.component";

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BlogComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
