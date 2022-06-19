import { Component, Input, OnInit } from '@angular/core';
import { Contract } from '../service/contract';

@Component({
  selector: 'app-contract-frm',
  templateUrl: './contract-frm.component.html',
  styleUrls: ['./contract-frm.component.scss']
})
export class ContractFrmComponent implements OnInit {

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  @Input() item: Contract = {};
  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isVisible = false;
  isConfirmLoading = false;


  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }


}
