import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard';
import { HeroesComponent, HeroDetailComponent } from './heroes';

const appRoutes: Routes = [
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);