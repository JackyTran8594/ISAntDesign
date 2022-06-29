import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DeliveryPackage, DeliveryPackageData } from '../service/delivery-package';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-delivery-package-frm',
  templateUrl: './delivery-package-frm.component.html',
  styleUrls: ['./delivery-package-frm.component.scss']
})
export class DeliveryPackageFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: DeliveryPackageData, private notification: NzNotificationService, private modelRef: NzModalRef<DeliveryPackageFrmComponent>) { }

  get poCode() {
    return this.formValidation.get('poCode');
  }

  get contractCode() {
    return this.formValidation.get('contractCode');
  }

  get dpCode() {
    return this.formValidation.get('dpCode');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get value() {
    return this.formValidation.get('value');
  }

  get address() {
    return this.formValidation.get('address');
  }

  get provinceId() {
    return this.formValidation.get('provinceId');
  }

  get dpDate() {
    return this.formValidation.get('dpDate');
  }

  get note() {
    return this.formValidation.get('note');
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      poCode: ['', [Validators.required]],
      contractCode: ['', [Validators.required]],
      dpCode: ['', [Validators.required]],
      description: ['', []],
      value: ['', []],
      address: ['', []],
      provinceId: ['', []],
      dpDate: ['',[]],
      note: ['',[]]
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
          contractCode: res.contractCode,
          dpCode: res.dpCode,
          description: res.description,
          value: res.value,
          address: res.address,
          provinceId: res.provinceId,
          dpDate: res.dpDate,
          note: res.note,
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: DeliveryPackage = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: DeliveryPackage) => {
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
        next: (res: DeliveryPackage) => {
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
