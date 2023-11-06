/* eslint-disable prettier/prettier */
//External
import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Get, Patch, Post } from '@nestjs/common';
//Service
import { RatePlansService } from './rate-plans.service';
//Models
import { RatePlans } from './models/rate-plans.entity';
import { RatePlansDTO } from './models/rate-plans.dto';
//const-vars
let msgResponse: string;
let msgLog: string;

//Check

@Resolver()
@ApiTags('RatePlansResolver')
export class RatePlansResolver {
  constructor(private ratePlansService: RatePlansService) {}

  // /**
  //  * @description Controller to update a rate plan
  //  * @param {number} id number type
  //  * @param {RatePlansDTO} ratePlanObj RatePlansDTO type
  //  * @returns a response with the rate plan object and status code
  //  */
  // @Mutation(() => RatePlans, { name: 'updateRatePlan' })
  // @Patch('/:id')
  // @ApiOperation({ summary: 'Update a rate plans' })
  // async updateRatePlan(
  //   @Args({ name: 'id' }) id: number,
  //   @Args({ name: 'ratePlanObj' }) ratePlanObj: RatePlansDTO,
  // ): Promise<RatePlans | string> {
  //   try {
  //     msgResponse = null;
  //     msgLog = null;

  //     //--- start with database operations ----
  //     return await this.ratePlansService.updateRatePlan(id, ratePlanObj);
  //     //--- end with database operations ----
  //   } catch (error) {
  //     msgResponse = 'ERROR in updateRatePlan function resolver';
  //     msgLog = msgResponse + `Caused by ${error}`;
  //     console.log(msgLog);
  //     return msgResponse;
  //   }
  // }

  /**
   * @description Controller to get a paginated listing of all rate plans
   * @param {number} pageNro number type
   * @param {number} pageSize number type
   * @param {string} orderBy string type
   * @param {string} orderAt string type
   * @returns a response with the rate plans paginated list and status code
   */
  @Get('/list')
  @ApiOperation({ summary: 'Get all paginated rate plans' })
  @Query(() => [RatePlans], { name: 'getAllRatePlans' })
  async getAllRatePlans(
    @Args({ name: 'pageNro', type: () => Int }) pageNro: number,
    @Args({ name: 'pageSize', type: () => Int }) pageSize: number,
    @Args({ name: 'orderBy' }) orderBy: string,
    @Args({ name: 'orderAt' }) orderAt: string,
  ): Promise<RatePlans[] | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //--- start with database operations ----
      return await this.ratePlansService.getAllRatePlans(
        pageNro,
        pageSize,
        orderBy,
        orderAt,
      );
      //--- end with database operations ----
    } catch (error) {
      msgResponse = 'ERROR in getAllRatePlans function resolver';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }

  /**
   * @description Controller to get a rate plan according to your id
   
      * @param {number} inputId number type
   * @returns a response with the rate plan and status code
   */
  @Get('/id/:inputId')
  @ApiOperation({ summary: 'Get a rate plan according to your id' })
  @Query(() => RatePlans, { name: 'getByIdRatePlans' })
  async getByIdRatePlans(
    @Args({ name: 'inputId', type: () => Int }) inputId: number,
  ): Promise<RatePlans | string> {
    try {
      msgResponse = null;
      msgLog = null;

      //--- start with database operations ----
      return await this.ratePlansService.getByIdRatePlans(inputId);
      //--- end with database operations ----
    } catch (error) {
      msgResponse = 'ERROR in getByIdRatePlans function resolver';
      msgLog = msgResponse + `Caused by ${error}`;
      console.log(msgLog);
      return msgResponse;
    }
  }
}
