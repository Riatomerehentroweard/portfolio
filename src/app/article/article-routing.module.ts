import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleComponent} from "./article/article.component";

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: ArticleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
