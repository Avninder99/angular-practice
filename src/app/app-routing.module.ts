import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { ListHolderComponent } from './list-holder/list-holder.component';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditComponent } from './posts/edit/edit.component';
import { PostComponent } from './posts/post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AnimatedBoxComponent } from './animated-box/animated-box.component';
import { HiddenPageComponent } from './auth/hidden-page/hidden-page.component';
import { HiddenAdminPageComponent } from './auth/hidden-admin-page/hidden-admin-page.component';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'counter', component: CounterComponent },
      { path: 'list', component: ListHolderComponent },
      { path: 'posts', 
        children: [
          { path: '', component: PostsComponent },
          { path: ':id', component: PostComponent },
          { path: ':id/edit', component: EditComponent }
        ] 
      },
      { 
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent }
        ]  
      },
      { path: 'hidden', component: HiddenPageComponent },
      { path: 'hidden/admin', component: HiddenAdminPageComponent },
      { path: 'upload', component: FileUploadComponent },
      { path: 'animation', component: AnimatedBoxComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
