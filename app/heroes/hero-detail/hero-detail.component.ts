import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero }        from '../hero/hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail.component.html',
	styleUrls: ['hero-detail.component.css'],
	moduleId: module.id
})

export class HeroDetailComponent implements OnInit{
	@Input()
	hero: Hero

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private heroService: HeroService
	){}

	ngOnInit(): void{

		this.route.params.forEach((params: Params) => {

			let id = +params['id'];
			this.heroService.getHero(id).then( hero => this.hero = hero );
		});
	}

	goBack(): void{

		this.location.back();
	}

	save(): void{

		this.heroService.update( this.hero ).then( () => this.goBack() );
	}
}