import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  OnInit,
  output,
  OutputEmitterRef,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'teyca-search',
  templateUrl: './teyca-search.component.html',
  styleUrl: './teyca-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TeycaSearchComponent),
      multi: true,
    },
  ],
})
export class TeycaSearchComponent implements OnChanges, OnInit, OnDestroy, ControlValueAccessor {
  private cdRef: ChangeDetectorRef = inject(ChangeDetectorRef);

  public placeholder: InputSignal<string> = input('Поиск');
  public text: InputSignal<string> = input('');
  public debounceTime: InputSignal<number> = input(300);

  public search: OutputEmitterRef<string | undefined> = output();

  public searchControl: FormControl<string | null> = new FormControl<string | null>('');
  private searchSubscription: Subscription | undefined;
  private _onTouched: ((value: string | null | undefined) => void) | undefined;
  private _onChange: (value: string | null | undefined) => void = () => {};

  constructor() {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.searchControl.setValue(this.text());
    }
  }

  public ngOnInit(): void {
    this.searchControl.setValue(this.text());
    this.searchSubscription = this.searchControl.valueChanges
      .pipe(
        debounceTime(this.debounceTime()),
        distinctUntilChanged(),
        map((value) => value?.trim()),
      )
      .subscribe((value) => {
        this.search.emit(value);
        this._onChange(value);
        this.cdRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }

  public writeValue(val: string): void {
    this.searchControl.setValue(val);
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public registerOnChange(fn: (v: string | null | undefined) => void): void {
    this._onChange = fn;
  }
}
