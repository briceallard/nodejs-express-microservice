import type { PartialBy } from '@sequelize/utils';

export enum UserAccountType {
  COACH = 'coach',
  MANAGER = 'manager',
  PARENT = 'parent',
  PLAYER = 'player',
  REFEREE = 'referee',
  ADMIN = 'admin',
}

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: UserAccountType;
  primaryPhone: string;
  secondaryPhone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type UserCreateAttributes = PartialBy<
  UserAttributes,
  'id' | 'firstName' | 'lastName' | 'primaryPhone' | 'secondaryPhone' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
