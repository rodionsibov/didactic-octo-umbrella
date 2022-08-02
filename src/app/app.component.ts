import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isTrue: boolean = false;

  changeTheme() {
    this.isTrue = !this.isTrue;
  }
}
