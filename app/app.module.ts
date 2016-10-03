import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data/in-memory-data.service';
import './shared/rxjs/rxjs-extensions';

import { routing }             from './app.routing';
import { AppComponent }        from './app.component';
import { DashboardComponent }  from './dashboard';
import { HeroesComponent, HeroDetailComponent, HeroSearchComponent, HeroService } from './heroes';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent,
		HeroSearchComponent
	],
	providers: [
		HeroService
	],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }