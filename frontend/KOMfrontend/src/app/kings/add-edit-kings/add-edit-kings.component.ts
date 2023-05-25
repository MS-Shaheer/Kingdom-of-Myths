import { Component, Input, OnInit } from '@angular/core';
import { kingService } from 'src/app/services/king.service';

@Component({
  selector: 'app-add-edit-kings',
  templateUrl: './add-edit-kings.component.html',
  styleUrls: ['./add-edit-kings.component.css']
})
export class AddEditKingsComponent implements OnInit {
  @Input() kingEl: any
  kingID: any
  kingName: string
  dob: any
  age: any
  armyNumbers: any
  totalLand: any
  description: string
  photoFilename: string
  photoFilePath: string

  kingList: any = []

  // king: any = {
  //   kingName: '',
  //   dob: '',
  //   age: 0,
  //   armyNumbers: 0,
  //   totalLand: 0,
  //   description: '',
  // };


  constructor(private kingService: kingService) {

  }

  ngOnInit() {
    this.loadAllKings()
  }

  loadAllKings() {
    this.kingService.displayKingList()
    .subscribe((data: any) => {
      this.kingList = data

      this.kingID = this.kingEl.kingID,
      this.kingName = this.kingEl.kingName,
      this.dob = this.kingEl.dob,
      this.age = this.kingEl.age,
      this.armyNumbers = this.kingEl.armyNumbers
      this.totalLand = this.kingEl.totalLand,
      this.description = this.kingEl.description
      this.photoFilename = this.kingEl.photoFilename
      this.photoFilePath = this.kingService.characterPic + this.photoFilename
    })
  }

  // onSubmit() {
  //   // console.log(this.king);

  //   this.king.kingName = this.kingEl.kingName
  //   this.king.dob = this.kingEl.dob
  //   this.king.age = this.kingEl.age
  //   this.king.strength = this.kingEl.strength
  //   this.king.weakness = this.kingEl.weakness
  //   this.king.totalFollowers = this.kingEl.totalFollowers
  //   this.king.totalVictories = this.kingEl.totalVictories

  //   this.kingService.addKing(this.king)
  //   .subscribe(res => console.log(res));
  // }

  addKing() {
    var king = {
      kingID: this.kingID,
      kingName: this.kingName,
      dob: this.dob,
      age: this.age,
      armyNumbers: this.armyNumbers,
      totalLand: this.totalLand,
      description: this.description,
      photoFilename: this.photoFilename
    }
    this.kingService.addKing(king)
      .subscribe(data => {
        alert(data.toString())
      })
  }

  editKing() {
    var king = {
      kingID: this.kingID,
      kingName: this.kingName,
      dob: this.dob,
      age: this.age,
      armyNumbers: this.armyNumbers,
      totalLand: this.totalLand,
      description: this.description,
      photoFilename: this.photoFilename
    }
    this.kingService.updateKing(king)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)
    this.kingService.uploadCharacterPicture(formData)
    .subscribe((data: any) => {
      this.photoFilename = data.toString()
      this.photoFilePath = this.kingService.characterPic + this.photoFilename
    })
  }


}

