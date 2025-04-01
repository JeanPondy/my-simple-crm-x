import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; // Wichtig!

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatDialogModule], // Hier hinzufügen!
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent { }
