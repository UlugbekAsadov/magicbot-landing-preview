import { NextRequest, NextResponse } from "next/server";

import { defaultLocale, locales, getLocalePartsFrom } from "./i18n";
//
// export function middleware(request) {
//   const pathname = request.nextUrl.pathname;
//
//   const defaultLocaleParts = getLocalePartsFrom({ locale: defaultLocale });
//   const currentPathnameParts = getLocalePartsFrom({ pathname });
//   if (currentPathnameParts.lang === defaultLocaleParts.lang) {
//     return NextResponse.redirect(
//       new URL(
//         pathname.replace(`/${defaultLocaleParts.lang}`, pathname.startsWith("/") ? "/" : ""),
//         request.url,
//       ),
//     );
//   }
//
//   const pathnameIsMissingValidLocale = locales.every((locale) => {
//     const localeParts = getLocalePartsFrom({ locale });
//     return !pathname.startsWith(`/${localeParts.lang}`);
//   });
//
//   if (pathnameIsMissingValidLocale) {
//     return NextResponse.rewrite(new URL(`/${defaultLocaleParts.lang}${pathname}`, request.url));
//   }
// }
//
// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
//   ],
// };

// import { NextRequest, NextResponse } from "next/server";
//
// import { defaultLocale, locales } from "./i18n";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingValidLocale = locales.every((locale) => {
    return !pathname.includes(locale);
  });

  if (pathnameIsMissingValidLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.nextUrl.origin),
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};
