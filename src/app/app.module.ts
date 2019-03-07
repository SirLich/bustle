import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LabelComponent } from './label/label.component';
import { ActivitySearchComponent } from './activity-search/activity-search.component';
import { LabelDisplayComponent } from './label-display/label-display.component';
import { ActivityDisplayComponent } from './activity-display/activity-display.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule} from './material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import { BasicSearchComponent } from './basic-search/basic-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    ActivitySearchComponent,
    LabelDisplayComponent,
    ActivityDisplayComponent,
    CategoryDisplayComponent,
    CategoryListComponent,
    HomePageComponent,
    NavComponent,
    BasicSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
