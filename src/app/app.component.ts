import { Component, OnInit } from '@angular/core';
import { QiscusChatService } from './qiscus-chat/qiscus-chat.service'
import { User } from './user/user'
import { UserService } from './user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[]

  constructor(
    private qiscusChatService: QiscusChatService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.qiscusChatService.initialize()
    this.userService.getUsers()
      .then(users => this.users = users)
  }

  chatTarget(user: User) {
    this.qiscusChatService.chatTarget(user)
  }
}
