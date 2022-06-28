import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzTrMeasureComponent } from 'ng-zorro-antd/table';
import { DeleteComponent } from 'src/app/shared/component/delete/delete.component';
import { ItemData } from './service/welcome';
import { WelcomeFrmComponent } from './welcome-frm/welcome-frm.component';
import { ModeModal } from 'src/app/shared/constant/constant';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isCollapse: boolean = false;

  modalOptions: any = {
    nzDuration: 2000
  }


  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      }
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
        this.refreshCheckedStatus();
      }
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
        this.refreshCheckedStatus();
      }
    }
  ];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly ItemData[] = [];
  listOfData: readonly ItemData[] = [];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }

  constructor(private modalService: NzModalService, private notifyService: NzNotificationService) { }

  ngOnInit() {
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: 32,
      address: `London, Park Lane no. ${index}`
    }));
  }

  collapse() {
    this.isCollapse = !this.isCollapse;
  }

  onUpdate(): void {
    this.modalService.create({
      nzTitle: 'Edit Item',
      nzContent: WelcomeFrmComponent,
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
      nzContent: WelcomeFrmComponent,
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
        nzContent: WelcomeFrmComponent,
        nzCentered: true,
        nzMaskClosable: false,
        nzComponentParams: {
          mode: ModeModal.CREATE,
          title: 'Thêm welcome'
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
  }

}
