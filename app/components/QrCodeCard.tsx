"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function QrCodeCard() {
  const [qrUrl, setQrUrl] = useState<string | null>(null);

  useEffect(() => {
    const origin = window.location.origin;
    const installUrl = `${origin}/install`;
    setQrUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(installUrl)}&color=0f172a&bgcolor=ffffff`);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-5 bg-surface/60 backdrop-blur-md p-4 pr-6 rounded-3xl border border-border/80 shadow-md hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
      <div className="relative w-24 h-24 bg-white p-2.5 rounded-2xl border border-border/40 shadow-inner flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
        {qrUrl ? (
          <Image
            src={qrUrl}
            alt="Karga İndirme QR Kodu"
            width={150}
            height={150}
            unoptimized
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-border/20 rounded animate-pulse" />
        )}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-sm font-extrabold text-text-main flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          Hemen Yükle
        </span>
        <span className="text-xs text-text-secondary mt-1.5 leading-relaxed max-w-[170px]">
          Telefonunun kamerasıyla tara, Karga'yı anında indir!
        </span>
      </div>
    </div>
  );
}
