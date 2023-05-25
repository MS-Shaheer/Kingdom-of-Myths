import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { townService } from 'src/app/services/town.service';

@Component({
  selector: 'app-show-del-towns',
  templateUrl: './show-del-towns.component.html',
  styleUrls: ['./show-del-towns.component.css']
})
export class ShowDelTownsComponent implements OnInit {
  townList: any = []
  townEl: any
  activatedAddEdit: boolean = false
  modalTitle: string = ""

  townPopulationFilter: any = ''
  townListWithoutFilter: any = []

  constructor(private townService: townService, private router: Router) {

  }

  ngOnInit() {
    this.refreshTownList()
  }

  refreshTownList() {
    this.townService.displayTownsList()
      .subscribe(data => {
        this.townList = data
        this.townListWithoutFilter = data
      })
  }

  addTown() {
    this.townEl = {
      'townID': 0,
      'townName': '',
      'population': 0,
      'kingName': '',
      'mainResource': '',
      'description': '',
      'photoFilename': 'anonymous.png'
    }
    this.activatedAddEdit = true
    this.modalTitle = "Add Town"
  }

  editTown(town: any) {
    this.townEl = town
    this.modalTitle = "Edit Town"
    this.activatedAddEdit = true
  }

  deleteTown(id: any) {
    if (confirm("Are you sure you want to delete this town ?")) {
      this.townEl = id
      this.townService.deleteTown(this.townEl.townID)
        .subscribe(data => {
          alert(data.toString())
          this.refreshTownList()
        })
    }
  }

  closeClick() {
    this.activatedAddEdit = false
    this.refreshTownList()
  }

  filterList() {
    var population = this.townPopulationFilter

    this.townList = this.townListWithoutFilter.filter((element: any) => {
      return (element.armyNumbers.toString().toLowerCase().includes(
        population.toString().toLowerCase())
      )
    })
  }

  sortList(props: any, asc: any) {
    this.townList = this.townListWithoutFilter.sort((a: any, b: any) => {
      if (asc) {
        return a[props] > b[props] ? 1 : a[props] < b[props] ? -1 : 0
      }
      else {
        return b[props] > a[props] ? 1 : b[props] < a[props] ? -1 : 0
      }
    })
  }

  navigateToDescription(id: any, name: any) {
    this.router.navigate(['towns/description/', id, name])
  }

}
