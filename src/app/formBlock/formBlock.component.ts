import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formBlock',
  templateUrl: './formBlock.component.html',
  styleUrls: ['./formBlock.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class FormBlockComponent {
  orderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      tel: ['', [Validators.required, Validators.pattern('^[789][0-9]{10}$')]],
      consent: [false, Validators.requiredTrue],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.orderForm.valid) {
      const formData = this.orderForm.value;
      this.http
        .post('https://jsonplaceholder.typicode.com/posts', formData)
        .subscribe({
          next: (response) => {
            this.snackBar.open('Форма успешно отправлена!', 'Закрыть', {
              duration: 1000,
            });
            this.orderForm.reset();
          },
          error: (error) => {
            this.snackBar.open('Ошибка при отправке формы!', 'Закрыть', {
              duration: 1000,
            });
          },
        });
    } else {
      this.snackBar.open('Форма заполнена некорректно!', 'Закрыть', {
        duration: 1000,
      });
    }
  }
}
