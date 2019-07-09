import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies-list/movie-item/movie-item.component';
import { MoviesStartComponent } from './movies-start/movies-start.component';
import { EditMoviesComponent } from './edit-movies/edit-movies.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LangBtnsComponent } from '../lang-btns/lang-btns.component';
import { TranslateModule } from '@ngx-translate/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
    declarations: [
        MoviesComponent,
        MoviesListComponent,
        MovieDetailComponent,
        MovieItemComponent,
        MoviesStartComponent,
        EditMoviesComponent,
        MoviesSearchComponent,
        LangBtnsComponent
    ],
    imports: [
        RouterModule, 
        MoviesRoutingModule,
        CommonModule,
        TranslateModule,
        MDBBootstrapModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [ // so that we can use the components in any module that imports MoviesModule
        MoviesComponent,
        MoviesListComponent,
        MovieDetailComponent,
        MovieItemComponent,
        MoviesStartComponent,
        EditMoviesComponent,
        MoviesSearchComponent,
        LangBtnsComponent
    ],
    providers: []
})
export class MoviesModule {}