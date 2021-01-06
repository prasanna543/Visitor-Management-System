import { Component, OnInit } from '@angular/core';
import { Visitor } from 'src/app/models/Visitor';
import { VisitorService } from 'src/app/services/visitor.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-visitor-grid',
  templateUrl: './visitor-grid.component.html',
  styleUrls: ['./visitor-grid.component.css']
})
export class VisitorGridComponent implements OnInit {

  visitorList: Visitor[];
  constructor(private visitorData: VisitorService) { }

  ngOnInit() {
    this.visitorGrid()
  }

  visitorGrid() {
    this.visitorData.getEmployeesList().subscribe(results => {
      this.visitorList = results;
      console.log(this.visitorList)
    });
  }
  onDelete(object:Visitor) {
    Swal.fire({
      title: `Are you sure want to remove ${object.visitorName}  ?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          `Your ${object.visitorName} record has been deleted.`,
          'success'
        )

        this.visitorData.deleteEmployee(object.visitorId).subscribe(result => {
          console.log(result);
          this.visitorGrid();
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
