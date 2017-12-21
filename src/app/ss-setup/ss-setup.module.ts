import { BranchService } from './services/branch/branch.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsSetupRoutingModule } from './ss-setup-routing.module';
import { BranchListComponent } from './components/branch-list/branch-list.component';
import { FormsModule } from '@angular/forms';
import { BranchComponent } from './components/branch/branch.component';
import { BranchAddComponent } from './components/branch-add/branch-add.component';

/**
 * Angular-Firebae module imports
 */

@NgModule({
  imports: [
    CommonModule,
    SsSetupRoutingModule,
    FormsModule
  ],
  declarations: [BranchListComponent, BranchComponent, BranchAddComponent],
  providers: [BranchService]
})
export class SsSetupModule { }
