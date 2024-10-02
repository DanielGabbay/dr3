import {Component, inject, effect} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Language, LanguageData} from '../data';
import {APP_GLOBAL_SETTINGS} from '../data/global-app-tokens';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [RouterModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected readonly Language = Language;

  protected readonly APP_GLOBAL_SETTINGS = inject(APP_GLOBAL_SETTINGS);

  constructor() {
    effect(() => {
      const globalSettings = this.APP_GLOBAL_SETTINGS.data();
      // language
      document.documentElement.lang = globalSettings.language;
      document.documentElement.dir = LanguageData[globalSettings.language].dir;
    });
  }
}
