import "../globals.css";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import FooterWhite from "../components/FooterWhite";
import ChatButton from "../components/ChatButton";
import SimpleHeader from "../components/SimpleHeader";
 
export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <>
        <SimpleHeader />
        {children}
        <ChatButton />
        <FooterWhite />
    </>
  );
}