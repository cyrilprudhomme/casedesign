import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

interface Post {
  at_first: boolean;
  image_url: string;
  subtitle: string;
  title: string;
  body: string
  albums: Albums[]
}

interface Albums {
  title: string;
  subtitle: string;
  description: string
  images: Image[]
}

interface Image {
  title: string;
  subtitle: string;
  description: string
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  posts = signal<Post[]>([{
    at_first: false, title: '', subtitle: '', image_url: '', body: '', albums: [{
      title: '',
      subtitle: '',
      description: '',
      images: []
    }]
  }])
  post = signal<Post>({
    at_first: false, title: '', subtitle: '', image_url: '', body: '', albums: [{
      title: '',
      subtitle: '',
      description: '',
      images: []
    }]
  })

  constructor() {
    this.getPosts()
    // this.posts.set(this.getPosts())
  }

  getPosts() {
    this.http.get<Post[]>(environment.backend + '/albums').pipe(map((value, index) => this.posts.update(value1 => value1 = value))).subscribe(
    )
  }

  getPost(id: string) {
    // @ts-ignore
    return this.post.set(this.posts().at(id))

  }
}
