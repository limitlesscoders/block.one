import {createEntityAdapter} from "@ngrx/entity";
import {createSelector} from "@ngrx/store";
import {SharedEntitiesStore, SharedState} from "../entities.state";
import {BlockActionType, BlockEntityAction} from "./actions";
import { Block, BlockState } from './state';

const adapter = createEntityAdapter<Block>();
const entityState = createSelector(SharedState, (state: SharedEntitiesStore) => state.blocks);
const entitiesDic = createSelector(entityState, (state: BlockState) => state.entities);
const selectedId = createSelector(entityState, (state: BlockState) => state.selectedEntityId);
const initialState = adapter.getInitialState(<BlockState>{
    isLoaded: false,
    selectedEntityId: null,
});

export const BlockSelector = {
    isLoading: createSelector(entityState, (state: BlockState) => state.isLoaded),
    collection: createSelector(entitiesDic, entityState, (entities, state) => Object.keys(entities).map(id => entities[id])),
    selectedEntity: createSelector(entitiesDic, selectedId, (entities, id) => entities[id]),
};


export function BlockReducer(state: BlockState = initialState, action: BlockEntityAction): BlockState {

    const actionType = BlockActionType;
    switch (action.type) {
        case actionType.GetAllSuccessful:
            state.isLoaded = true;
            return adapter.addAll(action.payload, state);
        default:
            return state;
    }
}


