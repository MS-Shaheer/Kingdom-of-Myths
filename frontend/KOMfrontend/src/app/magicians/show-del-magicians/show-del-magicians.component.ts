import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { magicianService } from 'src/app/services/magician.service';

@Component({
  selector: 'app-show-del-magicians',
  templateUrl: './show-del-magicians.component.html',
  styleUrls: ['./show-del-magicians.component.css']
})
export class ShowDelMagiciansComponent implements OnInit {
  magicianList: any = []
  magicianEl: any
  activatedAddEdit: boolean = false
  modalTitle: string = ""

  constructor(private magicianService: magicianService, private router: Router) {

  }

  ngOnInit() {
    this.refreshMagicianList()
  }

  refreshMagicianList() {
    this.magicianService.displayMagiciansList()
      .subscribe(data => {
        this.magicianList = data
      })
  }

  addMagician() {
    this.magicianEl = {
      'magicianID': 0,
      'magicianName': '',
      'dob': '',
      'age': 0,
      'magics': '',
      'description': '',
      'photoFilename': 'anonymous.png'
    }
    this.activatedAddEdit = true
    this.modalTitle = "Add Magician"
  }

  editMagician(magicians: any) {
    this.magicianEl = magicians
    this.modalTitle = "Edit Magician"
    this.activatedAddEdit = true
  }

  deleteMagician(id: any) {
    if (confirm("Are you sure you want to delete this Magician ?")) {
      this.magicianEl = id
      this.magicianService.deleteMagician(this.magicianEl.magicianID)
        .subscribe(data => {
          alert(data.toString())
          this.refreshMagicianList()
        })
    }
  }

  closeClick() {
    this.activatedAddEdit = false
    this.refreshMagicianList()
  }

  navigateToDescription(id: any, name: any) {
    this.router.navigate(['magicians/description/', id, name])
  }

  // rowClasses = ['row1', 'row2', 'row3', 'row4']
}
