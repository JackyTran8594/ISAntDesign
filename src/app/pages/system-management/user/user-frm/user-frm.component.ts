import { Component, Input, OnInit } from '@angular/core';
import { User, UserData } from '../service/user';

@Component({
  selector: 'app-user-frm',
  templateUrl: './user-frm.component.html',
  styleUrls: ['./user-frm.component.scss']
})
export class UserFrmComponent implements OnInit {

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  @Input() item: User = {};
  @Input() title: string = '';

  constructor(private service: UserData) { }

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
