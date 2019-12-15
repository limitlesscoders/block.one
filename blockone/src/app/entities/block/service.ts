import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {BlockSelector} from "./selector";
import {Observable} from "rxjs";
import {Block, BlockState} from "./state";
import {GetAll, GetAllSuccessful} from "./actions";

@Injectable()
export class BlockEntityService {
  public collection$: Observable<Block[]>;
  public selectedEntity$: Observable<Block>;
  public isCollectionLoaded$: Observable<boolean>;

  constructor(private store: Store<BlockState>) {
    this.collection$ = this.store.pipe(select(BlockSelector.collection));
    this.selectedEntity$ = this.store.pipe(select(BlockSelector.selectedEntity));
    this.isCollectionLoaded$ = this.store.pipe(select(BlockSelector.isLoading));
  }

  public getAll(): void {
      this.store.dispatch(new GetAll());
  }


}
