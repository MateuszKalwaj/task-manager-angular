import {Component, computed, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const randomUser = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUser])
  imagePath = computed(()=> 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomUser = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomUser]);
  }
}
