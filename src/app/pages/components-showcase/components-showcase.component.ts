import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { NgxKadooka } from 'ngx-kadooka';


@Component({
  selector: 'app-components-showcase',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatDividerModule,
    NgxKadooka
  ],
  templateUrl: './components-showcase.component.html',
  styleUrl: './components-showcase.component.scss'
})
export class ComponentsShowcaseComponent {
  // Form controls
  checkboxValue = false;
  radioValue = 'option1';
  selectValue = 'option1';
  sliderValue = 50;
  toggleValue = false;
  inputValue = '';
  
  // Progress
  progressValue = 60;
  
  // Chips
  chips = ['Angular', 'Material', 'TypeScript'];
  
  // Badge
  badgeCount = 5;
  
  // Tabs
  selectedTab = 0;
  
  // Expansion panel
  panelOpenState = false;
  
  // List items
  listItems = [
    { icon: 'home', title: 'Home', subtitle: 'Main page' },
    { icon: 'settings', title: 'Settings', subtitle: 'Configuration' },
    { icon: 'person', title: 'Profile', subtitle: 'User information' }
  ];
  
  onButtonClick(type: string) {
    console.log(`Button clicked: ${type}`);
  }
  
  addChip(chip: string) {
    if (chip && !this.chips.includes(chip)) {
      this.chips.push(chip);
    }
  }
  
  removeChip(chip: string) {
    this.chips = this.chips.filter(c => c !== chip);
  }
}

