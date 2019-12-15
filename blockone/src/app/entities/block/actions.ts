import {Action} from "@ngrx/store";
import { Block } from './state';

export enum BlockActionType{
    GetAll = "[Block] GetAll",
    GetAllSuccessful = "[Block] GetAllSuccessful",
    GetAllFailed = "[Block] GetAllFailed",
}

export class GetAll implements Action {
    readonly type = BlockActionType.GetAll;
    constructor(){}
    }


export class GetAllSuccessful implements Action {
    readonly type = BlockActionType.GetAllSuccessful;
    constructor(public payload: Block[]){}
    }

export class GetAllFailed implements Action {
    readonly type = BlockActionType.GetAllFailed;
    constructor(public payload: any) { }
    }

export type BlockEntityAction =  GetAll | GetAllSuccessful | GetAllFailed;