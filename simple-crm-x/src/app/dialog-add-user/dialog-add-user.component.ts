import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; // Wichtig!
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { User } from '../models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, FormsModule, MatDialogModule,MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule ], // Hier hinzufügen!
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent { 
  user = new User();
 
  birthDate: Date = new Date();

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current User is', this.user);
  }
}
