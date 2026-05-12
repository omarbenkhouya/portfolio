// FILE: src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Read locale from cookie, default to "en"
  const cookieStore = cookies();
  const locale = cookieStore.get("locale")?.value ?? "en";
  const validLocale = ["en", "fr"].includes(locale) ? locale : "en";

  return {
    locale: validLocale,
    messages: (await import(`../../messages/${validLocale}.json`)).default,
  };
});
