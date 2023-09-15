/* eslint-disable prettier/prettier */
//External
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsEnum,
  Length,
  Max,
  Min,
  IsInt,
} from 'class-validator';
//Enums
import { Status } from '../enums/status';
import { RatePlansProperties } from '../enums/class-properties';
//Const-vars
const NAME_VALUE_FOR_NAME = RatePlansProperties.NAME_VALUE_FOR_NAME;
const NAME_VALUE_FOR_DESCRIPTION = RatePlansProperties.NAME_VALUE_FOR_DESCRIPTION;
const NAME_VALUE_FOR_VERSION_ID = RatePlansProperties.NAME_VALUE_FOR_VERSION_ID;
const NAME_VALUE_FOR_VERSION_PLAN = RatePlansProperties.NAME_VALUE_FOR_VERSION_PLAN;
const NAME_VALUE_FOR_STATUS = RatePlansProperties.NAME_VALUE_FOR_STATUS;
const NAME_VALUE_FOR_TYPE_PLAN = RatePlansProperties.NAME_VALUE_FOR_TYPE_PLAN;
const NAME_VALUE_FOR_SUSCRIPTION_CHARGE = RatePlansProperties.NAME_VALUE_FOR_SUSCRIPTION_CHARGE;
const NAME_VALUE_FOR_NUMBER_OF_TIERS = RatePlansProperties.NAME_VALUE_FOR_NUMBER_OF_TIERS;
const DECIMAL_SCALE_VALUE = Number(RatePlansProperties.DECIMAL_SCALE_VALUE);
const MIN_LENGTH_VALUE_FOR_NAME = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_NAME);
const MAX_LENGTH_VALUE_FOR_NAME = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_NAME);
const MIN_LENGTH_VALUE_FOR_DESCRIPTION = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_DESCRIPTION);
const MAX_LENGTH_VALUE_FOR_DESCRIPTION = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_DESCRIPTION);
const MIN_VALUE_FOR_VERSION_ID = Number(RatePlansProperties.MIN_VALUE_FOR_VERSION_ID);
const MAX_VALUE_FOR_VERSION_ID = Number(RatePlansProperties.MAX_VALUE_FOR_VERSION_ID);
const MIN_LENGTH_VALUE_FOR_VERSION_PLAN = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_VERSION_PLAN);
const MAX_LENGTH_VALUE_FOR_VERSION_PLAN = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_VERSION_PLAN);
const MIN_LENGTH_VALUE_FOR_TYPE_PLAN = Number(RatePlansProperties.MIN_LENGTH_VALUE_FOR_TYPE_PLAN);
const MAX_LENGTH_VALUE_FOR_TYPE_PLAN = Number(RatePlansProperties.MAX_LENGTH_VALUE_FOR_TYPE_PLAN);
const MIN_VALUE_FOR_SUSCRIPTION_CHARGE = Number(RatePlansProperties.MIN_VALUE_FOR_SUSCRIPTION_CHARGE);
const MAX_VALUE_FOR_SUSCRIPTION_CHARGE = Number(RatePlansProperties.MAX_VALUE_FOR_SUSCRIPTION_CHARGE);
const MIN_VALUE_FOR_NUMBER_OF_TIERS = Number(RatePlansProperties.MIN_VALUE_FOR_NUMBER_OF_TIERS);
const MAX_VALUE_FOR_NUMBER_OF_TIERS = Number(RatePlansProperties.MAX_VALUE_FOR_NUMBER_OF_TIERS);

@InputType()
@ApiTags('RatePlansDTO')
export class RatePlansDTO {
  /**
   * @description name of the rate plan
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_NAME} cannot be empty` })
  @IsString({ message: `The ${NAME_VALUE_FOR_NAME} must be of type string` })
  @Length(MIN_LENGTH_VALUE_FOR_NAME, MAX_LENGTH_VALUE_FOR_NAME, {
    message: `The value of the ${NAME_VALUE_FOR_NAME} must be between ${MIN_LENGTH_VALUE_FOR_NAME} and ${MAX_LENGTH_VALUE_FOR_NAME} characters`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_NAME}`,
    description:
      `Descriptive rate plan ${NAME_VALUE_FOR_NAME}. Names are unique within an operator.`,
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_NAME,
    maxLength: MAX_LENGTH_VALUE_FOR_NAME,
    example: 'plan for individual monthly subscriptions',
  })
  name: string;

  /**
   * @description Description for a plan.
   */
  @Field()
  @IsNotEmpty({ message: `The ${NAME_VALUE_FOR_DESCRIPTION} cannot be empty` })
  @IsString({ message: `The ${NAME_VALUE_FOR_DESCRIPTION} must be of type string` })
  @Length(MIN_LENGTH_VALUE_FOR_DESCRIPTION, MAX_LENGTH_VALUE_FOR_DESCRIPTION, {
    message: `The value of the ${NAME_VALUE_FOR_DESCRIPTION} must be between ${MIN_LENGTH_VALUE_FOR_DESCRIPTION} and ${MAX_LENGTH_VALUE_FOR_DESCRIPTION} characters`,
  })
  @ApiProperty({
    name: `${NAME_VALUE_FOR_DESCRIPTION}`,
    description: `${NAME_VALUE_FOR_DESCRIPTION} for a plan.`,
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_DESCRIPTION,
    maxLength: MAX_LENGTH_VALUE_FOR_DESCRIPTION,
    example: 'plan for individual monthly subscriptions',
  })
  description: string;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Field()
  @IsNotEmpty({ message: 'The version id cannot be empty' })
  @IsInt({ message: 'The version id must be of type integer' })
  @Min(MIN_VALUE_FOR_VERSION_ID, {
    message: `the value of the version id must be greater than ${MIN_VALUE_FOR_VERSION_ID}`,
  })
  @Max(MAX_VALUE_FOR_VERSION_ID, {
    message: `the value of the version id must be less than ${MAX_VALUE_FOR_VERSION_ID}`,
  })
  @ApiProperty({
    name: 'versionId',
    description:
      'Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier.',
    type: 'int',
    example: 4346666555,
  })
  versionId: number;

  /**
   * @description Uniquely identifies a particular version of a rate plan in relation to every other rate plan version in the system, including different versions of the same rate plan and different versions of other rate plans. Because a rate plan may have multiple active versions at any one time, the versionId, not the id, is the only truly unique rate plan identifier..
   */
  @Field()
  @IsNotEmpty({ message: 'The version plan cannot be empty' })
  @IsString({ message: 'The version plan must be of type string' })
  @Length(
    MIN_LENGTH_VALUE_FOR_VERSION_PLAN,
    MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
    {
      message: `The value of the version plan must be between ${MIN_LENGTH_VALUE_FOR_VERSION_PLAN} and ${MAX_LENGTH_VALUE_FOR_VERSION_PLAN} characters`,
    },
  )
  @ApiProperty({
    name: 'versionPlan',
    description:
      'Specifies the version of the current rate plan. Two different versions of the same rate plan may coexist if there are billable devices assigned to each version (for prepaid plans only)',
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_VERSION_PLAN,
    maxLength: MAX_LENGTH_VALUE_FOR_VERSION_PLAN,
    example: '1.1',
  })
  versionPlan: string;

  /**
   * @description enum propertie. This enum returns only published rate plans with the Published status value. Published rate plans are approved and available for use by devices.
   */
  @Field()
  @IsEnum(Status)
  @IsNotEmpty({ message: 'The status of a device cannot be empty' })
  @ApiProperty({
    name: 'status',
    description: 'status for a device',
    type: 'enum',
    example: 'ACTIVE (only enum: ACTIVE, INACTIVE or PUBLISHED)',
  })
  status: Status;

  /**
   * @description The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).
   */
  @Field()
  @IsNotEmpty({ message: 'The type plan cannot be empty' })
  @IsString({ message: 'The type plan must be of type string' })
  @Length(MIN_LENGTH_VALUE_FOR_TYPE_PLAN, MAX_LENGTH_VALUE_FOR_TYPE_PLAN, {
    message: `The value of the type plan must be between ${MIN_LENGTH_VALUE_FOR_TYPE_PLAN} and ${MAX_LENGTH_VALUE_FOR_TYPE_PLAN} characters`,
  })
  @ApiProperty({
    name: 'type_plan',
    description:
      'The type refers to the payment method (monthly vs. prepaid) and included usage type (individual vs. pooled vs. event).',
    type: 'string',
    minLength: MIN_LENGTH_VALUE_FOR_TYPE_PLAN,
    maxLength: MAX_LENGTH_VALUE_FOR_TYPE_PLAN,
    example: 'plan for individual annual subscriptions',
  })
  typePlan: string;

  /**
   * @description	For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.
   */
  @Field()
  @IsNotEmpty({ message: 'The suscription charge of device cannot be empty' })
  @IsNumber(
    {
      allowInfinity: false,
      allowNaN: false,
      maxDecimalPlaces: DECIMAL_SCALE_VALUE,
    },
    {
      message:
        'The suscription charge of a device must be of type number (decimal) and contain only three decimal places after the separator',
    },
  )
  @Min(MIN_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The suscription charge of a device must be greater than ${MIN_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @Max(MAX_VALUE_FOR_SUSCRIPTION_CHARGE, {
    message: `The suscription charge of a device must be less than ${MAX_VALUE_FOR_SUSCRIPTION_CHARGE}`,
  })
  @ApiProperty({
    name: 'subscriptionCharge',
    description:
      'For monthly rate plans, this charge is the monthly subscription fee for each of the subscribers in the tier. For prepaid rate plans, this is a one-time charge per subscriber that covers the entire term of the plan.',
    type: 'decimal',
    example: 2.99,
  })
  subscriptionCharge: number;

  /**
   * @description		The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges..
   */
  @Field()
  @IsNotEmpty({ message: 'The number of tiers cannot be empty' })
  @IsInt({ message: 'The number of tiers must be of type integer' })
  @Min(MIN_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `the value of the number of tiers must be greater than ${MIN_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @Max(MAX_VALUE_FOR_NUMBER_OF_TIERS, {
    message: `the value of the number of tiers must be less than ${MAX_VALUE_FOR_NUMBER_OF_TIERS}`,
  })
  @ApiProperty({
    name: 'number_of_tiers',
    description:
      '	The number of tiers specifies how many subscription tiers the rate plan has. Each tier can have different subscription fees, account charges (for certain plan types), usage allotments, and overage charges.',
    type: 'int',
    example: 1,
  })
  numberOfTiers: number;
}
