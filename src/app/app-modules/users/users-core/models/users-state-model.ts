export interface UsersStateModel {
  users: UserTableModel[];
  tableMeta: UsersTableMetaModel | null;
  error: string | null;
  loading: boolean;
}

export interface UsersRequestModel {
  search: string | number | undefined;
  limit: string | number;
  offset: string | number;
}

export interface UsersTableMetaModel {
  limit: string | number;
  offset: string | number;
  size: string | number;
}

export interface UserTableModel {
  user_id: number;
  template: string;
  fio: string;
  first_name: string;
  last_name: string;
  pat_name: any;
  phone: string;
  city: any;
  sms_verify: any;
  email: any;
  birthday: any;
  gender: any;
  car_number: any;
  discount: any;
  bonus: number;
  inactive_bonus: any;
  bonus_last: any;
  write_off_last: any;
  loyalty_level: any;
  summ: any;
  summ_all: any;
  summ_last: any;
  visits: any;
  visits_all: any;
  date_last: any;
  barcode: string;
  key1: any;
  key2: any;
  key3: any;
  key4: any;
  key5: any;
  key6: any;
  trg_action_type: any;
  trg_action_value: any;
  trg_date_type: any;
  trg_date_value: any;
  delivery_form: any;
  o_s: string;
  link: string;
  referal: any;
  backgroundColor: any;
  created_at: string;
  H1: any;
  H2: any;
  H3: any;
  S1: any;
  S2: any;
  S3: any;
  B1: string;
  B2: any;
  B3: any;
  B4: any;
  B5: any;
  B6: any;
  utm_source: any;
  utm_medium: any;
  utm_campaign: any;
  utm_content: any;
  utm_term: any;
  telegram: boolean;
  confirm_code: any;
}
