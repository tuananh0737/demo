import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisComponent } from './regis/regis.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookComponent } from './book/book.component';
import { ListbookComponent } from './listbook/listbook.component';

const routes: Routes = [
  {
    path: 'regis',
    component: RegisComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'bookmark',
    component: BookmarkComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'listbook',
    component: ListbookComponent,
  },
  {
    path: '',
    redirectTo: 'listbook',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
