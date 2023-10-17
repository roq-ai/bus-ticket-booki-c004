import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusOperatorInterface {
  id?: string;
  operator_name: string;
  operator_address: string;
  operator_contact: string;
  bus_count?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BusOperatorGetQueryInterface extends GetQueryInterface {
  id?: string;
  operator_name?: string;
  operator_address?: string;
  operator_contact?: string;
  user_id?: string;
}
