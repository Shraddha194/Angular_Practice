import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';


export const routes:Routes=[
    {path:'',component:DashboardComponent},
    {path:'card/:id',component:CardsComponent},
    {path: 'board/', component:BoardComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes,{onSameUrlNavigation:'reload'})],
    exports: [RouterModule],
})
export class AppRoutingModule{};