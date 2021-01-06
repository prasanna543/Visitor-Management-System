import { Component, OnInit } from '@angular/core';
import { Guard } from 'src/app/models/Guard';
import { GuardService } from 'src/app/services/guard.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-guard-grid',
  templateUrl: './guard-grid.component.html',
  styleUrls: ['./guard-grid.component.css']
})
export class GuardGridComponent implements OnInit {

  guardList:Guard[];
  constructor(private guardService:GuardService) { }

  ngOnInit() {
    this.guardGrid();
  }
  guardGrid() {
    this.guardService.getGuardList().subscribe(results => {
      this.guardList = results;
      console.log(this.guardList)
    });
  }
  onDelete(object:Guard) {
    Swal.fire({
      title: `Are you sure want to remove ${object.guardName}  ?`,
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          `Your ${object.guardName} record has been deleted.`,
          'success'
        )

        this.guardService.deleteGuard(object.guardId).subscribe(result => {
          console.log(result);
          this.guardGrid();
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
