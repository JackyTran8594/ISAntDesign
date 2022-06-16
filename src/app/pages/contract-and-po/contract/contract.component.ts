import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { ItemData } from '../../welcome/service/welcome';
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
    this.searchData();
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
      nzTitle: 'Edit Item',
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
        this.notifyService.success('Success', 'Success', this.modalOptions);
        if (res) {
          this.notifyService.success('Success', 'Success', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(): void {
    this.modalService.create({
      nzTitle: 'View Item',
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
        nzTitle: 'Add Item',
        nzContent: ContractFrmComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          isCreate: true,
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Success', 'Success', this.modalOptions);
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
        nzTitle: 'Delete Item',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Success', 'Success', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
