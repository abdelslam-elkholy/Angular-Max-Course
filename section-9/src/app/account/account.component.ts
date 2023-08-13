import { AcoountService } from './../acoount.service';
import { logService } from './../account.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [logService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;

  constructor(
    private logService: logService,
    private acoountService: AcoountService
  ) {}
  onSetTo(status: string) {
    this.acoountService.updateStatus(this.id, status);
    this.logService.logingStatus(status);
  }
}
