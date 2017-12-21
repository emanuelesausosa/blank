import { BranchService } from './../../services/branch/branch.service';
import { BranchComponent } from './../branch/branch.component';
import { Component, OnInit } from '@angular/core';
import { Branch } from '../../models/branch';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.css']
})
export class BranchAddComponent implements OnInit {

  branch: Branch = {};
  constructor(public branchService: BranchService) { }

  ngOnInit() {
  }

 addBranch() {
   this.branchService.addBranch(this.branch);
   this.branch = {};
 }

}
