import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {  
  selectedColor: string = 'blue';
  isDarkMode: boolean = true;
  isDropdownOpen: boolean = false;
  
  colors = [
    { value: 'blue', label: 'Azul' },
    { value: 'red', label: 'Vermelho' },
    { value: 'green', label: 'Verde' },
    { value: 'yellow', label: 'Amarelo' }
  ];

  ngOnInit() {
    this.applyTheme();
  }

  selectColor(color: string) {
    this.selectedColor = color;
    this.applyTheme();
    this.isDropdownOpen = false;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const container = target.closest('.theme-dropdown-container');
    if (!container && this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  private applyTheme() {
    const theme = `${this.isDarkMode ? 'dark' : 'light'}-${this.selectedColor}-theme`;
    document.documentElement.classList.remove(
      'light-blue-theme', 'dark-blue-theme', 
      'light-red-theme', 'dark-red-theme', 
      'light-green-theme', 'dark-green-theme', 
      'light-yellow-theme', 'dark-yellow-theme'
    );
    document.documentElement.classList.add(theme);
  }

  public setTheme(theme: string) {
    document.documentElement.classList.remove('light-blue-theme', 'dark-blue-theme', 'light-red-theme', 'dark-red-theme', 'light-green-theme', 'dark-green-theme', 'light-yellow-theme', 'dark-yellow-theme');
    document.documentElement.classList.add(theme);
  }
}
