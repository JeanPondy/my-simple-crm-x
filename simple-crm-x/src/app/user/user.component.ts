import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule, TooltipPosition} from '@angular/material/tooltip';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users: User[] = []; 

  constructor(public dialog: MatDialog, private firestore: Firestore) {}


  position: TooltipPosition = 'above'; // Define Tooltip Position

  ngOnInit(): void {
  this.loadUsers();
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  async loadUsers() {
    try {
      const usersCollection = collection(this.firestore, 'users');
      const userSnapshot = await getDocs(usersCollection);
      
      // User-Objekte mit ID aus Firestore holen
      this.users = userSnapshot.docs.map(doc => new User({ id: doc.id, ...doc.data() }));
      
      // Vollständige User-Daten ausgeben
      console.log('Received changes from DB:', this.users);
    } catch (error) {
      console.error('Error loading users:', error);
    }
  }
}
