import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contract } from '../service/contract';

@Component({
  selector: 'app-contract-frm',
  templateUrl: './contract-frm.component.html',
  styleUrls: ['./contract-frm.component.scss']
})
export class ContractFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  // @Input() item: Contract = {};
  @Input() title: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      contractCode: ['', [Validators.required]],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      value: ['', [Validators.required]],
      paymentContent: ['', []],
      bankGuarantee: ['', []],
      customerId: ['', [Validators.required]],
      contractDate: ['', [Validators.required]],
      timeLine: ['', [Validators.required]],
      guarantee: ['', []],
      note: ['', []],
    });
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
