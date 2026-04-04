import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  InputSignal, output, OutputEmitterRef,
  ViewChild,
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

  public displayedColumns: string[] = [];
  public pageSizeOptions: number[] = [10, 20, 50];
  public pageSize: number = 10;
  public currentPage: number = 0;

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
  }

  public ngAfterViewInit(): void {
    const timeoutId: number = setTimeout(() => {
      if (this.paginator) {
        this.paginator._intl.itemsPerPageLabel = 'Элементов на странице:';
      }
      clearTimeout(timeoutId);
    });
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
