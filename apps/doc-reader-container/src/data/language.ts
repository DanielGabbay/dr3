export const Language = {
  Hebrew: 'he',
  English: 'en',
} as const;
export type Language = (typeof Language)[keyof typeof Language];
/* -------------------------------------------------------------------------------------------------------------- */
export type ILanguageData = {
  language: Language;
  dir: 'ltr' | 'rtl';
};

export const LanguageData: Record<Language, ILanguageData> = {
  [Language.Hebrew]: {
    language: Language.Hebrew,
    dir: 'rtl',
  },
  [Language.English]: {
    language: Language.English,
    dir: 'ltr',
  },
} as const;
/* -------------------------------------------------------------------------------------------------------------- */
