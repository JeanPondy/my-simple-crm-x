import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';
import { doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDialogModule, MatProgressBarModule, CommonModule, FormsModule],
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
 user = new User;
 isLoading: boolean = false;
 userId: string = ''; 
  
    constructor(
      private firestore: Firestore,
      private dialogRef: MatDialogRef<DialogEditAddressComponent > // ✅ Dialog-Referenz richtig injizieren
    ) {} 
  
  
  ngOnInit(){
    console.log('User ID:', this.userId); 
  } 

  closeDialog() {
    this.dialogRef.close();
  }
 
  async updateAddress() {
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
