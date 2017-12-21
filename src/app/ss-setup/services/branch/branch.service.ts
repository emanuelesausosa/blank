import { Branch } from './../../models/branch';
import { Injectable } from '@angular/core';
import 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BranchService {

  branchCollection: AngularFirestoreCollection<Branch>;
  branches: Observable<Branch[]>;
  branchDoc: AngularFirestoreDocument<Branch>;

  constructor(public afs: AngularFirestore) {
    this.branchCollection = this.afs.collection('Branch');
    this.branches = this.branchCollection.snapshotChanges().map(
      changes => {
        return changes.map(
          a => {
            const data = a.payload.doc.data() as Branch;
            data.id = a.payload.doc.id;
            return data;
          }
        );
      }
    );
  }

  getBranches() {
    return this.branches;
  }

  addBranch(branch: Branch) {
    this.branchCollection.add(branch);
  }
}
