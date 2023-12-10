import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const defaultLocale = 'zh-TW';

export const locales = [defaultLocale, 'en'] as const;

export const {
	Link: NextIntlLink,
	redirect,
	usePathname,
	useRouter,
} = createSharedPathnamesNavigation({ locales });

