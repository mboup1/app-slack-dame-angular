import { User } from './interfaces/user';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'channels', component: ChannelsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'channels/:id', component: PostsComponent },

  // { path: '**', redirectTo: 'channels' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
