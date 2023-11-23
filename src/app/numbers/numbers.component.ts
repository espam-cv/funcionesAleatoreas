import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-numbers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css',
})
export class NumbersComponent {}

export function split(num1: number, num2: number) {
  return num1 / num2;
}

export function multiply(num1: number, num2: number) {
  return num1 * num2;
}

export function power(base: number, exponente: number) {
  return Math.pow(base, exponente);
}

export function subtract(num1: number, num2: number) {
  return num1 - num2;
}

export function sum(num1: number, num2: number) {
  return num1 + num2;
}

