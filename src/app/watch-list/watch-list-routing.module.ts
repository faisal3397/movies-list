import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchListComponent } from './watch-list.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    {
        path: 'watchlist',
        component: WatchListComponent,
        canActivate: [AuthGuard]}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WatchListRoutingModule{}