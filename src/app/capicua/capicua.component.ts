import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-capicua',
  standalone: true,
  imports: [MaterialModule, FormsModule],
  templateUrl: './capicua.component.html',
  styleUrls: ['./capicua.component.scss']
})
export class CapicuaComponent {
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