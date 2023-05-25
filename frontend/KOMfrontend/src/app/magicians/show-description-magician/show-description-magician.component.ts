import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { magicianService } from 'src/app/services/magician.service';

@Component({
  selector: 'app-show-description-magician',
  templateUrl: './show-description-magician.component.html',
  styleUrls: ['./show-description-magician.component.css']
})
export class ShowDescriptionMagicianComponent implements OnInit {
  // @Input() magicianEl: any
  magicianID: any
  magicianName: string
  dob: any
  age: any
  magics: any
  description: string
  photoFilename: any
  magicianData: any
  // photoFilePath: string




  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const id = params['id']

        this.getMagician(id)
      })


  }

  getMagician(id: any) {
      this.magicianService.getMagician(id).subscribe(data => {
      this.magicianData = data;
      this.magicianName = this.magicianData.magicianName;
      this.dob = this.magicianData.dob;
      this.age = this.magicianData.age;
      this.magics = this.magicianData.magics;
      this.description = this.magicianData.description;
      this.photoFilename = this.magicianData.photoFilename;
    });
  }

  getMagicianImageUrl(filename: string): string {
    return this.magicianService.getMagicianImageUrl(filename);
  }

  constructor(private magicianService: magicianService, private route: ActivatedRoute) {
    
  }
}
