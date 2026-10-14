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

// Yönlendirmeler yalnızca kök yolda. Netlify'da proxy Edge Function olarak çalışır ve
// arkasındaki sayfalar ziyaretçi IP'sini (x-nf-client-connection-ip) doğru göremez;
// /k sayfası bu IP'yi Karga Kodu IP sınırı için ilettiğinden proxy diğer yollarda çalışmaz.
export const config = {
  matcher: ["/"],
};
