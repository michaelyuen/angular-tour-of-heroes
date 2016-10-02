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

	add( name: string ): void{

		name = name.trim();

		if( !name ){ return; }

		this.heroService.create( name )
			.then(hero =>
			{
				this.heroes.push( hero );
				this.selectedHero = null;
			}
		);
	}

	onSelect( hero: Hero ): void{
		this.selectedHero = hero;
	}

	gotoDetail(): void{
		let link = ['/detail', this.selectedHero.id];
		this.router.navigate( link );
	}

	delete( hero: Hero ): void{

		this.heroService.delete(hero.id)
			.then( () =>
			{
				this.heroes = this.heroes.filter( h => h !== hero );
				if( this.selectedHero === hero ){ this.selectedHero = null; }
			}
		);
	}
}