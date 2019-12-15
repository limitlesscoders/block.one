import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatTableModule
} from "@angular/material";
import {PlatformModule} from "@angular/cdk/platform";
import {ObserversModule} from "@angular/cdk/observers";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatProgressBarModule,
    ObserversModule,
    FormsModule,
    PlatformModule,
    MatTableModule,
    ReactiveFormsModule,
  ]
})
export class CustomMaterialModule {
}
