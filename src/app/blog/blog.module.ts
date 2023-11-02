import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { BlogComponent } from './blog/blog.component';
import {BlogRoutingModule} from "./blog-routing.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BlogRoutingModule,
  ],
})
export class BlogModule {
}
