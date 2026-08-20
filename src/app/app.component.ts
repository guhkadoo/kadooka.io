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
  selectedColor: string = 'green';
  selectedLanguage: string = 'pt';
  isDarkMode: boolean = false;
  isSettingsOpen: boolean = false;

  colors = [
    { value: 'blue', label: 'Azul' },
    { value: 'red', label: 'Vermelho' },
    { value: 'green', label: 'Verde' },
    { value: 'yellow', label: 'Amarelo' },
    { value: 'purple', label: 'Roxo' }
  ];

  ngOnInit() {
    this.loadPreferences();
    this.applyTheme();
  }

  toggleSettings() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  setDarkMode(enabled: boolean) {
    this.isDarkMode = enabled;

    localStorage.setItem(
      'theme_dark_mode',
      this.isDarkMode.toString()
    );

    this.applyTheme();
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;

    localStorage.setItem(
      'language',
      language
    );
  }

  selectColor(color: string) {
    this.selectedColor = color;

    localStorage.setItem(
      'theme_color',
      color
    );

    this.applyTheme();
  }

  private loadPreferences() {
    const savedColor = localStorage.getItem('theme_color');

    if (savedColor) {
      this.selectedColor = savedColor;
    }

    const savedDarkMode = localStorage.getItem('theme_dark_mode');

    if (savedDarkMode) {
      this.isDarkMode = savedDarkMode === 'true';
    } else {
      this.isDarkMode =
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const savedLanguage = localStorage.getItem('language');

    if (savedLanguage) {
      this.selectedLanguage = savedLanguage;
    }
  }

  private applyTheme() {
    const theme = `${this.isDarkMode ? 'dark' : 'light'}-${this.selectedColor}-theme`;

    document.documentElement.classList.remove(
      'light-blue-theme',
      'dark-blue-theme',
      'light-red-theme',
      'dark-red-theme',
      'light-green-theme',
      'dark-green-theme',
      'light-yellow-theme',
      'dark-yellow-theme',
      'light-purple-theme',
      'dark-purple-theme'
    );

    document.documentElement.classList.add(theme);
  }
}