import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { superheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-show-description-superhero',
  templateUrl: './show-description-superhero.component.html',
  styleUrls: ['./show-description-superhero.component.css']
})
export class ShowDescriptionSuperheroComponent {
  superheroID: any
  superheroName: string
  dob: any
  age: any
  totalFollowers: any
  totalVictories: any
  description: string
  photoFilename: string
  superheroData: any
  // photoFilePath: string




  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.getSuperhero(id)
      })


  }

  getSuperhero(id: any) {
      this.superheroService.getSuperhero(id).subscribe(data => {
      this.superheroData = data;
      this.superheroName = this.superheroData.superheroName;
      this.dob = this.superheroData.dob;
      this.age = this.superheroData.age;
      this.totalFollowers = this.superheroData.totalFollowers;
      this.totalVictories = this.superheroData.totalVictories;
      this.description = this.superheroData.description;
      this.photoFilename = this.superheroData.photoFilename;
    });
  }

  getSuperheroImageUrl(filename: string): string {
    return this.superheroService.getSuperheroImageUrl(filename);
  }

  constructor(private superheroService: superheroService, private route: ActivatedRoute) {

  }

}
