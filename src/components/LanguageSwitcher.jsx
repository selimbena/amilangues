import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {

  const { t, i18n } = useTranslation();

  function switchLanguage() {
    const lang = i18n.language.split('-')[0];

    if (lang === "fr") {
      i18n.changeLanguage("de");
    }
    else if (lang === "de") {
      i18n.changeLanguage("en");
    }
    else if (lang === "en") {
      i18n.changeLanguage("ar");
    }
    else if (lang === "ar") {
      i18n.changeLanguage("fr");
    }
  }

  return (
    <button
      onClick={switchLanguage}
      style={{
        padding: '0.4rem 0.8rem',
        backgroundColor: 'white',
        color: 'black',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '600',
      }}
      aria-label="Switch Language"
    >
      {t('language')}
    </button>
  );
}

export default LanguageSwitcher;