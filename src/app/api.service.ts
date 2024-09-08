import {Injectable, signal} from '@angular/core';

interface Post {
  at_first: boolean;
  image_url: string;
  subtitle: string;
  title: string;
  body: string
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
  posts = signal<Post[]>([{
    at_first: false, title: '', subtitle: '', image_url: '', body: '', images: [{
      title: '',
      subtitle: '',
      description: '',
      url: ''
    }]
  }])
  post = signal<Post>({
    at_first: false, title: '', subtitle: '', image_url: '', body: '', images: [{
      title: '',
      subtitle: '',
      description: '',
      url: ''
    }]
  })

  constructor() {
    this.posts.set(this.getPosts())
  }

  getPosts(): Post[] {
    return [
      {
        at_first: true,
        title: "PROJET MODERNISATION 3D",
        subtitle: "28 Mai 2024",
        image_url: "https://casedesign.fr/content/images/2024/05/salonsejour2.jpeg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: [
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salonsejour2.jpeg'
          },
          {title: '', subtitle: '', description: '', url: 'https://casedesign.fr/content/images/2024/05/sam4.jpeg'},
          {title: '', subtitle: '', description: '', url: 'https://casedesign.fr/content/images/2024/05/sma5.jpeg'},
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour-4.jpeg'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour5.jpeg'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour-6.jpeg'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour-8.jpeg'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour9.jpeg'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/05/salon-sejour-11.jpeg'
          }
        ]
      },
      {
        at_first: true,
        title: "5 différents style de déco Tendance",
        subtitle: "29 Avril 2024",
        image_url: "https://casedesign.fr/content/images/2024/05/entr-3.jpeg",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: [
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/3FCB0741-43CB-4260-8B00-6146D1814801.png'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/5657238F-7C3C-4BD1-95B2-6BD5E8F520FA.png'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/E81B3EBB-AA71-4E63-83C9-9660A4A18B75.png'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/2886C500-2C2D-4069-B9E1-55DF3AC95CEA.png'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/D2422471-71E8-49CA-8465-611B8BAD5CA3.png'
          },
          {
            title: '',
            subtitle: '',
            description: '',
            url: 'https://casedesign.fr/content/images/2024/04/E917EECF-AF52-40A3-B21D-5A245BE61B73.png'
          },
        ]
      }
    ]
  }

  getPost(id: string) {
    // @ts-ignore
    return this.post.set(this.posts().at(id))

  }
}
