import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from './material-module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { routingArr } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardDailogComponentComponent } from './dashboard/dashboard-dailog-component/dashboard-dailog-component.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardsComponent,
    DashboardComponent,
    MenuComponent,
    DashboardDailogComponentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    routingArr,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DashboardDailogComponentComponent]
})
export class AppModule { }
