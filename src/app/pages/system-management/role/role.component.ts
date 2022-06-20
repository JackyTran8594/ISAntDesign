import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { RoleFrmComponent } from './role-frm/role-frm.component';
import { Role, RoleData } from './service/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  isCollapse: boolean = false;

  listData: Role[] = [];
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




  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: RoleData) { }

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
      nzTitle: 'Chỉnh sửa nhóm quyền',
      nzContent: RoleFrmComponent,
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
      nzContent: RoleFrmComponent,
      
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
        nzContent: RoleFrmComponent,
        nzWidth:'modal-custom',
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
