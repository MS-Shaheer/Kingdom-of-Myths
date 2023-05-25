import { Component, Input } from '@angular/core';
import { villianService } from 'src/app/services/villian.service';

@Component({
  selector: 'app-add-edit-villians',
  templateUrl: './add-edit-villians.component.html',
  styleUrls: ['./add-edit-villians.component.css']
})
export class AddEditVilliansComponent {
  @Input() villianEl: any
  villianID: any
  villianName: string
  dob: any
  age: any
  strength: any
  weakness: any
  totalFollowers: any
  totalVictories: any
  description: string
  photoFilename: any
  photoFilePath: any
  villianList: any = []

  constructor(private villianService: villianService) {

  }

  ngOnInit() {
    this.loadAllVillians()
  }

  loadAllVillians() {
    this.villianService.displayVilliansList()
    .subscribe((data: any) => {
      this.villianList = data

      this.villianID = this.villianEl.villianID,
      this.villianName = this.villianEl.villianName,
      this.dob = this.villianEl.dob,
      this.age = this.villianEl.age,
      this.strength = this.villianEl.strength
      this.weakness = this.villianEl.weakness,
      this.totalFollowers = this.villianEl.totalFollowers,
      this.totalVictories = this.villianEl.totalVictories,
      this.description = this.villianEl.description,
      this.photoFilename = this.villianEl.photoFilename,
      this.photoFilePath = this.villianService.characterPic + this.photoFilename
    })
  }

  addVillian() {
    var villian = {
    villianID: this.villianID,
    villianName: this.villianName,
    dob: this.dob,
    age: this.age,
    strength: this.strength,
    weakness: this.weakness,
    totalFollowers: this.totalVictories,
    totalVictories: this.totalVictories,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.villianService.addVillian(villian)
      .subscribe(data => {
        alert(data.toString())
      })
  }

  editVillian() {
    var villian = {
    villianID: this.villianID,
    villianName: this.villianName,
    dob: this.dob,
    age: this.age,
    strength: this.strength,
    weakness: this.weakness,
    totalFollowers: this.totalFollowers,
    totalVictories: this.totalVictories,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.villianService.updateVillian(villian)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)

    this.villianService.uploadCharacterPicture(formData)
    .subscribe((data: any) => {
      this.photoFilename = data.toString()
      this.photoFilePath = this.villianService.characterPic + this.photoFilename
    })
  }

}
