import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatProgressBarModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    CommonModule,
    MatInputModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user = new User();
  isLoading = false;

  constructor(
    private firestore: Firestore,
    private dialogRef: MatDialogRef<DialogEditUserComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

  async saveUser() {
    // TODO: Save-Logik wie in dialog-edit-address
  }
}
