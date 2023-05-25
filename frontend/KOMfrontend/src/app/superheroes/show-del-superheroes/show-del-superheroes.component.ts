import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { superheroService } from 'src/app/services/superhero.service';

@Component({
  selector: 'app-show-del-superheroes',
  templateUrl: './show-del-superheroes.component.html',
  styleUrls: ['./show-del-superheroes.component.css']
})
export class ShowDelSuperheroesComponent implements OnInit {
  superheroList: any = []
  superheroEl: any
  activatedAddEdit: boolean = false
  modalTitle: string = ""

  superheroListWithoutFilter: any = []
  superheroAgeFilter: any = ''
  superheroFollowersFilter: any = ''
  superheroVictoriesFilter: any = ''

  constructor(private superheroService: superheroService, private router: Router) {

  }

  ngOnInit() {
    this.refreshSuperheroList()
  }

  refreshSuperheroList() {
    this.superheroService.displaySuperheroesList()
      .subscribe(data => {
        this.superheroList = data
        this.superheroListWithoutFilter = data
      })
  }

  addSuperhero() {
    this.superheroEl = {
      'superheroID': 0,
      'superheroName': '',
      'dob': '',
      'age': 0,
      'strength': 0,
      'weakness': '',
      'totalFollowers': 0,
      'totalVictories': 0,
      'description': '',
      'photoFilename': 'anonymous.png'
    }
    this.activatedAddEdit = true
    this.modalTitle = "Add Superhero"
  }

  editSuperhero(superhero: any) {
    this.superheroEl = superhero
    this.modalTitle = "Edit Superhero"
    this.activatedAddEdit = true
  }

  deleteSuperhero(id: any) {
    if (confirm("Are you sure you want to delete this Superhero ?")) {
      this.superheroEl = id
      this.superheroService.deleteSuperhero(this.superheroEl.superheroID)
        .subscribe(data => {
          alert(data.toString())
          this.refreshSuperheroList()
        })
    }
  }

  closeClick() {
    this.activatedAddEdit = false
    this.refreshSuperheroList()
  }

  filterList() {
    var age = this.superheroAgeFilter
    var followers = this.superheroFollowersFilter
    var victories = this.superheroVictoriesFilter

    this.superheroList = this.superheroListWithoutFilter.filter((element: any) => {
      return (element.armyNumbers.toString().toLowerCase().includes(
        age.toString().toLowerCase())
        ||
        element.followers.toString().toLowerCase().includes(
          followers.toString().toLowerCase()
        )
        ||
        element.victories.toString().toLowerCase().includes(
          victories.toString().toLowerCase()
        )
      )
    })
  }

  sortList(props: any, asc: any) {
    this.superheroList = this.superheroListWithoutFilter.sort((a: any, b: any) => {
      if (asc) {
        return a[props] > b[props] ? 1 : a[props] < b[props] ? -1 : 0
      }
      else {
        return b[props] > a[props] ? 1 : b[props] < a[props] ? -1 : 0
      }
    })
  }

  navigateToDescription(id: any, name: any) {
    this.router.navigate(['superheroes/description/', id, name])
  }

}
