import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  customer_name: string;
  customer_address: string;
  customer_contact: string;
  customer_age?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  customer_address?: string;
  customer_contact?: string;
  user_id?: string;
}
