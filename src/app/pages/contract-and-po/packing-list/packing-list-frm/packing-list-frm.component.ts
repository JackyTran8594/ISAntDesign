import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PackingList, PackingListData } from '../service/packing-list';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-packing-list-frm',
  templateUrl: './packing-list-frm.component.html',
  styleUrls: ['./packing-list-frm.component.scss']
})
export class PackingListFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: PackingListData, private notification: NzNotificationService, private modelRef: NzModalRef<PackingListFrmComponent>) { }

  get plCode() {
    return this.formValidation.get('plCode');
  }

  get dpCode() {
    return this.formValidation.get('dpCode');
  }

  get address() {
    return this.formValidation.get('address');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get plDate() {
    return this.formValidation.get('plDate');
  }

  get note() {
    return this.formValidation.get('note');
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      plCode: ['', [Validators.required]],
      dpCode: ['', [Validators.required]],
      description: ['', []],
      address: ['', []],
      plDate: ['',[]],
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
          plCode: res.plCode,
          dpCode: res.dpCode,
          description: res.description,
          address: res.address,
          plDate: res.plDate,
          note: res.note,
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: PackingList = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: PackingList) => {
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
        next: (res: PackingList) => {
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
