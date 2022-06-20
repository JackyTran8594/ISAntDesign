import { Component, Input, OnInit } from '@angular/core';
import { Role, RoleData } from '../service/role';

@Component({
  selector: 'app-role-frm',
  templateUrl: './role-frm.component.html',
  styleUrls: ['./role-frm.component.scss']
})
export class RoleFrmComponent implements OnInit {

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  @Input() item: Role = {};
  @Input() title: string = '';

  constructor(private service: RoleData) { }

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

