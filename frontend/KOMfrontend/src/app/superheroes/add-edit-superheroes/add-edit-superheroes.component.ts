import { Component, Input } from '@angular/core';
import { superheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-add-edit-superheroes',
  templateUrl: './add-edit-superheroes.component.html',
  styleUrls: ['./add-edit-superheroes.component.css']
})
export class AddEditSuperheroesComponent {
  @Input() superheroEl: any
  superheroID: any
  superheroName: string
  dob: any
  age: any
  strength: any
  weakness: any
  totalFollowers: any
  totalVictories: any
  description: string
  photoFilename: string
  photoFilePath: string
  superheroList: any = []


  constructor(private superheroService: superheroService) {

  }

  ngOnInit() {
    this.loadAllSuperheroes()
  }

  loadAllSuperheroes() {
    this.superheroService.displaySuperheroesList()
    .subscribe((data: any) => {
      this.superheroList = data

      this.superheroID = this.superheroEl.superheroID,
      this.superheroName = this.superheroEl.superheroName,
      this.dob = this.superheroEl.dob,
      this.age = this.superheroEl.age,
      this.strength = this.superheroEl.strength
      this.weakness = this.superheroEl.weakness,
      this.totalFollowers = this.superheroEl.totalFollowers,
      this.totalVictories = this.superheroEl.totalVictories,
      this.description = this.superheroEl.description,
      this.photoFilename = this.superheroEl.photoFilename,
      this.photoFilePath = this.superheroService.characterPic + this.photoFilename
    })
  }

  addSuperhero() {
    var superhero = {
    superheroID: this.superheroID,
    superheroName: this.superheroName,
    dob: this.dob,
    age: this.age,
    strength: this.strength,
    weakness: this.weakness,
    totalFollowers: this.totalFollowers,
    totalVictories: this.totalVictories,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.superheroService.addSuperhero(superhero)
      .subscribe(data => {
        alert(data.toString())
      })
  }

  editSuperhero() {
    var superhero = {
    superheroID: this.superheroID,
    superheroName: this.superheroName,
    dob: this.dob,
    age: this.age,
    strength: this.strength,
    weakness: this.weakness,
    totalFollowers: this.totalFollowers,
    totalVictories: this.totalVictories,
    description: this.description,
    photoFilename: this.photoFilename
    }
    this.superheroService.updateSuperhero(superhero)
      .subscribe(res => {
        alert(res.toString())
      })
  }

  uploadPhoto(event) {
    var file = event.target.files[0]
    const formData: FormData = new FormData()
    formData.append('uploadedFile', file, file.name)

    this.superheroService.uploadCharacterPicture(formData)
    .subscribe((data: any) => {
      this.photoFilename = data.toString()
      this.photoFilePath = this.superheroService.characterPic + this.photoFilename
    })
  }

}
