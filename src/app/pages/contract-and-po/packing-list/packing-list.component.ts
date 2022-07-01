import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ModeModal } from 'src/app/shared/constant/constant';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { PackingList, PackingListData } from './service/packing-list';
import { PackingListFrmComponent } from './packing-list-frm/packing-list-frm.component';

@Component({
  selector: 'app-packing-list',
  templateUrl: './packing-list.component.html',
  styleUrls: ['./packing-list.component.scss']
})
export class PackingListComponent implements OnInit {

  isCollapse: boolean = false;
  checkedBoxAll: boolean = false;

  listData: PackingList[] = [];
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



  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: PackingListData) { }

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

  onUpdate(item: PackingList): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa bảng kê',
      nzClassName: 'modal-custom',
      nzContent: PackingListFrmComponent,
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
          this.notifyService.success('Thành công', 'Chỉnh sửa bảng kê', this.modalOptions);
        }
        this.searchData();
      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: PackingList): void {
    this.modalService.create({
      nzTitle: 'Xem bảng kê hàng hóa',
      nzClassName: 'modal-custom',
      nzContent: PackingListFrmComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi tiết bảng kê',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Thêm bảng kê',
        nzClassName: 'modal-custom',
        nzContent: PackingListFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Thêm bảng kê'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Thành công', 'Thêm mới bảng kê', this.modalOptions);
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
        nzTitle: 'Xóa bảng kê',
        nzClassName: 'modal-custom',
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
                this.notifyService.success('Thành công', 'Xóa bảng kê', this.modalOptions);
              }
              this.searchData();
            },
            error: (err) => {
              console.log(err);
            },
            complete:()=>{

            }
          });

        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
