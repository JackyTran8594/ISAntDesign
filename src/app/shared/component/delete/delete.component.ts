import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() title!: string;
  @Input() data!: string;



  constructor(private modalRef: NzModalRef<DeleteComponent>) { }

  ngOnInit(): void {
    this.data = "Bạn có chắc muốn xóa ????"
  }

  isVisible = false;
  isConfirmLoading = false;


  handleOk(): void {
    this.isConfirmLoading = true;
    this.modalRef.close(true);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.modalRef.close();
  }


}
