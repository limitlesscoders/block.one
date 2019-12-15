import { BlockState } from './block/state';
import { createFeatureSelector } from '@ngrx/store';

export interface SharedEntitiesStore {
    blocks: BlockState;
}
export enum AppStoreModules{
    SharedEntitiesStore = 'SharedEntitiesStore'
}
export const SharedState = createFeatureSelector<SharedEntitiesStore>(AppStoreModules.SharedEntitiesStore)