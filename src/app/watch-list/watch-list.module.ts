import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchListComponent } from './watch-list.component';
import { LangBtnsComponent } from '../lang-btns/lang-btns.component';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { WatchListRoutingModule } from './watch-list-routing.module';
import { LangBtnsModule } from '../lang-btns/lang-btns.module';

@NgModule({
    declarations: [
        WatchListComponent
    ],
    imports: [
        RouterModule,
        WatchListRoutingModule,
        LangBtnsModule,
        CommonModule,
        TranslateModule,
        MDBBootstrapModule
    ],
    exports: [ ],
    providers: [],
})
export class WatchListModule {}
