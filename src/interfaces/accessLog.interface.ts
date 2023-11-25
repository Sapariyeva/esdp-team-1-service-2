export interface IAccessLog {
  _id?: number;
  rule_uuid: string;
  lock: string;
  phone: string;
  attempted_at: number;
  attempt_status: boolean;
};