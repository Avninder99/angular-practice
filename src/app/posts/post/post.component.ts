import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit{

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  
  @Input() data: {
    title: string,
    body: string,
    id: number,
    userId: number
  } = {
    title: '',
    body: '',
    id: null,
    userId: null
  };

  ngOnInit() {
    if(this.activatedRoute.snapshot.params?.id){
      const id = this.activatedRoute.snapshot.params?.id;
      this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe(
        (
          res: {
            title: string,
            body: string,
            id: number,
            userId: number
          }
        ) => {
          console.log(res);
          this.data = res;
        },
        (err) => {
          console.log(err);
        },
        () => {
          console.log('completed');
        }
      )
    }
  }


  editPost = () => {
    this.http.put(
      `https://jsonplaceholder.typicode.com/posts/${this.data.id}`,
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    ).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('completed');
      }
    )
  }

  deletePost = () => {
    this.http.delete(`https://jsonplaceholder.typicode.com/posts/${this.data.id}`).subscribe((res) => {
      console.log(res);
    },
    (err) => {
      console.log(err);
    },
    () => {
      console.log('completed');
    })
  }

}
