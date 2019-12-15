import { environment } from './../environments/environment.prod';
import { CustomMaterialModule } from './material.modules';
import { EffectsModule } from '@ngrx/effects';
import { BlockOneEntitiesModule } from './entities/entities.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AppCoreModule } from './app-core/app-core.module';


const reducers: ActionReducerMap<any> = {};
const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    AppCoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: "BlockOne Redux store",
      maxAge: 25, // Retains last 25 states
      logOnly: true
    }),
    EffectsModule.forRoot([]),
    BlockOneEntitiesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
