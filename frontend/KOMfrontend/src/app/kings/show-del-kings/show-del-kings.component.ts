import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { kingService } from 'src/app/services/king.service';

@Component({
  selector: 'app-show-del-kings',
  templateUrl: './show-del-kings.component.html',
  styleUrls: ['./show-del-kings.component.css']
})
export class ShowDelKingsComponent implements OnInit {
  @Input() kingEl: any
  kingList: any = []
  // kingEl: any
  activatedAddEdit: boolean = false
  modalTitle: string = ""

  kingListWithoutFilter: any = []
  kingArmyFilter: any = ''
  // kingLandRuleFilter: any = ''

  constructor(private kingService: kingService, private router: Router) {

  }

  ngOnInit() {
    this.refreshKingList()
  }

  refreshKingList() {
    this.kingService.displayKingList()
      .subscribe(data => {
        this.kingList = data
        this.kingListWithoutFilter = data
      })
  }

  addKing() {
    this.kingEl = {
      'kingID': 0,
      'kingName': '',
      'dob': '',
      'age': 0,
      'armyNumbers': 0,
      'totalLand': '',
      'description': '',
      'photoFilename': 'anonymous.png'
    }
    this.activatedAddEdit = true
    this.modalTitle = "Add King"
  }

  editKing(king: any) {
    this.kingEl = king
    this.modalTitle = "Edit King"
    this.activatedAddEdit = true
  }

  deleteKing(id: any) {
    if (confirm("Are you sure you want to delete this KING ?")) {
      this.kingEl = id
      this.kingService.deleteKing(this.kingEl.kingID)
        .subscribe(data => {
          alert(data.toString())
          this.refreshKingList()
        })
    }
  }

  closeClick() {
    this.activatedAddEdit = false
    this.refreshKingList()
  }

  filterList() {
    var armyNumbers = this.kingArmyFilter
    // var totalLand = this.kingLandRuleFilter

    this.kingList = this.kingListWithoutFilter.filter((element: any) => {
      return (element.armyNumbers.toString().toLowerCase().includes(
        armyNumbers.toString().toLowerCase())
        // ||
        // element.totalLand.toString().toLowerCase().includes(
        //   totalLand.toString().toLowerCase()
        // )
      )
    })
  }

  sortList(props: any, asc: any) {
    this.kingList = this.kingListWithoutFilter.sort((a: any, b: any) => {
      if (asc) {
        return a[props]>b[props] ? 1 : a[props]<b[props] ? -1 : 0
      }
      else {
        return b[props]>a[props] ? 1 : b[props]<a[props] ? -1 : 0
      }
    })
  }

  navigateToDescription(id: any, name: any) {
    this.router.navigate(['kings/description/', id, name])
  }

  // rowClasses = ['row1', 'row2', 'row3', 'row4']



}

