import { Component, Input } from '@angular/core';
import { townService } from 'src/app/services/town.service';

@Component({
  selector: 'app-add-edit-towns',
  templateUrl: './add-edit-towns.component.html',
  styleUrls: ['./add-edit-towns.component.css']
})
export class AddEditTownsComponent {
  @Input() townEl: any
  townID: any
  townName: string
  population: any
  kingName: string
  mainResource: any
  description: string
  photoFilename: string
  photoFilePath: string
  townList: any = []

  // town: any = {
  //   townName: '',
  //   dob: '',
  //   kingName: 0,
  //   mainResource: 0,
  //   totalLand: 0,
  //   description: '',
  // };


  constructor(private townService: townService) {

  }

  ngOnInit() {
    this.loadAllTowns()
  }

  loadAllTowns() {
    this.townService.displayTownsList()
    .subscribe((data: any) => {
      this.townList = data

      this.townID = this.townEl.townID,
      this.townName = this.townEl.townName,
      this.population = this.townEl.population,
      this.kingName = this.townEl.kingName,
      this.mainResource = this.townEl.mainResource
      this.description = this.townEl.description,
      this.photoFilename = this.townEl.photoFilename,
      this.photoFilePath = this.townEl.characterPic + this.photoFilename
    })
  }

  addTown() {
    var town = {
      townID: this.townID,
      townName: this.townName,
      population: this.population,
      kingName: this.kingName,
      mainResource: this.mainResource,
      description: this.description,
      photoFilename: this.photoFilename
    }
    this.townService.addTown(town)
      .subscribe(data => {
        alert(data.toString())
      })
  }

  editTown() {
    var town = {
      townID: this.townID,
      townName: this.townName,
      population: this.population,
      kingName: this.kingName,
      mainResource: this.mainResource,
      description: this.description,
      photoFilename: this.photoFilename
    }
    this.townService.updateTown(town)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)

    this.townService.uploadTownPicture(formData)
    .subscribe((data: any) => {
      this.photoFilename = data.toString()
      this.photoFilePath = this.townService.townPic + this.photoFilename
    })
  }

}
