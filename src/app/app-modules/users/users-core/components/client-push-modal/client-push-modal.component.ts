import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Inject,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserTableModel } from '@users/users-core/models/users-state-model';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_DATE_FORMATS } from '@shared/models/datepicker-date-format';
import { UsersStore } from '@users/users-store/users-store';

@Component({
  selector: 'client-push-modal',
  templateUrl: './client-push-modal.component.html',
  styleUrl: './client-push-modal.component.scss',
  providers: [
    provideNativeDateAdapter(),
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ClientPushModalComponent {
  readonly usersStore = inject(UsersStore);

  public previewText: string = '';
  public today: Date = new Date();
  public selectedDate: Date | null = null;

  constructor(
    private dialogRef: MatDialogRef<ClientPushModalComponent>,
    private cdRef: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: { users: UserTableModel[]; userName: string },
  ) {}

  public closeModal(): void {
    this.dialogRef.close();
  }

  public sendPush(): void {
    this.usersStore.sendPush({
      clients: this.data.users,
      date_start: this.selectedDate ? this.selectedDate.toISOString() : null,
      text: this.previewText,
    });
    this.closeModal();
  }

  public onDateChange(event: MatDatepickerInputEvent<Date>) {
    let localDate = event.value;
    if (!localDate) return;

    if (!(localDate instanceof Date)) {
      localDate = new Date(localDate);
      if (isNaN(localDate.getTime())) return;
    }

    this.selectedDate = new Date(
      Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate()),
    );
    this.cdRef.markForCheck();
  }
}
