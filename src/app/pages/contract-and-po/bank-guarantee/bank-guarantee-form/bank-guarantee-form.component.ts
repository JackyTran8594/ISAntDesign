import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankGuarantee, BankGuaranteeData } from '../service/bank-guarantee';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-bank-guarantee-form',
  templateUrl: './bank-guarantee-form.component.html',
  styleUrls: ['./bank-guarantee-form.component.scss']
})
export class BankGuaranteeFormComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: BankGuaranteeData, private notification: NzNotificationService, private modelRef: NzModalRef<BankGuaranteeFormComponent>) { }

  get poCode() {
    return this.formValidation.get('poCode');
  }

  get contactCode() {
    return this.formValidation.get('contactCode');
  }

  get value() {
    return this.formValidation.get('value');
  }

  get note() {
    return this.formValidation.get('note');
  }

  get contract_id() {
    return this.formValidation.get('contract_id');
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      poCode: ['', [Validators.required]],
      contactCode: ['', [Validators.required]],
      value: ['', []],
      note: ['',[]],
      contract_id: ['',[]],
    });

    if (this.mode != ModeModal.CREATE) {
      if (this.id) {
        this.getById(this.id);
      }
      //  else {
      //   setTimeout(() => {
      //     this.getById(this.id)
      //   }, 1000);
      // }
    }

  }


  getById(id: number) {
    this.service.getById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.formValidation.setValue({
          id: res.id,
          poCode: res.poCode,
          contactCode: res.contactCode,
          value: res.value,
          note: res.note,
          contract_id: res.contract_id,
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: BankGuarantee = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: BankGuarantee) => {
          console.log(res);
          if (res) {
            this.isVisible = false;
            this.isConfirmLoading = false;
            this.modelRef.close(res);
          }
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('done');
        }
      });
    } else if (this.mode == ModeModal.UPDATE) {
      this.service.update(item).subscribe({
        next: (res: BankGuarantee) => {
          console.log(res);
          if (res) {
            this.isVisible = false;
            this.isConfirmLoading = false;
            this.modelRef.close(res);
          }
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('done');
        }
      });
    }


  }

  handleCancel(): void {
    this.isVisible = false;
    this.modelRef.close();
  }

}
