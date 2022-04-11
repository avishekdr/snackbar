import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(snackBar: MatSnackBar, _notificationService: NotificationService) {
    _notificationService.notification$.subscribe(response => snackBar.open(response.message, response.action, {
      panelClass: response.panelClass
    }));
  }
}
