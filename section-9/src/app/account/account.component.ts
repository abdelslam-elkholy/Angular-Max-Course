import { logService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [logService],
})
export class AccountComponent {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{
    id: number;
    newStatus: string;
  }>();

  constructor(private logService: logService) {}
  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    this.logService.logingStatus(status);
  }
}
