export interface IQueryParams {
  accessUuid?: string;
  offset?: number;
  datefrom?: number;
  dateto?: number;
  phone?: string;
  lock?: string;
  onlyGranted?: boolean;
  onlyDenied?: boolean;
}