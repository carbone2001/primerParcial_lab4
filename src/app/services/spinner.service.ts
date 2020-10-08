import { Injectable } from '@angular/core';
import { SpinnerComponent } from '../logica/spinner/spinner.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
    public dialog:MatDialog
  ) { }

  OpenDialog()
  {
    this.dialog.open(SpinnerComponent);
  }
  CloseDialog()
  {
    this.dialog.closeAll();
  }
}
