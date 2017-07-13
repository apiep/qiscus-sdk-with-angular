import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { QiscusChatService } from './qiscus-chat/qiscus-chat.service'
import { UserService } from './user/user.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    QiscusChatService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
