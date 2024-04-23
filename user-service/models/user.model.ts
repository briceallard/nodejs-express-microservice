import { CreationOptional, DataTypes, Model } from '@sequelize/core';
import { Attribute, AutoIncrement, DeletedAt, NotNull, PrimaryKey, Unique } from '@sequelize/core/decorators-legacy';
import { UserAccountType, UserAttributes, UserCreateAttributes } from '../interfaces/User';
import { capitalizeFirstLetter } from '../utils';
import { IsEmail } from '@sequelize/validator.js';

export class User extends Model<UserAttributes, UserCreateAttributes> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare firstName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare lastName: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  @IsEmail
  declare email: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare password: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare accountType: UserAccountType;

  @Attribute(DataTypes.STRING)
  declare primaryPhone: string;

  @Attribute(DataTypes.STRING)
  declare secondaryPhone: string;

  @DeletedAt
  declare deletedAt: Date | null;

  getFullName(): string {
    return [capitalizeFirstLetter(this.firstName), capitalizeFirstLetter(this.lastName)].join(' ');
  }
}
