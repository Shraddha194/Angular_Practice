import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';
import { MaterialModule } from './material-module';
import { DashboardComponent, DashboardDailogComponent, } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardDailogComponent,
    BoardComponent,
    CardsComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [DashboardComponent, DashboardDailogComponent ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
