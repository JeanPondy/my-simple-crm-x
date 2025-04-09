import { Component } from '@angular/core';
import { User } from '../models/user.class';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
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
  isLoading: boolean = false;
 userId: string = '';

  constructor(
    private firestore: Firestore,
    private dialogRef: MatDialogRef<DialogEditUserComponent>
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }

 

  ngOnInit(){
    console.log('User ID:', this.userId); 
  } 

async updateUser() {
    if (!this.userId) {
      console.error('userId is missing!');
      return;
    }

    this.isLoading = true;

    try {
      const userDocRef = doc(this.firestore, 'users', this.userId);

      await updateDoc(userDocRef, this.user.toJSON());
      
      console.log('User updated successfully:', this.user.toJSON());
      this.dialogRef.close();
      window.location.reload(); 
    } catch (error) {
      console.error('Error updating user:', error);
    } finally {
      this.isLoading = false;
    }
  } 
}
