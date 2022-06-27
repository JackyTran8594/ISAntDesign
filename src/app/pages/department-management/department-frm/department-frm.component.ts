import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Department, DepartmentData } from '../service/department';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-department-frm',
  templateUrl: './department-frm.component.html',
  styleUrls: ['./department-frm.component.scss']
})
export class DepartmentFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: DepartmentData, private notification: NzNotificationService, private modelRef: NzModalRef<DepartmentFrmComponent>) { }

  get code() {
    return this.formValidation.get('code');
  }

  get name() {
    return this.formValidation.get('name');
  }

  get email() {
    return this.formValidation.get('email');
  }

  get address() {
    return this.formValidation.get('address');
  }

  get taxCode() {
    return this.formValidation.get('taxCode');
  }

  get fax() {
    return this.formValidation.get('fax');
  }

  get description() {
    return this.formValidation.get('description');
  }

  get phone() {
    return this.formValidation.get('phone')
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', []],
      taxCode: ['', [Validators.required, Validators.pattern("[0-9 ]{13}")]],
      fax: ['', [Validators.pattern("[0-9 ]{10}")]],
      description: ['', []],
      phone: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      createdBy: ['',[]],
      createdDate: ['',[]],
      lastModifiedBy: ['',[]],
      lastModifiedDate: ['',[]],
      status: ['',[]]
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
          code: res.code,
          name: res.name,
          description: res.description,
          note: res.note
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: Department = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: Department) => {
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
        next: (res: Department) => {
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
