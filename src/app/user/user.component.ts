import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({required:true}) user!: {
    id: string,
    name: string,
    avatar: string
}

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}
