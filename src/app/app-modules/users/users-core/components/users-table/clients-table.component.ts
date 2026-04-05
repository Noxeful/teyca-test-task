import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
  ViewChild, WritableSignal,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { UsersTableMetaModel, UserTableModel } from '@users/users-core/models/users-state-model';

@Component({
  selector: 'clients-table',
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ClientsTable implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) public paginator: MatPaginator | undefined;

  public dataSource: InputSignal<UserTableModel[]> = input<UserTableModel[]>([]);
  public tableMeta: InputSignal<UsersTableMetaModel | null> = input<UsersTableMetaModel | null>({
    limit: 10,
    size: 10,
    offset: 0,
  });

  public pageEvent: OutputEmitterRef<PageEvent> = output<PageEvent>();
  public selectionChange: OutputEmitterRef<UserTableModel[]> = output<UserTableModel[]>();

  public displayedColumns: string[] = [];
  public pageSizeOptions: number[] = [10, 20, 50];
  public pageSize: number = 10;
  public currentPage: number = 0;

  public selectedUsers: WritableSignal<UserTableModel[]> = signal<UserTableModel[]>([]);

  constructor(private cdRef: ChangeDetectorRef) {
    this.displayedColumns = [
      'id',
      'device',
      'cardType',
      'cardNumber',
      'lastName',
      'firstName',
      'phone',
      'discount',
      'bonus',
      'avgCheck',
      'totalPurchases',
      'link',
      'creationDate',
    ];

    effect(() => {
      this.dataSource();
      this.selectionChange.emit(this.selectedUsers());
    });
  }

  public ngAfterViewInit(): void {
    const timeoutId: number = setTimeout(() => {
      if (this.paginator) {
        this.paginator._intl.itemsPerPageLabel = 'Элементов на странице:';
      }
      clearTimeout(timeoutId);
    });
  }

  public isSelected(user: UserTableModel): boolean {
    return this.selectedUsers().some((u: UserTableModel): boolean => u.user_id === user.user_id);
  }

  public isAllSelected(): boolean {
    const currentData: UserTableModel[] = this.dataSource();
    return currentData.length > 0 && this.selectedUsers().length === currentData.length;
  }

  public isIndeterminate(): boolean {
    const currentData: UserTableModel[] = this.dataSource();
    const selectedCount: number = this.selectedUsers().length;
    return selectedCount > 0 && selectedCount < currentData.length;
  }

  public toggleAll(checked: boolean): void {
    if (checked) {
      const currentData: UserTableModel[] = this.dataSource();
      const newSelected: UserTableModel[] = [...this.selectedUsers()];

      for (const user of currentData) {
        if (!newSelected.some((u: UserTableModel): boolean => u.user_id === user.user_id)) {
          newSelected.push(user);
        }
      }

      this.selectedUsers.set(newSelected);
    } else {
      const currentData: UserTableModel[] = this.dataSource();
      const remaining: UserTableModel[] = this.selectedUsers().filter(
        (selected: UserTableModel): boolean =>
          !currentData.some((user: UserTableModel): boolean => user.user_id === selected.user_id),
      );

      this.selectedUsers.set(remaining);
    }
    this.selectionChange.emit(this.selectedUsers());
  }

  public toggleUser(user: UserTableModel, checked: boolean): void {
    if (checked) {
      if (!this.isSelected(user)) {
        this.selectedUsers.update((prev: UserTableModel[]): UserTableModel[] => [...prev, user]);
        this.selectionChange.emit(this.selectedUsers());
      }
    } else {
      this.selectedUsers.update((prev: UserTableModel[]): UserTableModel[] =>
        prev.filter((u: UserTableModel): boolean => u.user_id !== user.user_id),
      );
      this.selectionChange.emit(this.selectedUsers());
    }
  }

  public onPage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.pageEvent.emit(event);
    this.cdRef.markForCheck();
  }

  public onLinkClick(event: MouseEvent, link: string): void {
    event.stopImmediatePropagation();
    event.stopPropagation();
    console.log(link);
  }
}
