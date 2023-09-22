import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient) { }

  posts: any[];
  ngOnInit(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((response) => {
      this.posts = Object.values(response);
    },
    (err) => {
      console.log(err);
    },
    () => {
      console.log('posts completed');
    })
  }
}
