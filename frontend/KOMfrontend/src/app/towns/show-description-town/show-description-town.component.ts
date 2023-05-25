import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { townService } from 'src/app/services/town.service';

@Component({
  selector: 'app-show-description-town',
  templateUrl: './show-description-town.component.html',
  styleUrls: ['./show-description-town.component.css']
})
export class ShowDescriptionTownComponent implements OnInit {
  // @Input() townEl: any
  townID: any
  townName: string
  population: any
  kingName: any
  mainResource: any
  description: string
  photoFilename: any
  townData: any
  // photoFilePath: string

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.getTown(id)
      })


  }

  getTown(id: any) {
      this.townService.getTown(id).subscribe(data => {
      this.townData = data;
      this.townName = this.townData.townName;
      this.kingName = this.townData.kingName;
      this.population = this.townData.population;
      this.mainResource = this.townData.mainResource;
      this.description = this.townData.description;
      this.photoFilename = this.townData.photoFilename;
    });
  }

  getTownImageUrl(filename: string): string {
    return this.townService.getTownImageUrl(filename);
  }

  constructor(private townService: townService, private route: ActivatedRoute) {

  }
}
