import { AcoountService } from './acoount.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AcoountService],
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];

  constructor(private acoountService: AcoountService) {}
  ngOnInit() {
    this.accounts = this.acoountService.accounts;
  }
}
