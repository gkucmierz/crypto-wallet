import { Component, OnInit } from '@angular/core';

import { Wallet } from 'ethers';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  mnemo = '';

  constructor() {
    const w = Wallet.createRandom();
    this.mnemonic = w.mnemonic.split(' ');
  }

  ngOnInit() {
  }

}
