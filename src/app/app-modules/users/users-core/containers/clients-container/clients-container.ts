import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { UsersStore } from '@users/users-store/users-store';
import { UsersRequestModel } from '@users/users-core/models/users-state-model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'clients-container',
  standalone: false,
  templateUrl: './clients-container.html',
  styleUrl: './clients-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsContainer implements OnInit {
  readonly usersStore = inject(UsersStore);
  private cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public usersRequest: UsersRequestModel;

  constructor() {
    this.usersRequest = {
      search: '',
      limit: '10',
      offset: '0',
    };
  }

  public ngOnInit(): void {
    this.getUsers(this.usersRequest)
  }

  public onSearch(value: string | undefined): void {
    this.usersRequest = { ...this.usersRequest, search: value ? `phone=${value}` : '' };
    this.getUsers({ ...this.usersRequest, search: value ? `phone=${value}` : '' });
    this.cdRef.markForCheck();
  }

  public onPageEvent(event: PageEvent): void {
    this.usersRequest = {...this.usersRequest, offset: event.pageIndex, limit: event.pageSize};
    this.getUsers({ ...this.usersRequest, offset: event.pageIndex, limit: event.pageSize });
    this.cdRef.markForCheck();
  }

  public getUsers(request: UsersRequestModel): void {
    this.usersStore.getUsers(request);
  };
}
