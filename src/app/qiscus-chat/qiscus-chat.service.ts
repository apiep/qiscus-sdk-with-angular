import { Injectable } from '@angular/core';

import { User } from '../user/user'
import { UserService } from '../user/user.service'

declare const qiscus
const USERS: User[] = [
  { username: 'user1', email: 'user1@gg.com', password: 'password' },
  { username: 'user2', email: 'user2@gg.com', password: 'password' },
  { username: 'user3', email: 'user3@gg.com', password: 'password' },
  { username: 'user4', email: 'user4@gg.com', password: 'password' },
  { username: 'user5', email: 'user5@gg.com', password: 'password' }
]

@Injectable()
export class QiscusChatService {

  constructor(private userService: UserService) { }

  initialize() {
    qiscus.init({
      AppId: 'apiep-sandbox-stag',
      newMessagesCallback: (data) => {},
      loginSuccessCallback: (data) => {},
      loginErrorCallback: (data) => {},
      chatRoomCreatedCallback: (data) => {},
      groupRoomCreatedCallback: (data) => {},
      headerClickedCallback: (data) => {}
    })
    this.userService.getUsers()
      .then(users => {
        users.forEach(user => {
          qiscus.setUser(user.email, user.password, user.username)
        })
      })
    this.userService.getSelf()
      .then(user => qiscus.setUser(user.email, user.password, user.username))
  }

  chatTarget(user: User) {
    qiscus.UI.chatTarget(user.email)
  }

}
