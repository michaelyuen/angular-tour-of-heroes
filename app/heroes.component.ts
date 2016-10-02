import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'heroes.component.html',
	styleUrls: ['heroes.component.css'],
	moduleId: module.id
})

export class HeroesComponent implements OnInit{
	title = 'Tour of Heroes';
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService
	){}

	ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then( heroes => this.heroes = heroes );
	}

	onSelect( hero: Hero ): void{
		this.selectedHero = hero;
	}

	gotoDetail(): void{
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate( link );
	}
}