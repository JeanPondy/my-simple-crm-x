import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {
  userId!: string;
  user: User = new User();


  constructor( private route: ActivatedRoute,  private firestore: Firestore, public dialog: MatDialog, ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => { 
      this.userId = paramMap.get('id') || 'ID nicht gefunden'; 
      console.log('User ID:', this.userId);
      this.getUser();
    });
  }

  async getUser() {
    try {
      const userDocRef = doc(this.firestore, 'users', this.userId!); // Verweis auf das spezifische Dokument
      const userSnap = await getDoc(userDocRef); // Dokument auslesen
      
      if (userSnap.exists()) {
          // Type Assertion
          this.user = new User(userSnap.data() as User); // Daten speichern, wenn das Dokument existiert
        console.log('Retrieved user:', this.user);
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }


  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
    
  }
  editMenu(){
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }
}
