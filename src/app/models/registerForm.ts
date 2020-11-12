import {AccountType} from './accountType';
import {Avatar} from './avatar';
import {AccountStatus} from './account-status';

export class RegisterForm {
  constructor(
  private username: string,
  private displayname: string,
  private email: string,
  private password: string,
  private accountType: AccountType,
  private accountStatus: AccountStatus,
  private avatar: Avatar,
  private confirmPassword: string) {}
}
