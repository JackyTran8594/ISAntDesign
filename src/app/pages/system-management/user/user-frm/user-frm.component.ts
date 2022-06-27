import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { ModeModal } from 'src/app/shared/constant/constant';
import { User, UserData } from '../service/user';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.scss']
})
export class UserFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;

  @Input() title: string = '';

  @Input() id!: number;

  isVisible = false;
  isConfirmLoading = false;



  constructor(private fb: FormBuilder, private service: UserData, private notification: NzNotificationService, private modelRef: NzModalRef<UserFrmComponent>) { }

  get username() {
    return this.formValidation.get('username');
  }

  get password() {
    return this.formValidation.get('password');
  }

  get code() {
    return this.formValidation.get('code');
  }

  get fullname() {
    return this.formValidation.get('fullname');
  }

  get email() {
    return this.formValidation.get('email');
  }

  get phoneNumber() {
    return this.formValidation.get('phoneNumber');
  }

  get position() {
    return this.formValidation.get('position');
  }

  get note() {
    return this.formValidation.get('note');
  }

  ngOnInit(): void {

    console.log(this.id);

    this.formValidation = this.fb.group({
      id: ['',[]],
      username: ['',[Validators.required]],
      password: ['',[Validators.required]],
      code: ['', [Validators.required]],
      fullname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      position: ['', [Validators.required]],
      note: ['',[]],
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
          username: res.username,
          password: res.password,
          code: res.code,
          fullname: res.fullname,
          email: res.email,
          phoneNumber: res.phoneNumber,
          position: res.position,
          note: res.note
        })
      }
    });
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    let item: User = this.formValidation.value;
    if (this.mode == ModeModal.CREATE) {
      this.service.add(item).subscribe({
        next: (res: User) => {
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
        next: (res: User) => {
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
