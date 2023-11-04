import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { ArticleComponent } from './article/article.component';
import {ArticleRoutingModule} from "./article-routing.module";

@NgModule({
  declarations: [
    ArticleComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ArticleRoutingModule,
  ],
})
export class ArticleModule {
}
