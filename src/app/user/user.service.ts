import { Injectable } from '@angular/core';
import { User } from './user'

const USERS: User[] = [
  { username: 'user1', email: 'user1@gg.com', password: 'password' },
  { username: 'user2', email: 'user2@gg.com', password: 'password' },
  { username: 'user3', email: 'user3@gg.com', password: 'password' },
  { username: 'user4', email: 'user4@gg.com', password: 'password' },
  { username: 'user5', email: 'user5@gg.com', password: 'password' }
]

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS)
  }

  getSelf(): Promise<User> {
    return Promise.resolve({
      username: 'user0',
      email: 'user0@gg.com',
      password: 'password'
    })
  }

}
