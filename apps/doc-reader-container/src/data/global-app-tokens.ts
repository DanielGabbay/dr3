/* ------------------------------------------- Global app tokens: ------------------------------------------- */

// App Global Settings
import {InjectionToken, WritableSignal} from '@angular/core';
import {Language} from './language';
import {localStorageSignal} from '../utils/signals';

type IAppGlobalSettings = {
  language: Language;
};

export class AppGlobalSettings {
  public static readonly STORAGE_KEY = 'APP_GLOBAL_SETTINGS' as const;
  data: WritableSignal<IAppGlobalSettings> = localStorageSignal<IAppGlobalSettings>(
    {
      language: Language.Hebrew
    },
    AppGlobalSettings.STORAGE_KEY
  );

  constructor(init?: Partial<IAppGlobalSettings>) {
    if (init) {
      this.data.update((settings) => {
        return { ...settings, ...init };
      });
    }
  }

  set<K extends keyof IAppGlobalSettings>(
    key: K,
    value: IAppGlobalSettings[K]
  ) {
    this.data.update((settings) => {
      return { ...settings, [key]: value };
    });
  }
}

export const APP_GLOBAL_SETTINGS = new InjectionToken<AppGlobalSettings>(
  'APP_GLOBAL_SETTINGS',
  {
    providedIn: 'root',
    factory: () => new AppGlobalSettings()
  }
);
