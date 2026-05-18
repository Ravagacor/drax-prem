
import React, { useEffect, useState } from "react";

const products = [
  {
    title: "DRAX PANEL V4",
    price: "Rp 150.000",
    video:
      "https://cdn.coverr.co/videos/coverr-gaming-setup-1566026319658?download=1080p",
  },
  {
    title: "DRAX VIP TOOLS",
    price: "Rp 250.000",
    video:
      "https://cdn.coverr.co/videos/coverr-neon-city-night-1564849130222?download=1080p",
  },
  {
    title: "ANDROID PREMIUM",
    price: "Rp 100.000",
    video:
      "https://cdn.coverr.co/videos/coverr-cyberpunk-city-1564849127347?download=1080p",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);

    const audio = document.getElementById("bg-music");

    const playAudio = async () => {
      try {
        await audio?.play();
      } catch (e) {}
    };

    playAudio();
    document.addEventListener("click", playAudio);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", playAudio);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.18),transparent_60%)]"></div>

        <div className="relative z-10 text-center animate-pulse">
          <h1 className="text-6xl md:text-8xl font-black tracking-[10px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            DRAX INJEKTOR
          </h1>

          <div className="w-72 h-2 rounded-full bg-cyan-950 overflow-hidden mt-8">
            <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse"></div>
          </div>

          <p className="mt-6 text-cyan-300 tracking-[4px] text-sm">
            INITIALIZING SYSTEM...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#02030a] text-white min-h-screen overflow-hidden">
      <audio
        id="bg-music"
        src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3?filename=future-bass-fashion-10954.mp3"
        autoPlay
        loop
        preload="auto"
      />

      <header className="fixed top-0 left-0 w-full z-50 border-b border-cyan-400/20 bg-black/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-[6px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              DRAX INJEKTOR
            </h1>
            <p className="text-xs text-cyan-400 tracking-[4px] mt-1">
              PREMIUM CYBER STORE
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-red-500 font-bold animate-pulse">
            LIVE
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-gaming-setup-1566026319658?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="px-5 py-3 rounded-2xl border border-cyan-400/30 bg-black/40">
              100% AMAN
            </div>
            <div className="px-5 py-3 rounded-2xl border border-cyan-400/30 bg-black/40">
              NO BAN
            </div>
            <div className="px-5 py-3 rounded-2xl border border-cyan-400/30 bg-black/40">
              24/7 SUPPORT
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-[10px] mb-4">
            DRAX INJEKTOR
          </h1>

          <p className="text-cyan-100/80 text-lg md:text-2xl tracking-[3px]">
            PRIVATE TOOLS • PREMIUM QUALITY
          </p>

          <button className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black tracking-[4px]">
            ENTER SYSTEM
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black tracking-[6px] text-cyan-300 mb-10">
          PRODUK UNGGULAN
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="rounded-[30px] overflow-hidden border border-cyan-400/20 bg-[#07101d] hover:scale-[1.02] transition duration-500 shadow-[0_0_30px_rgba(0,255,255,0.08)]"
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-fuchsia-400 font-bold text-xl">
                  {item.price}
                </p>

                <button className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black tracking-[3px]">
                  LIHAT DETAIL
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black tracking-[6px] text-cyan-300 mb-10">
          INFO PENTING
        </h2>

        <div className="rounded-[30px] border border-cyan-400/20 bg-[#07101d] overflow-hidden">
          {[
            "Pembayaran dikonfirmasi manual oleh admin",
            "File bisa didownload otomatis setelah konfirmasi",
            "Simpan bukti pembayaran sampai file diterima",
            "Tidak ada refund setelah file terkirim",
          ].map((txt, i) => (
            <div
              key={i}
              className="p-6 border-b border-cyan-400/10 text-cyan-100/80"
            >
              ▸ {txt}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[30px] border border-cyan-400/20 bg-[#07101d] p-10 text-center">
          <h2 className="text-4xl font-black text-cyan-300 mb-6 tracking-[6px]">
            PEMBAYARAN QRIS
          </h2>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=DRAX-INJEKTOR"
            className="mx-auto rounded-2xl"
          />

          <button className="mt-8 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black">
            SAYA SUDAH BAYAR
          </button>
        </div>
      </section>

      <footer className="border-t border-cyan-400/10 py-10 text-center text-cyan-200/50 tracking-[4px]">
        © 2026 DRAX INJEKTOR — ELITE CYBER INTERFACE
      </footer>
    </div>
  );
}

