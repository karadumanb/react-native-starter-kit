import {
  useTranslation as reactUseTranslation,
  Trans as ReactTrans,
} from "react-i18next";
import React from "react";

export default function useTranslation(options: { name?: string }) {
  const { t } = reactUseTranslation();

  const formatMessage: typeof t = (key, opts?) => {
    return t(key, opts);
  };

  const tComponent: typeof t = (key, opts?) => {
    return formatMessage(`components.${options.name}.${key}`, opts);
  };

  const tScreen: typeof t = (key, opts?) => {
    return formatMessage(`screens.${options.name}.${key}`, opts);
  };

  const tConcept: typeof t = (key, opts?) => {
    return formatMessage(`concepts.${options.name}.${key}`, opts);
  };

  const tModule: typeof t = (key, opts?) => {
    return formatMessage(`modules.${options.name}.${key}`, opts);
  };

  const Trans = ({
    i18nKey,
    keyGenerator = "components",
    ...others
  }: {
    keyGenerator?: "components" | "concepts" | "screens" | "modules";
  } & React.ComponentProps<typeof ReactTrans>) => {
    return (
      <ReactTrans i18nKey={`${keyGenerator}.${options.name}.${i18nKey}`} {...others}/>
    );
  };

  return { tComponent, tScreen, tConcept, tModule, Trans };
}
