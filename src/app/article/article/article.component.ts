import {Component} from '@angular/core';
import {Article} from "../../blog/blog/blog.component";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  article$?: Observable<Article>;

  constructor(private http: HttpClient, route: ActivatedRoute) {
    window.scrollTo(0, 0);
    const articleId = route.snapshot.params['id'];
    this.article$ = this.http.get<Article>(`assets/articles/article_${articleId}.json`)
  }
}
