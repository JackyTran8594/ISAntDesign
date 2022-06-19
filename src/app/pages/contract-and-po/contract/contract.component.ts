import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { ContractFrmComponent } from './contract-frm/contract-frm.component';
import { Contract, ContractData } from './service/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  isCollapse: boolean = false;

  listData: Contract[] = [];
  search: SearchParams = {
    txtSearch: ''
  };
  page: PageObject = {
    pageNumber: 1,
    pageSize: 10,
    totalElement: 0
  };

  modalOptions: any = {
    nzDuration: 2000
  }


  checked = false;




  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: ContractData) { }

  ngOnInit() {
    // this.searchData();
  }

  searchData() {
    this.service.paging(this.page.pageNumber, this.page.pageSize, this.search.txtSearch).subscribe(res => {
      console.log(res);
      this.listData = res.content;
    });
  }

  onAllChecked(value: boolean): void {
  }

  changePageSize(event: any): void {
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa hợp đồng',
      nzContent: ContractFrmComponent,
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        isUpdate: true
      },
      nzDirection: 'ltr' // left to right
    }).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Thành công', 'Chỉnh sửa hợp đồng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(): void {
    this.modalService.create({
      nzTitle: 'Xem hợp đồng',
      nzContent: ContractFrmComponent,
      
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        isView: true
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Thêm hợp đồng',
        nzClassName: 'modal-custom',
        nzContent: ContractFrmComponent,
        nzWidth:'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          isCreate: true,
          title: 'Thêm hợp đồng'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Thành công', 'Thêm mới hợp đồng', this.modalOptions);
            }

          },
          error: (res) => {
            console.log(res);
          }
        }
      )
  }

  onDelete(): void {
    this.modalService.create(
      {
        nzTitle: 'Xóa hợp đồng',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Thành công', 'Xóa hợp đồng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
