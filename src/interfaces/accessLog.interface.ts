export interface IAccessLog {
  _id?: number;
  access_uuid: string;
  lock: string;
  phone: string;
  attempted_at: number;
  attempt_status: boolean;
};