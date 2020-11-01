import {AccountType} from './accountType';
import {Avatar} from './avatar';
import {AccountStatus} from './account-status';

export interface  RegisterAccount {
  username: string;
  displayName: string;
  email: string;
  status: string;
  password: string;
  accountType: AccountType;
  accountStatus: AccountStatus;
  avatar: Avatar;
  confirmPassword: string;
}
