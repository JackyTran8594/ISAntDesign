import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ModeModal } from 'src/app/shared/constant/constant';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { CustomerFrmComponent } from './customer-frm/customer-frm.component';
import { Customer, CustomerData } from './service/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isCollapse: boolean = false;
  checkedBoxAll: boolean = false;

  listData: Customer[] = [];
  search: SearchParams = {
    txtSearch: ''
  };

  // pageNumber = 1;
  // pageSize = 10;
  // totalElement = 0;

  page: PageObject = {
    pageNumber: 1,
    pageSize: 10,
    totalElements: 0
  };

  modalOptions: any = {
    nzDuration: 2000
  }



  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: CustomerData) { }

  ngOnInit() {
    // console.log(this.page);
    this.searchData();
  }

  searchData() {
    this.service.paging(this.page.pageNumber, this.page.pageSize, this.search.txtSearch).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.listData = res.content;
          this.page.totalElements = res.totalElements;
          this.page.totalPages = res.totalPages;
          // console.log(this.page);
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log('search done');
        }
      }
    );
  }



  // checkbox
  checkedAll(event: any) {
    console.log(event);
    this.listData.forEach((item) => {
      item.isChecked = event;
      // console.log(item.isChecked);
    });
  }

  isChecked(event: any, index: number) {
    this.listData[index].isChecked = event;
    console.log(this.listData[index].isChecked);
  }
  // end checkbox


  changePageSize(event: any) {
    this.searchData()
  }


  changePageNumber(event: any) {
    this.searchData()
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(item: Customer): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa khách hàng',
      nzClassName: 'modal-custom',
      nzContent: CustomerFrmComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.UPDATE,
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    }).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Thành công', 'Chỉnh sửa khách hàng', this.modalOptions);
        }
        this.searchData();
      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: Customer): void {
    this.modalService.create({
      nzTitle: 'Xem khách hàng',
      nzClassName: 'modal-custom',
      nzContent: CustomerFrmComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi tiết khách',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Thêm khách hàng',
        nzClassName: 'modal-custom',
        nzContent: CustomerFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Thêm khách hàng'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Thành công', 'Thêm mới khách hàng', this.modalOptions);
            }
            this.searchData();
          },
          error: (res) => {
            console.log(res);
          }
        }
      )
  }

  onDelete(id: number): void {
    this.modalService.create(
      {
        nzTitle: 'Xóa khách hàng',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.service.delete(id).subscribe({
            next: (res) => {
              if(res) {
                this.notifyService.success('Thành công', 'Xóa khách hàng', this.modalOptions);
              }
            },
            error: (err) => {
              console.log(err);
            },
            complete:()=>{

            }
          });
          this.searchData();
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
