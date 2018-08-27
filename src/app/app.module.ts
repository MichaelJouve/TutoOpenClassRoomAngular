import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '', component: PostListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    NewPostComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
