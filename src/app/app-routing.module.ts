import { User } from './interfaces/user';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { EditChannelComponent } from './edit-channel/edit-channel.component';

const routes: Routes = [
  { path: 'channels', component: ChannelsComponent },
  { path: 'addChannel', component: AddChannelComponent },
  { path: 'updateChannel', component: EditChannelComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'posts', component: PostComponent },
  { path: 'channels/:id', component: PostComponent },

  // { path: '**', redirectTo: 'channels' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
