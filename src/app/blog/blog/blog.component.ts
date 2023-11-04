import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

export interface ArticleParagraph {
  title?: string;
  text?: string;
  image?: string;
  image_description?: string;
}

export interface ArticleContent {
  title: string;
  bg_img: string;
  paragraphs: ArticleParagraph[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  content: ArticleContent;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  articles$ = this.http.get<Article[]>(`assets/all_articles.json`);

  constructor(private http: HttpClient, private router: Router) {}

  navigateToArticle(articleId: string) {
    void this.router.navigate([`article/${articleId}`]);
  }
}
