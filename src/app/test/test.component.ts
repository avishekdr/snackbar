import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent {

  constructor(private _notificationService: NotificationService) { }

  open() {
    this._notificationService.notification$.next({ message: 'Success', action: 'SUCCESS', panelClass: 'success' })
    // this._notificationService.notification$.next({ message: 'Info', action: 'INFO', panelClass: 'info' })
    // this._notificationService.notification$.next({ message: 'Warning', action: 'WARNING', panelClass: 'warning' })
    // this._notificationService.notification$.next({ message: 'Error', action: 'ERROR', panelClass: 'danger' })
  }

}
