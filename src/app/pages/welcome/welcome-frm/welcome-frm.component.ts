import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-frm',
  templateUrl: './welcome-frm.component.html',
  styleUrls: ['./welcome-frm.component.scss']
})
export class WelcomeFrmComponent implements OnInit {

  @Input() isUpdate: boolean = false;
  @Input() isView: boolean = false;
  @Input() isCreate: boolean = false;

  constructor() { }

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
