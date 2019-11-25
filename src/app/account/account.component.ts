import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public list = [
    { name: 'test acc' },
    { name: 'acc 2' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
