import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero, HeroService } from '../heroes';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css'],
	moduleId: module.id
})

export class DashboardComponent implements OnInit{

	heroes: Hero[] = [];

	constructor(
		private router: Router,
		private heroService: HeroService
	){}

	ngOnInit(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail( hero: Hero ): void{
		let link = ['/detail', hero.id];
		this.router.navigate( link );
	}
}