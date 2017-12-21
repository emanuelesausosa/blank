import { Branch } from './../../models/branch';
import { BranchService } from './../../services/branch/branch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: Branch[] = [];
  constructor(public branchService: BranchService) {
   }

  ngOnInit() {
      this.branchService.getBranches().subscribe(t => {
      this.branches = t;
    });
  }

}
