import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname } = request.nextUrl;

  // 1. kpssyanlisdefteri.com / www.kpssyanlisdefteri.com yönlendirmesi
  if (hostname.includes("kpssyanlisdefteri.com")) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/satelit-kpss", request.url));
    }
  }

  // 2. yanlisdefteri.com / www.yanlisdefteri.com yönlendirmesi
  if (hostname.includes("yanlisdefteri.com")) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/satelit-yanlis", request.url));
    }
  }

  // 3. kesyapistir.app / www.kesyapistir.app yönlendirmesi
  if (hostname.includes("kesyapistir.app")) {
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/satelit-kesyapistir", request.url));
    }
  }

  return NextResponse.next();
}

// Statik dosyaların, API rotalarının ve Next.js iç rotalarının proxy'yi tetiklememesi için matcher
export const config = {
  matcher: [
    /*
     * Aşağıdaki yollarla başlayan istekler HARİÇ tüm istekleri eşleştir:
     * - api (API rotaları)
     * - _next/static (statik dosyalar)
     * - _next/image (görsel optimizasyonu dosyaları)
     * - favicon.ico, favicon.png, karga.png vb. uzantılı statik dosyalar
     */
    "/((?!api|_next/static|_next/image|favicon\\.ico|favicon\\.png|.*\\.(?:png|jpg|jpeg|gif|webp|svg)).*)",
  ],
};
