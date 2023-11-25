export interface IQueryParams {
  offset?: number;
  datefrom?: number;
  dateto?: number;
  phone?: string;
  lock?: string;
  onlyGranted?: boolean;
  onlyDenied?: boolean;
}