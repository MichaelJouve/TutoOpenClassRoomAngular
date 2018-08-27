import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {

  @Input() index: number;
  @Input() postt: AppComponent;
  @Input() title: String;
  @Input() content: String;
  @Input() loveIts: number;
  @Input() created_at: Date;


  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  unLike() {
    this.loveIts--;
  }

  like() {
    this.loveIts++;
  }

  deletePost() {
    this.postService.deletePost(this.index);
  }
}
