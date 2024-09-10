import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'me',
    loadComponent: () => import('./me/me.page').then(m => m.MePage)
  },
  {
    path: 'offers',
    loadComponent: () => import('./offers/offers.page').then(m => m.OffersPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./post/post.page').then(m => m.PostPage)
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/posts.page').then(m => m.PostsPage)
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' }
];
