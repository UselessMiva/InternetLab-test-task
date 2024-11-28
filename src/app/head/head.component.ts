import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  standalone: true,
  imports: [HeaderComponent],
  styleUrls: ['./head.component.css'],
})
export class HeadComponent {
  constructor(private snackBar: MatSnackBar) {}
  onSubmit(event: Event): void {
    this.snackBar.open('Кнопки нажата!', 'Закрыть', {
      duration: 3000,
    });
  }
}
