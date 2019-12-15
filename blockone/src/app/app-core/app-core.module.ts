import { AppTreeComponent } from './components/app-tree/app-tree.component';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './../material.modules';
import { NgModule } from '@angular/core';


const CoreComponents = [AppTreeComponent];
@NgModule({
    imports: [
      CommonModule,
      CustomMaterialModule,
    ],
    entryComponents: CoreComponents,
    declarations: [CoreComponents],
    providers: [],
    exports: [CoreComponents]
  })
  
  export class AppCoreModule {
  }
  