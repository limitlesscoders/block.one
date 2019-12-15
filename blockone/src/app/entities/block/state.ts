import { EntityState } from '@ngrx/entity';


export interface Block{
    id: string;
    name: string;
}
export interface BlockState extends EntityState<Block> {
    isLoaded: boolean;
    selectedEntityId: string;
}