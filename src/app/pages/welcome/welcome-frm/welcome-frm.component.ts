import { Component, Input, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-welcome-frm',
  templateUrl: './welcome-frm.component.html',
  styleUrls: ['./welcome-frm.component.scss']
})
export class WelcomeFrmComponent implements OnInit {

  formValidation!: FormGroup;

  @Input() mode!: string;
  @Input() title: string = '';
  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  constructor(private fb: FormBuilder, private notification: NzNotificationService, private modelRef: NzModalRef<WelcomeFrmComponent>) { }

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
