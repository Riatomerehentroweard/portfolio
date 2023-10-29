import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./about/about.component";

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class AboutRoutingModule {
}
