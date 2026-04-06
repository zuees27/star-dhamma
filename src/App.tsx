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
      thumbnail: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Vipassana for Beginners",
      speaker: "S.N. Goenka",
      type: "Meditation",
      thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Metta Sutta Recitation",
      speaker: "Maha Bodhi",
      type: "Sutta",
      thumbnail: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    /* h-screen + overflow-hidden makes the app fit the window exactly */
    <div className="h-screen flex flex-col bg-[#FBFAF8] text-[#2D241E] antialiased overflow-hidden">
      
      {/* 1. Top Flag Bar */}
      <div className="h-1 w-full flex shrink-0">
        <div className="flex-[1] bg-[#0018A8]"></div>
        <div className="flex-[1] bg-[#FEDF00]"></div>
        <div className="flex-[1] bg-[#ED1B24]"></div>
        <div className="flex-[1] bg-[#FFFFFF]"></div>
        <div className="flex-[1] bg-[#FF7ED0]"></div>
      </div>

      {/* 2. Navigation - Fixed Height */}
      <nav className="shrink-0 flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="text-lg font-black tracking-tighter text-gray-900">
          STAR MOVIE <span className="text-amber-700">DHAMMA</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-amber-700">မူလစာမျက်နှာ</a>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-amber-700">တရားတော်များ</a>
          <button className="bg-amber-800 text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-900 transition-all">
            ဓမ္မဒါနပြုရန်
          </button>
        </div>
      </nav>

      {/* 3. Scrollable Main Area */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Hero Section - Height adjusted to fit screen better */}
        <header
          className="relative h-[45vh] min-h-[350px] w-full flex items-center px-8 md:px-16 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80')`,
          }}
        >
          <div className="max-w-2xl">
            <p className="text-amber-800 font-black tracking-[0.2em] text-[10px] mb-3 uppercase">
              Star Movie Dhamma Religious Foundation
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              စိတ်၏အေးချမ်းရာ <br /> 
              <span className="text-amber-800">တရားတော်များ</span>
            </h1>
            <button className="bg-gray-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 shadow-xl transition-transform active:scale-95">
              စတင်နာယူမည်
            </button>
          </div>
        </header>

        {/* Grid Section */}
        <section className="px-8 md:px-16 py-12">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight">
              လတ်တလော တရားတော်များ
            </h2>
            <div className="h-px flex-1 bg-gray-100 mx-6 hidden sm:block"></div>
            <span className="text-amber-700 font-bold text-xs cursor-pointer hover:underline">
              အားလုံးကြည့်ရန် →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contents.map((item) => (
              <div
                key={item.id}
                className={`group bg-white rounded-3xl overflow-hidden transition-all duration-500 border border-gray-50
                  ${hoveredId === item.id ? "-translate-y-2 shadow-2xl" : "shadow-sm"}`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-tighter">
                    {item.type}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-amber-700 text-[9px] font-black uppercase tracking-widest mb-2">{item.speaker}</p>
                  <h3 className="text-md font-bold text-gray-900 leading-snug group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-12 px-8 text-center">
          <p className="text-lg tracking-[0.4em] text-gray-400 font-serif mb-4">သာဓု... သာဓု... သာဓု...</p>
          <p className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase">
            © 2026 • STAR MOVIE DHAMMA RELIGIOUS FOUNDATION
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;