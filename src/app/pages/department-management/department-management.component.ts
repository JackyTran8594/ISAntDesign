import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ModeModal } from 'src/app/shared/constant/constant';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { DepartmentFrmComponent } from './department-frm/department-frm.component';
import { Department, DepartmentData } from './service/department';

@Component({
  selector: 'app-department-management',
  templateUrl: './department-management.component.html',
  styleUrls: ['./department-management.component.scss']
})
export class DepartmentManagementComponent implements OnInit {

  isCollapse: boolean = false;
  checkedBoxAll: boolean = false;

  listData: Department[] = [];
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



  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: DepartmentData) { }

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

  onUpdate(item: Department): void {
    this.modalService.create({
      nzTitle: 'Ch???nh s???a ph??ng ban',
      nzClassName: 'modal-custom',
      nzContent: DepartmentFrmComponent,
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
          this.notifyService.success('Th??nh c??ng', 'Ch???nh s???a ph??ng ban', this.modalOptions);
        }
        this.searchData();
      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: Department): void {
    this.modalService.create({
      nzTitle: 'Xem ph??ng ban',
      nzClassName: 'modal-custom',
      nzContent: DepartmentFrmComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi ti???t ph??ng',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Th??m ph??ng ban',
        nzClassName: 'modal-custom',
        nzContent: DepartmentFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Th??m ph??ng ban'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Th??nh c??ng', 'Th??m m???i ph??ng ban', this.modalOptions);
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
        nzTitle: 'X??a ph??ng ban',
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
                this.notifyService.success('Th??nh c??ng', 'X??a ph??ng ban', this.modalOptions);
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
