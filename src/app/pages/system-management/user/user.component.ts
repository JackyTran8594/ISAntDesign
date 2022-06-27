import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ModeModal } from 'src/app/shared/constant/constant';
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

  changePageNumber(event: any) {
    this.searchData()
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(item: User): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa thông tin người dùng',
      nzContent: UserFrmComponent,
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
          this.notifyService.success('Thành công', 'Chỉnh sửa thông tin người dùng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: User): void {
    this.modalService.create({
      nzTitle: 'Xem chi tiết người dùng',
      nzContent: UserFrmComponent,

      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi tiết người dùng',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Thêm người dùng',
        nzClassName: 'modal-custom',
        nzContent: UserFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
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
              this.notifyService.success('Thành công', 'Thêm mới người dùng', this.modalOptions);
            }

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
        nzTitle: 'Xóa người dùng',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Thành công', 'Xóa người dùng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
