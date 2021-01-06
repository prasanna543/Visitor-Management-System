import { Component, OnInit } from '@angular/core';
import { Faculty } from 'src/app/models/Faculty';
import { FacultyService } from 'src/app/services/faculty.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-faculty-grid',
  templateUrl: './faculty-grid.component.html',
  styleUrls: ['./faculty-grid.component.css']
})
export class FacultyGridComponent implements OnInit {

  facultyList:Faculty[];
  constructor(private faculityService:FacultyService) { }

  ngOnInit() {
    this.facultyGrid();
  }
  facultyGrid() {
    this.faculityService.getFacultyList().subscribe(results => {
      this.facultyList = results;
      console.log(this.facultyList)
    });
  }
  onDelete(object:Faculty) {
    Swal.fire({
      title: `Are you sure want to remove ${object.facultyName}  ?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          `Your ${object.facultyName} record has been deleted.`,
          'success'
        )

        this.faculityService.deleteFaculty(object.facultyId).subscribe(result => {
          console.log(result);
          this.facultyGrid();
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Record is safe :)',
          'error'
        )
      }
    });
  }
}
