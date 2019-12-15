import { BlockEntityService } from './block/service';
import { StoreModule } from '@ngrx/store';
import { SharedEntitiesStore, AppStoreModules } from './entities.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockReducer } from './block/selector';
import { BlockEffects } from './block/effects';
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    StoreModule.forFeature(AppStoreModules.SharedEntitiesStore, {
      blocks: BlockReducer
    }),
    EffectsModule.forFeature([BlockEffects])
  ],
  providers: [BlockEntityService],
  exports:[],
  declarations: []
})
export class BlockOneEntitiesModule { }
