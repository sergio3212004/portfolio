import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import "server-only";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>;

export const getDictionary = async (locale?: string): Promise<Dictionary> => {
  const currentLocale = (locale || (await lang())) as Locale;
  if (!hasLocale(currentLocale)) notFound();
  return dictionaries[currentLocale]();
};
