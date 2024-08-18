import ThemeSwitch from "@/components/Button/ThemeSwitch";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ThemeProvider from "../theme-provider";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <main className="dark:bg-bg-dark dark:text-gray-dark relative">
              {children}
              <div className="fixed bottom-40 right-0 m-4 flex justify-end">
                <ThemeSwitch />
              </div>
            </main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
