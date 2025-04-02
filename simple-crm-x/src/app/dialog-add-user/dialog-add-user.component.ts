import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../models/user.class';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, FormsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatProgressBarModule, CommonModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent { 
  user = new User();
  birthDate: Date = new Date();
  isLoading = false;

  constructor(
    private firestore: Firestore,
    private dialogRef: MatDialogRef<DialogAddUserComponent> // ✅ Dialog-Referenz richtig injizieren
  ) {} 

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
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
    }
  }
}
