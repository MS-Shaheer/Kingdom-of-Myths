import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { villianService } from 'src/app/services/villian.service';

@Component({
  selector: 'app-show-description-villian',
  templateUrl: './show-description-villian.component.html',
  styleUrls: ['./show-description-villian.component.css']
})
export class ShowDescriptionVillianComponent implements OnInit {
  villianID: any
  villianName: string
  dob: any
  age: any
  totalFollowers: any
  totalVictories: any
  description: string
  photoFilename: any
  villianData: any
  // photoFilePath: any

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.getVillian(id)
      })


  }

  getVillian(id: any) {
      this.villianService.getVillian(id).subscribe(data => {
      this.villianData = data;
      this.villianName = this.villianData.villianName;
      this.dob = this.villianData.dob;
      this.age = this.villianData.age;
      this.totalFollowers = this.villianData.totalFollowers;
      this.totalVictories = this.villianData.totalVictories;
      this.description = this.villianData.description;
      this.photoFilename = this.villianData.photoFilename
      // this.villianService.getCharacterPicture(this.villianName + '.png').subscribe(
      //   (data) => {
      //     // Handle the response here
      //     this.photoFilename = data
      //     this.photoFilePath = this.villianService.characterPic + this.photoFilename
      //   },
      //   (error) => {
      //     // Handle errors
      //     console.error('Error retrieving character picture:', error);
      //   }
      // );
    });
  }

  getVillianImageUrl(filename: string): string {
    return this.villianService.getVillianImageUrl(filename);
  }

  constructor(private villianService: villianService, private route: ActivatedRoute) {

  }
}
