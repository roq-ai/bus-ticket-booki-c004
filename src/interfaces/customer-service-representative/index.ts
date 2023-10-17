import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerServiceRepresentativeInterface {
  id?: string;
  representative_name: string;
  representative_address: string;
  representative_contact: string;
  representative_age?: number;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerServiceRepresentativeGetQueryInterface extends GetQueryInterface {
  id?: string;
  representative_name?: string;
  representative_address?: string;
  representative_contact?: string;
  user_id?: string;
}
