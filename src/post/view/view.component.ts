import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  id!: number;
  post!: Post;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/

  constructor(
    public postservice: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit() {
    this.id = this.route.snapshot.params['postId'];
    this.postservice.find(this.id).subscribe((data: Post) => {
      this.post = data;
    });
  }
}
