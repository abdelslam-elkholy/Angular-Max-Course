import { AcoountService } from './../acoount.service';
import { logService } from './../account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [logService],
})
export class NewAccountComponent {
  constructor(
    private logService: logService,
    private acoountService: AcoountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.logService.logingStatus(accountStatus);
    this.acoountService.addAccount(accountName, accountStatus);
  }
}
