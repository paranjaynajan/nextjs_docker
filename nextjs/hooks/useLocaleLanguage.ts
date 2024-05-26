import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

/**
 * Custom hook to manage and synchronize the application's locale
 * language with the user's preference. It reads the user's preferred
 * language from query parameters or navigator settings and updates the
 * locale accordingly.
 * 
 * @returns {string} The currently selected locale language.
 */
export function useLocaleLanguage(): string {
  // Access the i18n instance for translation
  const { i18n } = useTranslation();

  // Get the setSearchParams function from react-router-dom
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Get the query parameters from the URL
    const queryParameters = new URLSearchParams(window.location.search);

    // Get the user's locale preference from query parameters or navigator language settings
    const userLocale = queryParameters.get('lang') || navigator.language;

    const supportedLocales: string[] = ['en', 'th'];

    // Find the matched locale based on user preference
    const matchedLocale = supportedLocales.find((locale) => userLocale.startsWith(locale)) || 'en';

    if (matchedLocale) {
      // Update the query parameters to match the user's selected locale
      setSearchParams({ lang: matchedLocale });

      // Change the application's language to the matched locale
      i18n.changeLanguage(matchedLocale);
    }
  }, [i18n, setSearchParams]);

  // Return the currently selected locale language
  return i18n.language;
}
