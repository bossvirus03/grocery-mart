import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { normalizePath } from "./lib/utils";

const privatePaths = ["profile", "home", "cart"];

const unAuthPaths = ["signin", "signup"];
const defaultLocale = "en";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAuth = Boolean(request.cookies.get("loggedIn"));

  const localeMatch = pathname.match(/^\/(en|vi)/);
  const currentLocale = localeMatch ? localeMatch[1] : defaultLocale;
  const normalizedPathname = normalizePath(pathname.replace(/^\/(en|vi)/, ""));

  if (
    privatePaths.some((path) => normalizedPathname.startsWith(path)) &&
    !isAuth
  ) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/signin`, request.url)
    );
  }

  if (
    unAuthPaths.some((path) => normalizedPathname.startsWith(path)) &&
    isAuth
  ) {
    return NextResponse.redirect(
      new URL(`/${currentLocale}/home`, request.url)
    );
  }

  const handleI18nRouting = createMiddleware(routing);
  return handleI18nRouting(request);
}

export const config = {
  matcher: ["/", "/(vi|en)/:path*"],
};
