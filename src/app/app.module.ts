import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostComponent } from './post/post.component';
import { ChannelsComponent } from './channels/channels.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddChannelComponent } from './add-channel/add-channel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditChannelComponent } from './edit-channel/edit-channel.component';
import { AddPostComponent } from './add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostComponent,
    ChannelsComponent,
    HeaderComponent,
    SidebarComponent,
    AddChannelComponent,
    EditChannelComponent,
    AddPostComponent
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
