import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { counterReducer } from './store/counter.reducer';
import { EntriesReducer } from './store/list.reducer';
import { authReducer } from './store/auth.reducer';

import { AppComponent } from './app.component';
import { ListHolderComponent } from './list-holder/list-holder.component';
import { EntryComponent } from './list-holder/entry/entry.component';
import { CounterComponent } from './counter/counter.component';
import { PostsComponent } from './posts/posts.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { EditComponent } from './posts/edit/edit.component';
import { PostComponent } from './posts/post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CookieService } from 'ngx-cookie-service';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AnimatedBoxComponent } from './animated-box/animated-box.component';
import { HiddenPageComponent } from './auth/hidden-page/hidden-page.component';
import { HiddenAdminPageComponent } from './auth/hidden-admin-page/hidden-admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHolderComponent,
    EntryComponent,
    CounterComponent,
    PostsComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    PostComponent,
    NotFoundComponent,
    FileUploadComponent,
    AnimatedBoxComponent,
    HiddenPageComponent,
    HiddenAdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      Entries: EntriesReducer,
      auth: authReducer
    }, {}),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
