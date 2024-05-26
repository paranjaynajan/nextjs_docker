import { useTranslation } from "react-i18next";
import { useLocaleLanguage } from "../../hooks/useLocaleLanguage";
import { useLocation, useSearchParams } from "react-router-dom";
import React, { FC } from "react";

/**
 * Component for language switching.
 */
const LanguageSwitch: FC = () => {
  // Get the user's locale language using a custom hook
  const userLocaleLang = useLocaleLanguage();

  // Get the current location from react-router-dom
  const location = useLocation();

  // Access the i18n instance for translation
  const { t, i18n } = useTranslation();

  // Get the setSearchParams function from react-router-dom
  const [, setSearchParams] = useSearchParams();

  /**
   * Event handler for changing the application's language.
   * It updates the language and URL query parameters.
   * 
   * @param evt - The change event triggered by selecting a language from the dropdown.
   */
  const handleLanguageChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    // Get the selected language from the dropdown
    const selectedLanguage: string = evt.target.value;

    // Create a URLSearchParams object for the current URL
    const searchParams = new URLSearchParams(location.search);

    // Change the application's language
    i18n.changeLanguage(selectedLanguage);

    // Update the 'lang' query parameter in the URL
    searchParams.set('lang', selectedLanguage);

    // Set the updated query parameters using setSearchParams
    setSearchParams({ lang: selectedLanguage });
  }

  return (
    <select onChange={handleLanguageChange} value={userLocaleLang}>
      <option value="en">{t("language.en")}</option>
      <option value="th">{t("language.th")}</option>
    </select>
  );
}

export default LanguageSwitch;
