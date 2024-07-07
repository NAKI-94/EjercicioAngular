import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tapicua',
  standalone: true,
  imports: [MaterialModule,FormsModule],
  templateUrl: './tapicua.component.html',
  styleUrl: './tapicua.component.scss'
})
export class TapicuaComponent {
  inputText: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome() {
    const cleanedText = this.inputText.replace(/[\W_]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    this.isPalindrome = cleanedText === reversedText;
    setTimeout(() => {
      this.inputText = ''; 
      this.isPalindrome = null;  
    }, 3000); 
  }
}
