import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerData } from '../service/customer';

@Component({
  selector: 'app-customer-frm',
  templateUrl: './customer-frm.component.html',
  styleUrls: ['./customer-frm.component.scss']
})
export class CustomerFrmComponent implements OnInit {
  formValidation!: FormGroup;

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  @Input() title: string = '';



  constructor(private fb: FormBuilder, private service: CustomerData) { }

  ngOnInit(): void {
    this.formValidation = this.fb.group({
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', []],
      taxCode: ['', [Validators.required, Validators.pattern("[0-9 ]{13}")]],
      fax: ['', [Validators.pattern("[0-9 ]{10}")]],
      description: ['', []],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
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
