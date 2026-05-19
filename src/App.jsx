import React, { useEffect, useState } from "react";

const fioProducts = [
  {
    badge: "BEST",
    title: "PAKET STANDAR",
    sub: "[FIO BASIC]",
    price: "50K",
    tag: "STARTER",
    desc: "Paket basic untuk gameplay smooth dan stabil.",
    benefits: [
      "Optimize sensi",
      "Smooth aim",
      "Sensitivity weapons",
      "Sensi X/Y",
    ],
  },
  {
    badge: "POPULAR",
    title: "PAKET MENENGAH",
    sub: "[FIO HEADTCK]",
    price: "100K",
    tag: "MOST USED",
    desc: "Aim lebih stabil dan recoil lebih presisi.",
    benefits: [
      "Optimize sensi V1",
      "Smooth aim",
      "Recoil precision",
      "Sensitivity weapons",
    ],
  },
  {
    badge: "PREMIUM",
    title: "PAKET PREMIUM",
    sub: "[FIO EXTRIME]",
    price: "150K",
    tag: "HIGH AIM",
    desc: "Paket competitive gameplay premium.",
    benefits: [
      "Optimize sensi V2",
      "Smooth aim V2",
      "Recoil precision",
      "Advanced Commands",
    ],
  },
];

const sxrProducts = [
  {
    badge: "HOT",
    title: "SXR TOOLS",
    sub: "HEADTRICK",
    price: "50K",
    tag: "TOOLS",
    desc: "Tools optimasi performa dan sensitivitas.",
    benefits: [
      "FPS lebih stabil",
      "Aim lebih presisi",
      "Monitoring performance",
      "Crosshair tambahan",
    ],
  },
  {
    badge: "NEW",
    title: "XIT APP",
    sub: "SHADOW",
    price: "50K",
    tag: "STABILIZER",
    desc: "Aplikasi stabilisasi sensitivitas gameplay.",
    benefits: [
      "Spray stabil",
      "Gameplay nyaman",
      "Touch smooth",
      "Anti goyang",
    ],
  },
  {
    badge: "PREMIUM",
    title: "XIT APP",
    sub: "SXR PANEL",
    price: "100K",
    tag: "FAST TOUCH",
    desc: "Panel touch ultra fast dan minim delay.",
    benefits: [
      "Delay minim",
      "Aim presisi",
      "Touch cepat",
      "Gaming panel",
    ],
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl"></div>

        <div className="text-center animate-pulse z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-[10px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            DRAX INJEKTOR
          </h1>

          <p className="mt-6 text-cyan-300 tracking-[5px]">
            INITIALIZING SYSTEM...
          </p>
        </div>
      </div>
    );
  }

  const renderCard = (item, i) => (
    <div
      key={i}
      className="relative overflow-hidden rounded-[35px] border border-cyan-400/20 bg-[#081120]/80 backdrop-blur-xl p-8 hover:scale-[1.03] transition duration-500 shadow-[0_0_40px_rgba(0,255,255,0.12)]"
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-cyan-400 to-fuchsia-500"></div>

      <div className="relative z-10">
        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black text-xs font-black tracking-[3px]">
          {item.badge}
        </div>

        <h2 className="mt-6 text-3xl font-black leading-tight">
          {item.title}
          <br />
          <span className="text-cyan-300">{item.sub}</span>
        </h2>

        <p className="mt-4 text-cyan-100/70">
          {item.desc}
        </p>

        <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-black/30 p-5">
          <h3 className="text-5xl font-black text-fuchsia-400">
            {item.price}
          </h3>

          <span className="text-cyan-300 tracking-[3px] text-sm">
            {item.tag}
          </span>
        </div>

        <ul className="mt-6 space-y-3 text-cyan-100/80">
          {item.benefits.map((b, x) => (
            <li key={x}>✦ {b}</li>
          ))}
        </ul>

        <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black tracking-[3px] hover:scale-[1.02] transition">
          BUY NOW
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#020617] text-white min-h-screen overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-neon-city-night-1564849130222?download=1080p"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute top-0 left-0 w-full border-b border-cyan-400/10 bg-black/20 backdrop-blur-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-black tracking-[6px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              DRAX INJEKTOR
            </h1>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black">
              PREMIUM
            </button>
          </div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="inline-block px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 mb-6">
            FUTURISTIC CYBER INTERFACE
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-[10px]">
            DRAX INJEKTOR
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-cyan-100/70 text-lg md:text-2xl">
            Premium tools, injector, panel, dan cyber utility dengan
            tampilan modern elite futuristic UI.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black tracking-[3px]">
              OPEN STORE
            </button>

            <button className="px-10 py-4 rounded-2xl border border-cyan-400/20 bg-black/20">
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-16 tracking-[6px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          FIO PACKAGE
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {fioProducts.map(renderCard)}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-black text-center mb-16 tracking-[6px] bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
          SXR TOOLS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sxrProducts.map(renderCard)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-[35px] border border-cyan-400/20 bg-[#081120] p-10 text-center">
          <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            QRIS PAYMENT
          </h2>

          <p className="mt-5 text-cyan-100/60">
            Scan QR untuk melakukan pembayaran premium package.
          </p>

          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=DRAX-INJEKTOR"
            className="mx-auto mt-10 rounded-3xl border border-cyan-400/20"
          />

          <button className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-black tracking-[3px]">
            CONFIRM PAYMENT
          </button>
        </div>
      </section>

      <footer className="border-t border-cyan-400/10 py-10 text-center text-cyan-100/40 tracking-[4px]">
        © 2026 DRAX INJEKTOR — FUTURISTIC CYBER UI
      </footer>
    </div>
  );
}
