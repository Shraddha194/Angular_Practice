import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const arr:Routes=[
    {path:'',component:DashboardComponent},
    {path:'card',component:CardsComponent}
];
export const routingArr=RouterModule.forRoot(arr);