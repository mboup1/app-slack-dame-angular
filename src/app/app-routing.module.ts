import { User } from './interfaces/user';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ListChannelsComponent } from './channels/list-channels/list-channels.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/list-users/users.component';
import { ListPostComponent } from './posts/list-posts/list-post.component';
import { AddChannelComponent } from './channels/add-channel/add-channel.component';
import { EditChannelComponent } from './channels/edit-channel/edit-channel.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

const routes: Routes = [
  // { path: 'channels', component: ChannelsComponent },
  { path: 'addChannel', component: AddChannelComponent },
  { path: 'updateChannel', component: EditChannelComponent },
  { path: 'addPost', component: AddPostComponent },
  { path: 'editPost', component: EditPostComponent },
  { path: 'header', component: HeaderComponent },
  // { path: 'posts', component: ListPostComponent },
  { path: 'channels/:id', component: ListPostComponent },

  { path: '**', redirectTo: 'channels/1' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
