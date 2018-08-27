import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubjectSubscription: Subscription;



  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubjectSubscription = this.postService.postSubject.subscribe(
      (posts) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy(){
    this.postSubjectSubscription.unsubscribe();
  }
}
