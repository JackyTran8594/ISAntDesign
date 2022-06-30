import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ModeModal } from 'src/app/shared/constant/constant';
import { PageObject } from 'src/app/shared/service/pageObject';
import { SearchParams } from 'src/app/shared/service/searchParams';
import { Function, FunctionData} from './service/function';
import { FunctionFrmComponent } from './function-form/function-form.component';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})
export class FunctionComponent implements OnInit {

  isCollapse: boolean = false;
  checkedBoxAll: boolean = false;

  listData: Function[] = [];
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



  constructor(private modalService: NzModalService, private notifyService: NzNotificationService, private service: FunctionData) { }

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


  changePageSize(event: any) {
    this.searchData()
  }


  changePageNumber(event: any) {
    this.searchData()
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(item: Function): void {
    this.modalService.create({
      nzTitle: 'Chỉnh sửa function',
      nzClassName: 'modal-custom',
      nzContent: FunctionFrmComponent,
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
          this.notifyService.success('Thành công', 'Chỉnh sửa function', this.modalOptions);
        }
        this.searchData();
      },
      error: (res) => {
        console.log(res);
      }
    })

  }

  onView(item: Function): void {
    this.modalService.create({
      nzTitle: 'Xem function',
      nzClassName: 'modal-custom',
      nzContent: FunctionFrmComponent,
      nzWidth: 'modal-custom',
      nzCentered: true,
      nzMaskClosable: false,
      nzComponentParams: {
        mode: ModeModal.VIEW,
        title: 'Xem chi tiết function',
        id: item.id
      },
      nzDirection: 'ltr' // left to right
    })
  }

  onCreate(): void {
    this.modalService.create(
      {
        nzTitle: 'Thêm function',
        nzClassName: 'modal-custom',
        nzContent: FunctionFrmComponent,
        nzWidth: 'modal-custom',
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Thêm function'
        },
        nzDirection: 'ltr' // left to right
      }
    ).afterClose.subscribe
      (
        {
          next: (res) => {
            console.log(res);
            if (res) {
              this.notifyService.success('Thành công', 'Thêm mới function', this.modalOptions);
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
        nzTitle: 'Xóa function',
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
                this.notifyService.success('Thành công', 'Xóa function', this.modalOptions);
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
