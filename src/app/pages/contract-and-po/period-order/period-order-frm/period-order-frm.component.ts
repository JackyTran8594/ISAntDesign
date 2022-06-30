import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PeriodOrder, PeriodOrderData } from '../service/period-order';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-period-order-frm',
  templateUrl: './period-order-frm.component.html',
  styleUrls: ['./period-order-frm.component.scss']
})
export class PeriodOrderFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: PeriodOrderData, private notification: NzNotificationService, private modelRef: NzModalRef<PeriodOrderFrmComponent>) { }

  get poCode() {
    return this.formValidation.get('poCode');
  }

  get poNumber() {
    return this.formValidation.get('poNumber');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get value() {
    return this.formValidation.get('value');
  }

  get paymentContent() {
    return this.formValidation.get('paymentContent');
  }

  get bankGuarantee() {
    return this.formValidation.get('bankGuarantee');
  }

  get address() {
    return this.formValidation.get('address');
  }

  get poDate() {
    return this.formValidation.get('poDate');
  }

  get note() {
    return this.formValidation.get('note');
  }

  get timeLine() {
    return this.formValidation.get('timeLine');
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      poCode: ['', [Validators.required]],
      poNumber: ['', [Validators.required]],
      bankGuarantee: ['', [Validators.required]],
      paymentContent: ['', [Validators.required]],
      poDate: ['', [Validators.required]],
      timeLine: ['', [Validators.required]],
      value: ['', []],
      note: ['',[]],
      description: ['',[]],
      address: ['',[]],
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
          poNumber: res.poNumber,
          description: res.description,
          value: res.value,
          paymentContent: res.paymentContent,
          bankGuarantee: res.bankGuarantee,
          address: res.address,
          poDate: res.poDate,
          timeLine: res.timeLine,
          note: res.note,
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: PeriodOrder = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: PeriodOrder) => {
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
        next: (res: PeriodOrder) => {
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
