import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/list-users/users.component';
import { ListPostComponent } from './posts/list-posts/list-post.component';
// import { ListChannelsComponent } from './channels/list-channels/list-channels.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddChannelComponent } from './channels/add-channel/add-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditChannelComponent } from './channels/edit-channel/edit-channel.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { EditPostComponent } from './posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListPostComponent,
    // ListChannelsComponent,
    HeaderComponent,
    SidebarComponent,
    AddChannelComponent,
    EditChannelComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
