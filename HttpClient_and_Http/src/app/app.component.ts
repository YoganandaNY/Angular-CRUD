import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular 15 HttpClient for Sending Http Request Example';

  posts: any;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }
}
