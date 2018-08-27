import { Subject } from "rxjs";
import { OnInit } from "@angular/core";
import { Post } from "../models/post.model";

export class PostService implements OnInit {

  postSubject = new Subject<Post[]>();

  private posts: any[] = [
    {
      'index': 1,
      'title': 'Premier post',
      'content': 'Lorem ipsum',
      'loveIts': 2,
      'created_at': '2014-05-22'
    },
    {
      'index': 2,
      'title': 'Deuxième post',
      'content': 'Toto',
      'loveIts': 0,
      'created_at': '2014-05-23'
    },
    {
      'index': 3,
      'title': 'troisième post',
      'content': 'Lorem ipsum',
      'loveIts': -2,
      'created_at': '2014-05-24'
    },
  ]

  constructor() { }

  ngOnInit() {
    this.postSubject.next(this.posts);
  }

  emitPostSubject() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(title: string, content: string) {
    let newPost: Post = {
      'title': title,
      'content': content,
      'created_at': new Date,
      'loveIts': 0,
      'index': this.posts[(this.posts.length - 1)].index + 1
    };

    this.posts.push(newPost);
    this.emitPostSubject();
  }

  deletePost(id: number) {
    const postToDelete = this.posts.find((post) => {
      return post.index === id;
    });
    this.posts.splice(id, 1);
    this.emitPostSubject();
  }
}
