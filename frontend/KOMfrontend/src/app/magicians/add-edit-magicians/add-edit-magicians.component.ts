import { Component, Input } from '@angular/core';
import { magicianService } from 'src/app/services/magician.service';

@Component({
  selector: 'app-add-edit-magicians',
  templateUrl: './add-edit-magicians.component.html',
  styleUrls: ['./add-edit-magicians.component.css']
})
export class AddEditMagiciansComponent {
  @Input() magicianEl: any
  magicianID: any
  magicianName: string
  dob: any
  age: any
  magics: any
  description: string
  photoFilename: string
  photoFilePath: string
  magicianList: any = []


  constructor(private magicianService: magicianService) {

  }

  ngOnInit() {
    this.loadAllMagicians()
  }

  loadAllMagicians() {
    this.magicianService.displayMagiciansList()
    .subscribe((data: any) => {
      this.magicianList = data

      this.magicianID = this.magicianEl.magicianID,
      this.magicianName = this.magicianEl.magicianName,
      this.dob = this.magicianEl.dob,
      this.age = this.magicianEl.age,
      this.magics = this.magicianEl.magics,
      this.description = this.magicianEl.description
      this.photoFilename = this.magicianEl.photoFilename
      this.photoFilePath = this.magicianEl.characterPic + this.photoFilename
    })
  }

  addMagician() {
    var magician = {
    magicianID: this.magicianID,
    magicianName: this.magicianName,
    dob: this.dob,
    age: this.age,
    magics: this.magics,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.magicianService.addMagician(magician)
      .subscribe(data => {
        alert(data.toString())
      })
  }

  editMagician() {
    var magician = {
    magicianID: this.magicianID,
    magicianName: this.magicianName,
    dob: this.dob,
    age: this.age,
    magics: this.magics,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.magicianService.updateMagician(magician)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)

    this.magicianService.uploadCharacterPicture(formData)
    .subscribe((data: any) => {
      this.photoFilename = data.toString()
      this.photoFilePath = this.magicianService.characterPic + this.photoFilename
    })
  }

}
