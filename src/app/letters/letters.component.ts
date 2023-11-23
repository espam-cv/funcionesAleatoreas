import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'app-letters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letters.component.html',
  styleUrl: './letters.component.css'
})
export class LettersComponent {

}

export function lowerCase(chain: string){
  return chain.toLowerCase();
}

export function upperCase(chain: string){
  return chain.toUpperCase();
}