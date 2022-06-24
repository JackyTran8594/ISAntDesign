import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { User, UserData } from './service/user';
import { UserFrmComponent } from './user-frm/user-frm.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  isCollapse: boolean = false;

  listData: User[] = [];
  search: SearchParams = {
    txtSearch: ''
  };
  page: PageObject = {
    pageNumber: 1,
    pageSize: 10,
    totalElements: 0
  };

  modalOptions: any = {
    nzDuration: 2000
  }


  checked = false;




  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: UserData) { }

  ngOnInit() {
    // this.searchData();
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

  onAllChecked(value: boolean): void {
  }

  changePageSize(event: any): void {
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa nhóm quyền',
      nzContent: UserFrmComponent,
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
          this.notifyService.success('Thành công', 'Chỉnh sửa nhóm quyền', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(): void {
    this.modalService.create({
      nzTitle: 'Xem nhóm quyền',
      nzContent: UserFrmComponent,

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
        nzTitle: 'Thêm nhóm quyền',
        nzClassName: 'modal-custom',
        nzContent: UserFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          isCreate: true,
          title: 'Thêm nhóm quyền'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Thành công', 'Thêm mới nhóm quyền', this.modalOptions);
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
        nzTitle: 'Xóa nhóm quyền',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Thành công', 'Xóa nhóm quyền', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
