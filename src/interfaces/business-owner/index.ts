import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BusinessOwnerInterface {
  id?: string;
  owner_name: string;
  owner_address: string;
  owner_contact: string;
  business_type?: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface BusinessOwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  owner_name?: string;
  owner_address?: string;
  owner_contact?: string;
  business_type?: string;
  user_id?: string;
}
