import React from 'react';

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col bg-[#FBFAF8] text-[#2D241E] antialiased overflow-hidden">
      
      {/* 1. Top Religious Flag Bar */}
      <div className="h-1.5 w-full flex shrink-0 shadow-sm z-20">
        <div className="flex-[1] bg-[#0018A8]"></div>
        <div className="flex-[1] bg-[#FEDF00]"></div>
        <div className="flex-[1] bg-[#ED1B24]"></div>
        <div className="flex-[1] bg-[#FFFFFF]"></div>
        <div className="flex-[1] bg-[#FF7ED0]"></div>
      </div>

      {/* 2. Navigation */}
      <nav className="shrink-0 flex items-center justify-between px-8 py-5 bg-white/90 backdrop-blur-md border-b border-gray-100 z-20">
        <div className="text-xl font-black tracking-tighter text-gray-900">
          STAR MOVIE <span className="text-amber-700">DHAMMA</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-amber-700 transition-colors">မူလစာမျက်နှာ</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-amber-700 transition-colors">တရားတော်များ</a>
          <button className="bg-amber-800 text-white px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-amber-900 transition-all shadow-lg shadow-amber-900/20">
            ဓမ္မဒါနပြုရန်
          </button>
        </div>
      </nav>

      {/* 3. Main Content Area - Centering the Frame */}
      <main className="flex-1 relative flex items-center justify-center p-4 md:p-10 overflow-hidden">
        
        {/* The Vertical Framed Container */}
        <div className="relative w-full max-w-[450px] h-full max-h-[80vh] rounded-[3.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 border-8 border-white">
          
          {/* Background Image using your provided URL */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
            style={{ 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.2)), url('https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1200&q=80')` 
            }}
          />
          
          {/* Centered Content over the Image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10 z-10">
            <div className="w-12 h-1.5 bg-amber-800 mb-8 rounded-full opacity-80"></div>
            
            <p className="text-amber-900 font-black tracking-[0.4em] text-[10px] mb-4 uppercase">
              Star Movie Dhamma Foundation
            </p>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.2] mb-8">
              စိတ်၏အေးချမ်းရာ <br /> 
              <span className="text-amber-800 italic font-serif">တရားတော်များ</span>
            </h1>
            
            <p className="text-gray-900 max-w-[280px] mb-10 text-sm leading-relaxed font-bold">
              ဘဝ၏အမောများပြေပျောက်စေရန် <br /> တစ်နေရာတည်းတွင် နာယူကြည်ညိုနိုင်ပါသည်။
            </p>

            <button className="bg-gray-900 text-white px-12 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black shadow-2xl transition-all active:scale-95">
              စတင်နာယူမည်
            </button>
          </div>
        </div>
      </main>

      {/* 4. Footer */}
      <footer className="bg-transparent py-8 px-8 text-center shrink-0">
        <p className="text-sm tracking-[0.8em] text-gray-300 font-serif mb-3 uppercase opacity-60">သာဓု သာဓု သာဓု</p>
        <p className="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase">
          © 2026 • STAR MOVIE DHAMMA RELIGIOUS FOUNDATION
        </p>
      </footer>
    </div>
  );
};

export default App;