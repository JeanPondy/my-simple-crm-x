import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { User } from '../models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
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
isLoading = false;
  
    constructor(
      private firestore: Firestore,
      private dialogRef: MatDialogRef<DialogEditAddressComponent > // ✅ Dialog-Referenz richtig injizieren
    ) {} 
  
    closeDialog() {
      this.dialogRef.close();
    }
  
    async saveUser() {
/*       console.log('Current User is', this.user);
      this. isLoading = true;
      try {
        const usersCollection = collection(this.firestore, 'users');
        await addDoc(usersCollection, this.user.toJSON());
        console.log('User erfolgreich gespeichert!');
        this. isLoading = false;
        this.dialogRef.close(); // ✅ Dialog jetzt schließen
        window.location.reload();
      } catch (error) {
        console.error('Fehler beim Speichern:', error);
      } */
    }

}
