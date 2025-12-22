import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = signal<string>('Gustavo Kadooka');

  public setTheme(theme: string) {
    document.documentElement.classList.remove('light-blue-theme', 'dark-blue-theme', 'light-red-theme', 'dark-red-theme', 'light-green-theme', 'dark-green-theme', 'light-yellow-theme', 'dark-yellow-theme');
    document.documentElement.classList.add(theme);
  }
}
