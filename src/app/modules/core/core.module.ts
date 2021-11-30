import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CdsModule} from '@cds/angular';
import {CoreComponent} from './components/core/core.component';
import {CoreRoutingModule} from './core-routing.module';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {LandingComponent} from './components/landing/landing.component';
import {angleIcon, ClarityIcons, plusIcon, trashIcon} from '@cds/core/icon';
import {HttpClientModule} from '@angular/common/http';


ClarityIcons.addIcons(
  angleIcon,
  plusIcon,
  trashIcon,
);

/**
 * Core module. Imports main modules and the core router module.
 */
@NgModule({
  declarations: [
    CoreComponent,
    NavigationComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    CdsModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [CoreComponent]
})
export class CoreModule {
}
