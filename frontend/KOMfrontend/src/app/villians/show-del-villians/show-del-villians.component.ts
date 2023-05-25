import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { villianService } from 'src/app/services/villian.service';

@Component({
  selector: 'app-show-del-villians',
  templateUrl: './show-del-villians.component.html',
  styleUrls: ['./show-del-villians.component.css']
})
export class ShowDelVilliansComponent implements OnInit {
  villianList: any = []
  villianEl: any
  activatedAddEdit: boolean = false
  modalTitle: string = ""

  villianListWithoutFilter: any = []
  villianAgeFilter: any = ''
  villianFollowersFilter: any = ''
  villianVictoriesFilter: any = ''

  constructor(private villianService: villianService, private router: Router) {

  }

  ngOnInit() {
    this.refreshVillianList()
  }

  refreshVillianList() {
    this.villianService.displayVilliansList()
      .subscribe(data => {
        this.villianList = data
        this.villianListWithoutFilter = data
      })
  }

  addVillian() {
    this.villianEl = {
      'villianID': 0,
      'villianName': '',
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
    this.modalTitle = "Add Villian"
  }

  editVillian(villian: any) {
    this.villianEl = villian
    this.modalTitle = "Edit Villian"
    this.activatedAddEdit = true
  }

  deleteVillian(id: any) {
    if (confirm("Are you sure you want to delete this Villian ?")) {
      this.villianEl = id
      this.villianService.deleteVillian(this.villianEl.villianID)
        .subscribe(data => {
          alert(data.toString())
          this.refreshVillianList()
        })
    }
  }

  closeClick() {
    this.activatedAddEdit = false
    this.refreshVillianList()
  }

  filterList() {
    var age = this.villianAgeFilter
    var followers = this.villianFollowersFilter
    var victories = this.villianVictoriesFilter

    this.villianList = this.villianListWithoutFilter.filter((element: any) => {
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
    this.villianList = this.villianListWithoutFilter.sort((a: any, b: any) => {
      if (asc) {
        return a[props] > b[props] ? 1 : a[props] < b[props] ? -1 : 0
      }
      else {
        return b[props] > a[props] ? 1 : b[props] < a[props] ? -1 : 0
      }
    })
  }

  navigateToDescription(id: any, name: any) {
    this.router.navigate(['villians/description/', id, name])
  }

}
