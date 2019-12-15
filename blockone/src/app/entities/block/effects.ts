import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Observable, of} from "rxjs";
import {catchError, map, mergeMap, switchMap} from "rxjs/operators";
import { BlockEntityAction, GetAll, GetAllFailed, GetAllSuccessful, BlockActionType } from './actions';
import { Block } from './state';



@Injectable()
export class BlockEffects{

    @Effect() private getAll$: Observable<BlockEntityAction>;

    public constructor(private action$: Actions<BlockEntityAction>){

        this.getAll$ = action$.pipe(
            ofType(BlockActionType.GetAll),
            switchMap((action: GetAll) => {
              return of([])
                  .pipe(
                      map((payload: Block[]) => <BlockEntityAction>new GetAllSuccessful(payload)),
                      catchError(error => of(<BlockEntityAction>new GetAllFailed(error)))
                  );
            })
        );

    };
};