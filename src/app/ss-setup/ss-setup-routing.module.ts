import { BranchComponent } from './components/branch/branch.component';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const setupRoutes: Routes = [
  {
    path: 'branches',
    component: BranchComponent,
    data: {
        pageTitle: 'Branch Setup'
    }
}];

export const SsSetupRoutingModule: ModuleWithProviders = RouterModule.forChild(setupRoutes);
