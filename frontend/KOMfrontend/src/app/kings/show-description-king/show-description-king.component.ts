import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { kingService } from 'src/app/services/king.service';

@Component({
  selector: 'app-show-description-king',
  templateUrl: './show-description-king.component.html',
  styleUrls: ['./show-description-king.component.css']
})
export class ShowDescriptionKingComponent implements OnInit {
  // @Input() kingEl: any
  kingID: any
  kingName: string
  dob: any
  age: any
  armyNumbers: any
  totalLand: any
  description: string
  photoFilename: string
  kingData: any
  photoFilePath: any;
  // photoFilePath: string




  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.getKing(id)
      })


  }

  getKing(id: any) {
      this.kingService.getKing(id).subscribe(data => {
      this.kingData = data;
      this.kingName = this.kingData.kingName;
      this.dob = this.kingData.dob;
      this.age = this.kingData.age;
      this.armyNumbers = this.kingData.armyNumbers;
      this.totalLand = this.kingData.totalLand;
      this.description = this.kingData.description;
      this.photoFilename = this.kingData.photoFilename
      // this.kingService.getCharacterPicture(this.kingName + '.png').subscribe(
      //   (data: any) => {
      //     this.photoFilePath = this.kingService.characterPic + this.kingName + '.png';
      //   },
      //   (error) => {
      //     console.error('Error retrieving character picture:', error);
      //   }
      // );
    });
  }
  
  getKingImageUrl(filename: string): string {
    return this.kingService.getKingImageUrl(filename);
  }

  constructor(private kingService: kingService, private route: ActivatedRoute) {

  }

}
