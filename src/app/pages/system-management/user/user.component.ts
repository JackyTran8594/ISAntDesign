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
  checkedBoxAll: boolean = false;

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
      nzTitle: 'Ch???nh s???a th??ng tin ng?????i d??ng',
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
          this.notifyService.success('Th??nh c??ng', 'Ch???nh s???a th??ng tin ng?????i d??ng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: User): void {
    this.modalService.create({
      nzTitle: 'Xem chi ti???t ng?????i d??ng',
      nzContent: UserFrmComponent,

      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi ti???t ng?????i d??ng',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Th??m ng?????i d??ng',
        nzClassName: 'modal-custom',
        nzContent: UserFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Th??m nh??m quy???n'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Th??nh c??ng', 'Th??m m???i ng?????i d??ng', this.modalOptions);
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
        nzTitle: 'X??a ng?????i d??ng',
        nzContent: DeleteComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.notifyService.success('Th??nh c??ng', 'X??a ng?????i d??ng', this.modalOptions);
        }

      },
      error: (res) => {
        console.log(res);
      }
    })
  };

}
