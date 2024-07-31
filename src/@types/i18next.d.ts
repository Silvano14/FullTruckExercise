// import the original type declarations
import "i18next";
// import all namespaces (for the default language, only)
import it from "../../locales/it/index.json";
import en from "../../locales/en/index.json";

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    // custom namespace type, if you changed it
    defaultNS: "it";
    // custom resources type
    resources: {
      it: typeof it;
      en: typeof en;
    };
  }
}
