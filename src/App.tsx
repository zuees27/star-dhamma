import React, { useState } from "react";

interface DhammaContent {
  id: number;
  title: string;
  speaker: string;
  thumbnail: string;
  type: "Sutta" | "Dhamma Talk" | "Meditation";
}

const App: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const contents: DhammaContent[] = [
    {
      id: 1,
      title: "Morning Paritta Chants",
      speaker: "Traditional",
      type: "Sutta",
      thumbnail:
        "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Vipassana for Beginners",
      speaker: "S.N. Goenka",
      type: "Meditation",
      thumbnail:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Metta Sutta Recitation",
      speaker: "Maha Bodhi",
      type: "Sutta",
      thumbnail:
        "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFAF8] text-[#2D241E] antialiased selection:bg-amber-200">
      {/* Subtle Flag Gradient Line */}
      <div className="h-1 w-full flex">
        <div className="flex-[1] bg-[#0018A8]"></div>
        <div className="flex-[1] bg-[#FEDF00]"></div>
        <div className="flex-[1] bg-[#ED1B24]"></div>
        <div className="flex-[1] bg-[#FFFFFF]"></div>
        <div className="flex-[1] bg-[#FF7ED0]"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#FBFAF8]/80 backdrop-blur-md border-b border-gray-100">
        <div className="text-lg font-black tracking-widest text-gray-900">
          STAR <span className="text-amber-700">DHAMMA</span>
        </div>
        <div className="hidden md:flex items-center gap-9">
          <a
            href="#home"
            className="text-sm font-medium text-gray-500 hover:text-amber-700 transition-colors"
          >
            မူလစာမျက်နှာ
          </a>
          <a
            href="#dhamma"
            className="text-sm font-medium text-gray-500 hover:text-amber-700 transition-colors"
          >
            တရားတော်များ
          </a>
          <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-transform active:scale-95">
            ဓမ္မဒါနပြုရန်
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-[70vh] w-full flex items-center px-8 md:px-16 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80')`,
        }}
      >
        <div className="max-w-2xl">
          <p className="text-amber-700 font-bold tracking-wider text-sm mb-3 uppercase">
            Ehipassiko — ကြွလှမ်းခဲ့၍ ရှုစားလော့
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            စိတ်၏အေးချမ်းရာ <br />{" "}
            <span className="text-amber-800">တရားတော်များ</span>
          </h1>
          <div className="flex gap-4">
            <button className="bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-800 shadow-lg shadow-amber-700/20 transition-all active:scale-95">
              စတင်နာယူမည်
            </button>
            <button className="bg-white/80 border border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-all">
              အဖွဲ့အကြောင်း
            </button>
          </div>
        </div>
      </header>

      {/* Content Section */}
      <section id="dhamma" className="px-8 md:px-16 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="relative w-fit text-3xl font-bold text-gray-900 cursor-pointer group">
            လတ်တလော တရားတော်များ
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </h2>{" "}
          <span className="text-amber-700 font-bold text-sm cursor-pointer hover:underline underline-offset-4">
            အားလုံးကြည့်ရန် →
          </span>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {contents.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-[32px] overflow-hidden transition-all duration-500 cursor-pointer border border-gray-50
                ${hoveredId === item.id ? "-translate-y-3 shadow-2xl shadow-gray-200" : "shadow-sm"}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {item.type}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-amber-700 text-xs font-black uppercase tracking-widest mb-3">
                  {item.speaker}
                </p>
                <h3 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-[#F9F7F2] py-20 px-8 text-center">
        <div className="max-w-sm mx-auto">
          <p className="text-2xl tracking-[0.3em] opacity-90 font-serif">
            သာဓု... သာဓု... သာဓု...
          </p>
          <div className="h-px bg-white/10 my-8"></div>
          <p className="text-[10px] opacity-40 tracking-widest uppercase">
            © 2026 • Star Movie Dhamma Religious Foundation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
