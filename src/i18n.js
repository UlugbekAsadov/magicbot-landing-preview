export const defaultLocale = "uz";
export const locales = ["ru", "uz"];

export const getLocalePartsFrom = ({ pathname, locale }) => {
  if (locale) {
    const localeParts = locale.toLowerCase().split("-");
    return {
      lang: localeParts[0],
    };
  } else {
    const pathnameParts = pathname?.toLowerCase().split("/");
    return {
      lang: pathnameParts[1],
    };
  }
};

const dictionaries = {
  ru: () => import("./dictionaries/ru.json").then((module) => module.default),
  uz: () => import("./dictionaries/uz.json").then((module) => module.default),
};

export const getTranslator = async (locale) => {
  const dictionary = await dictionaries[locale]();
  return (key, params) => {
    let translation = key
      .split(".")
      .reduce((obj, key) => obj && obj[key], dictionary);
    if (!translation) {
      return key;
    }
    if (params && Object.entries(params).length) {
      Object.entries(params).forEach(([key, value]) => {
        translation = translation?.replace(`{{ ${key} }}`, String(value));
      });
    }
    return translation;
  };
};
