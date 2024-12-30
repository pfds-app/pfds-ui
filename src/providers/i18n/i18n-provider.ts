import polyglotI18nProvider from "ra-i18n-polyglot";

import { haEnglishMessages } from "./english-message";
import { haFrenchMessages } from "./french-message";

export type SupportedLanguage = "fr" | "en";

export const SUPPORTED_LOCALES: SupportedLanguage[] = ["fr", "en"];

const messages: Record<SupportedLanguage, any> = {
  fr: haFrenchMessages,
  en: haEnglishMessages,
};

export const i18nProvider = polyglotI18nProvider(
  (locale) => messages[locale as SupportedLanguage],
  "fr"
);
