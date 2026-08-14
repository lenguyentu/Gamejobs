"use client";
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ChevronRight, Star, Building2, Clock, DollarSign, Briefcase, Users, Globe, LayoutGrid, Code, Gamepad2, Palette, Mic, CheckSquare, Settings, Megaphone, MoreHorizontal, Target, Paintbrush, Film, Terminal, Bug, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [entranceDone, setEntranceDone] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setEntranceDone(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const [bgPositions, setBgPositions] = useState([
    { x: 10, y: 110 },
    { x: 90, y: 125 },
    { x: 10, y: -45 },
    { x: 80, y: 80 },
    { x: 35, y: 50 },
    { x: 50, y: 50 }
  ]);

  const updatePos = (idx: number, axis: 'x' | 'y', delta: number) => {
    const newPos = [...bgPositions];
    newPos[idx] = { ...newPos[idx], [axis]: newPos[idx][axis] + delta };
    setBgPositions(newPos);
  };

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-slate-50 relative">
      
      {/* Edit Mode Toggle */}
      <button 
        onClick={() => {
          setIsEditMode(!isEditMode);
          if (!isEditMode) setHoveredIdx(null);
        }}
        className={`hidden fixed bottom-6 left-6 z-[100] px-6 py-3 rounded-full font-bold shadow-xl transition-all ${isEditMode ? 'bg-rose-500 text-white animate-pulse' : 'bg-slate-900 text-white'}`}
      >
        {isEditMode ? 'Finish Editing' : 'Edit Thumbnails'}
      </button>

      {/* 
        HERO SECTION - SPLIT DIAGONAL LAYOUT
      */}
      <div className="relative min-h-screen bg-slate-50 overflow-hidden flex flex-col font-sans text-slate-900 group/hero">
        
        {/* Navbar */}
        <nav className={`relative z-50 transition-all duration-[1200ms] ease-in-out ${hoveredIdx !== null ? 'bg-white/10 backdrop-blur-[2px] border-b border-white/10' : 'bg-white/60 backdrop-blur-md border-b border-white/30 shadow-sm'}`}>
          <div className="w-full px-6 lg:px-12 xl:px-24">
            <div className="flex justify-between items-center py-4 md:h-20">
              <div className="flex items-center gap-6 lg:gap-10">
                <a href="/" className="flex items-center">
                  <Image 
                    src="/gamejobslogo.png" 
                    alt="GameJobs Logo" 
                    width={200} 
                    height={60} 
                    className="w-40 sm:w-48 h-auto object-contain transition-all duration-[1200ms]"
                    priority 
                  />
                </a>
                <div className="hidden lg:flex items-center space-x-8 text-sm font-bold">
                  <a href="#" className={`transition-colors ${hoveredIdx !== null ? 'text-orange-400 drop-shadow-md' : 'text-orange-500'}`}>Jobs</a>
                  <a href="#" className={`transition-colors ${hoveredIdx !== null ? 'text-white/90 hover:text-white drop-shadow-md' : 'text-slate-600 hover:text-blue-600'}`}>Companies</a>
                  <a href="#" className={`transition-colors ${hoveredIdx !== null ? 'text-white/90 hover:text-white drop-shadow-md' : 'text-slate-600 hover:text-blue-600'}`}>Talents</a>
                  <a href="#" className={`transition-colors ${hoveredIdx !== null ? 'text-white/90 hover:text-white drop-shadow-md' : 'text-slate-600 hover:text-blue-600'}`}>Salaries</a>
                  <a href="#" className={`flex items-center gap-1 transition-colors ${hoveredIdx !== null ? 'text-white/90 hover:text-white drop-shadow-md' : 'text-slate-600 hover:text-blue-600'}`}>Resources <ChevronRight className="w-3 h-3 rotate-90"/></a>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm font-bold">
                <a href="#" className={`hidden sm:block transition-colors ${hoveredIdx !== null ? 'text-white/90 hover:text-white drop-shadow-md' : 'text-slate-600 hover:text-slate-900'}`}>For Employers</a>
                <div className="flex items-center gap-3">
                  <button className={`px-5 py-2.5 rounded-xl transition-colors ${hoveredIdx !== null ? 'text-white hover:bg-white/20' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}>Log in</button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl transition-all">Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1 flex relative" onMouseLeave={() => { if (!isEditMode) setHoveredIdx(null); }}>
          
          {/* Left Content */}
          <div className={`relative z-10 w-full lg:w-[50%] flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 pb-32 pt-10 pointer-events-none transition-all duration-[1000ms] ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${hoveredIdx !== null && mounted ? 'opacity-0 -translate-x-12' : ''}`}>
            
            {/* CSS Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
            
            {/* Decorative glowing orb behind the text card */}
            <div className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-purple-400/20 rounded-full blur-[100px] pointer-events-none -z-20"></div>

            {/* Geometric HTML/CSS Patterns */}
            {/* Floating Plus Pattern */}
            <div className="absolute top-[15%] left-[5%] text-slate-300 flex items-center justify-center opacity-40 animate-[spin_12s_linear_infinite] pointer-events-none">
              <div className="w-6 h-1 bg-current rounded-full absolute"></div>
              <div className="w-1 h-6 bg-current rounded-full absolute"></div>
            </div>

            {/* Floating Circle Pattern */}
            <div className="absolute top-[8%] right-[10%] xl:right-[15%] pointer-events-none opacity-20">
              <div className="w-16 h-16 border-2 border-dashed border-blue-500 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>

            {/* Floating Dots Pattern */}
            <div className="absolute bottom-[20%] left-[5%] flex gap-2 pointer-events-none opacity-30">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse delay-75"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse delay-150"></div>
            </div>

            {/* Minimal Square */}
            <div className="absolute bottom-[25%] right-[20%] w-8 h-8 border-[1.5px] border-purple-400 rounded opacity-20 transform rotate-12 animate-[bounce_6s_infinite_1s] pointer-events-none"></div>

            <div className="relative p-8 sm:p-10 lg:p-14 max-w-lg lg:max-w-xl xl:max-w-2xl pointer-events-auto">
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-[10px] sm:text-xs tracking-widest uppercase mb-6">
                <div className="flex items-center justify-center relative w-4 h-4">
                  <div className="w-3 h-[2.5px] bg-blue-600 rounded-full absolute"></div>
                  <div className="w-[2.5px] h-3 bg-blue-600 rounded-full absolute"></div>
                </div> 
                UNLOCK NEW OPPORTUNITIES
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-slate-900 tracking-tight leading-[1.1] mb-6">
                Level up your <br/>
                career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500">today.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                Discover exclusive roles at top-tier game studios. From indie devs to AAA giants, your next epic quest starts right here.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2">
                  Start Your Quest <ChevronRight className="w-4 h-4" />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-3.5 rounded-xl font-bold transition-all shadow-sm">
                  Explore Talents
                </button>
              </div>
            </div>
          </div>

          {/* Right Diagonal Slices (Frames for images) */}
          <div className="absolute right-[-10%] top-[-80px] bottom-[-10%] w-[130%] hidden lg:block transform -skew-x-[15deg] z-0">
             
             {/* VISUAL LAYER (Expands dynamically) */}
             <div className={`absolute inset-0 flex pointer-events-none transition-all duration-[1200ms] ease-in-out ${hoveredIdx !== null ? 'translate-y-0 gap-0' : 'translate-y-[92px] gap-3'}`}>
               {/* Spacer / White Card Background */}
               <div 
                 className={`relative transition-all duration-[1200ms] ease-in-out ${hoveredIdx !== null ? 'opacity-0' : ''}`}
                 style={{ flex: hoveredIdx !== null ? `${25 - hoveredIdx} 1 0%` : '6 1 0%' }}
               >
                  <div className="absolute inset-y-0 -left-[100vw] right-0 bg-white rounded-r-[3rem] shadow-[10px_0_40px_rgba(0,0,0,0.05)] border-r border-slate-100"></div>
               </div>

                {[
                  { name: 'ART', jobs: '2,560 Jobs', icon: Paintbrush, color: 'bg-indigo-600/80', img: '/hollow-knight-3840x2160-25418.jpg' },
                  { name: 'ANIMATION', jobs: '1,870 Jobs', icon: Film, color: 'bg-orange-500/80', img: '/image.png', vimeo: '753468610' },
                  { name: 'PROGRAMMING', jobs: '2,340 Jobs', icon: Terminal, color: 'bg-rose-500/80', img: '/upscalemedia-transformed.jpg' },
                  { name: 'QA & TESTING', jobs: '860 Jobs', icon: Bug, color: 'bg-teal-700/80', img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800' },
                  { name: 'PRODUCTION', jobs: '1,100 Jobs', icon: Users, color: 'bg-slate-800/80', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800' },
                  { name: 'MARKETING & BIZ', jobs: '430 Jobs', icon: TrendingUp, color: 'bg-pink-600/80', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800' }
               ].map((cat: any, idx) => (
                 <div 
                   key={idx} 
                   className={`diagonal-slice relative overflow-hidden rounded-3xl shadow-lg transition-all duration-[1200ms] ease-in-out min-w-0 ${hoveredIdx === idx ? 'z-10' : ''} ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[150px]'}`}
                   style={{ 
                     flex: hoveredIdx === idx ? '230 1 0%' : '1 1 0%',
                     transitionDelay: entranceDone ? '0ms' : `${idx * 150 + 200}ms`
                   }}
                 >
                   {/* Image/Video Background */}
                   {cat.video ? (
                     <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className={`absolute top-0 bottom-0 w-[100vw] h-full left-1/2 -translate-x-1/2 object-cover object-center transform skew-x-[15deg] transition-transform duration-[1200ms] ease-in-out ${hoveredIdx === idx ? 'scale-100' : 'scale-[1.05]'}`}
                     >
                       <source src={cat.video} type="video/mp4" />
                     </video>
                   ) : (
                     <div 
                        className={`absolute top-0 bottom-0 w-[100vw] left-1/2 bg-cover transition-all ${isEditMode ? 'duration-75' : 'duration-[1200ms]'} ease-in-out`}
                        style={{ 
                          backgroundImage: `url(${cat.img})`,
                          backgroundPosition: hoveredIdx === idx ? '50% 50%' : `50% ${bgPositions[idx].y}%`,
                          transform: hoveredIdx === idx 
                            ? 'translateX(-50%) skewX(15deg) scale(1)'
                            : `translateX(calc(-50% + ${(bgPositions[idx].x - 50) * 0.8}vw)) skewX(15deg) scale(1.05)`
                        }}
                     ></div>
                   )}
                   
                   {/* Vimeo Overlay */}
                   {cat.vimeo && (
                     <div className={`absolute top-0 bottom-0 w-[100vw] h-full left-1/2 -translate-x-1/2 transform skew-x-[15deg] pointer-events-none overflow-hidden transition-opacity duration-500 ease-in-out ${hoveredIdx === idx ? 'opacity-100' : 'opacity-0'}`}>
                       <iframe 
                         src={`https://player.vimeo.com/video/${cat.vimeo}?background=1&autoplay=1&loop=1&byline=0&title=0`}
                         className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                         frameBorder="0"
                         allow="autoplay; fullscreen; picture-in-picture"
                       ></iframe>
                     </div>
                   )}
                   {/* Color Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 transition-opacity duration-[1200ms] ease-in-out ${hoveredIdx === idx ? 'opacity-40' : 'opacity-70'}`}></div>
                   
                   {/* Content inside slice */}
                   <div className={`absolute top-0 left-0 w-full px-2 sm:px-3 py-6 transform skew-x-[15deg] flex flex-col items-center text-white mt-8 transition-all duration-[500ms] ease-in-out ${hoveredIdx === idx ? 'opacity-0 pointer-events-none translate-y-[-20px]' : 'opacity-100 translate-y-0'}`}>
                     <div className="flex items-center gap-1.5 font-bold text-[10px] sm:text-xs tracking-wider mb-1 text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap">
                       <cat.icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" strokeWidth={2.5} /> 
                       <span className="truncate max-w-[50px] md:max-w-[70px] xl:max-w-none">{cat.name}</span>
                     </div>
                     <div className="text-[9px] sm:text-xs font-semibold opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] whitespace-nowrap">{cat.jobs}</div>
                   </div>

                   {/* Position Controls (Visible only in Edit Mode) */}
                   {isEditMode && (
                     <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md text-white p-1.5 rounded-xl flex flex-col items-center gap-1 z-50 pointer-events-auto transform skew-x-[15deg] shadow-xl border border-white/20">
                        <div className="text-[9px] font-mono text-orange-400 mb-1 text-center leading-tight">{bgPositions[idx].x}%<br/>{bgPositions[idx].y}%</div>
                        <button onClick={() => updatePos(idx, 'y', -5)} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-white/30 text-[10px]">▲</button>
                        <div className="flex gap-1">
                          <button onClick={() => updatePos(idx, 'x', -5)} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-white/30 text-[10px]">◀</button>
                          <button onClick={() => updatePos(idx, 'x', 5)} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-white/30 text-[10px]">▶</button>
                        </div>
                        <button onClick={() => updatePos(idx, 'y', 5)} className="w-6 h-6 flex items-center justify-center bg-white/10 rounded hover:bg-white/30 text-[10px]">▼</button>
                     </div>
                   )}
                 </div>
               ))}

               {/* Right Spacer to maintain exact flex ratio for centered full-screen expansion */}
               <div 
                 className="transition-all duration-[1200ms] ease-in-out"
                 style={{ flex: hoveredIdx !== null ? `${hoveredIdx} 1 0%` : '0 1 0%' }}
               ></div>
             </div>

             {/* HITBOX LAYER (Static, captures mouse events) */}
             <div className={`absolute left-0 right-0 top-[12px] bottom-0 flex gap-3 z-20 ${isEditMode ? 'pointer-events-none' : ''}`}>
               {/* Spacer Hitbox (Left area) */}
               <div 
                 className={isEditMode ? 'pointer-events-none' : 'pointer-events-auto'} 
                 style={{ flex: hoveredIdx !== null ? `${25 - hoveredIdx} 1 0%` : '6 1 0%' }}
                 onMouseEnter={() => { if (!isEditMode && hoveredIdx === null) setHoveredIdx(null); }}
                 onClick={() => { if (!isEditMode) setHoveredIdx(null); }}
               ></div>
               
               {/* Item Hitboxes */}
               {[...Array(6)].map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`${isEditMode ? 'pointer-events-none' : 'pointer-events-auto'} cursor-pointer`}
                   style={{ flex: '1 1 0%' }}
                   onMouseEnter={() => { if (!isEditMode && hoveredIdx === null) setHoveredIdx(idx); }}
                   onClick={() => { if (!isEditMode) setHoveredIdx(idx); }}
                 ></div>
               ))}
             </div>
          </div>

          {/* Navigation Arrows Overlay (Unskewed, full width) */}
          <div className={`absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-32 transition-opacity duration-700 ease-in-out ${hoveredIdx !== null ? 'opacity-100' : 'opacity-0'}`}>
             <button 
               className={`pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all transform ${hoveredIdx === 0 || hoveredIdx === null ? 'opacity-0 scale-90 pointer-events-none' : 'hover:scale-110 hover:border-white/50'}`}
               onClick={() => setHoveredIdx(prev => prev !== null ? Math.max(0, prev - 1) : 0)}
             >
               <ChevronRight className="w-8 h-8 rotate-180" />
             </button>
             
             <button 
               className={`pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all transform ${hoveredIdx === 5 || hoveredIdx === null ? 'opacity-0 scale-90 pointer-events-none' : 'hover:scale-110 hover:border-white/50'}`}
               onClick={() => setHoveredIdx(prev => prev !== null ? Math.min(5, prev + 1) : 5)}
             >
               <ChevronRight className="w-8 h-8" />
             </button>
          </div>

          {/* Bottom fade overlay to blend columns into the white background */}
          <div className={`absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none transition-opacity duration-[1200ms] ease-in-out ${hoveredIdx !== null ? 'opacity-0' : ''}`}></div>
        </div>

        {/* Floating Search Bar */}
        <div className={`absolute bottom-24 left-6 right-6 lg:left-12 lg:right-12 xl:left-24 xl:right-24 z-20 transition-all duration-[1000ms] ease-out ${mounted ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-16'} ${hoveredIdx !== null && mounted ? 'opacity-0 translate-y-12 pointer-events-none delay-0' : ''}`}>
          <div className="bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-3 flex flex-col lg:flex-row items-center gap-4 border border-slate-100">
            
            <div className="flex-1 flex items-center bg-slate-50/50 rounded-xl px-4 py-3 border border-transparent focus-within:border-blue-200 focus-within:bg-white transition-all w-full">
              <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Search jobs, skills, or companies" 
                className="w-full bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 text-sm font-medium"
              />
            </div>
            
            <div className="h-10 w-px bg-slate-200 hidden lg:block"></div>

            <div className="w-full lg:w-56 flex items-center bg-transparent rounded-xl px-4 py-3 border border-transparent hover:bg-slate-50 transition-all cursor-pointer">
              <span className="text-slate-700 text-sm font-bold flex-1">All Categories</span>
              <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
            </div>
            
            <div className="h-10 w-px bg-slate-200 hidden lg:block"></div>

            <div className="w-full lg:w-56 flex items-center bg-transparent rounded-xl px-4 py-3 border border-transparent hover:bg-slate-50 transition-all cursor-pointer">
              <span className="text-slate-700 text-sm font-bold flex-1">All Locations</span>
              <ChevronRight className="w-4 h-4 text-slate-400 rotate-90" />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded-xl font-bold transition-all shadow-md shadow-blue-600/20 text-sm w-full lg:w-auto">
              Search
            </button>
            
            {/* Popular searches next to button on very large screens */}
            <div className="hidden 2xl:flex items-center gap-3 ml-4 text-xs">
               <span className="text-slate-400 font-medium">Popular searches:</span>
               {['Unity', 'Unreal Engine', 'C++', 'Game Designer', '3D Artist'].map(kw => (
                 <a key={kw} href="#" className="text-slate-500 hover:text-blue-600 font-medium transition-colors border border-slate-200 px-3 py-1.5 rounded-lg bg-slate-50">{kw}</a>
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Featured Jobs (LIGHT THEME MAINTAINED) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-slate-50">
        <div className="absolute right-0 top-40 w-72 h-72 bg-[#5942f4]/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="flex justify-between items-end mb-10 relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-3 tracking-tight uppercase">Featured Jobs</h2>
            <p className="text-slate-600 text-lg">Top-tier positions with competitive compensation</p>
          </div>
          <a href="#" className="text-[#5942f4] hover:text-[#4834c9] font-medium flex items-center gap-1 group hidden sm:flex">
            View all <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Job Cards */}
          {[
            { title: 'Senior Unity Developer', company: 'VNGGames', location: 'Ho Chi Minh', salary: 'Up to $3000', type: 'Full-time', hot: true, icon: 'VG' },
            { title: '3D Character Artist', company: 'Sparx* - A Virtuos Studio', location: 'Ho Chi Minh', salary: 'Negotiable', type: 'Full-time', hot: false, icon: 'SP' },
            { title: 'Game Designer', company: 'Amanotes', location: 'Ho Chi Minh', salary: '$1000 - $2000', type: 'Hybrid', hot: true, icon: 'AM' },
            { title: 'Unreal Engine Developer', company: 'Kite Studio', location: 'Hanoi', salary: 'Up to $2500', type: 'Full-time', hot: false, icon: 'KS' },
            { title: '2D UI/UX Artist', company: 'Bravestars Games', location: 'Hanoi', salary: 'Negotiable', type: 'Full-time', hot: false, icon: 'BS' },
            { title: 'Technical Artist', company: 'Topebox', location: 'Da Nang', salary: 'Up to $2000', type: 'Remote', hot: false, icon: 'TB' },
          ].map((job, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#5942f4]/30 transition-all group cursor-pointer flex flex-col relative overflow-hidden">
              {job.hot && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-[100px] -z-10"></div>
              )}
              <div className="flex justify-between items-start mb-5 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 font-bold font-heading text-xl shadow-sm">
                  {job.icon}
                </div>
                {job.hot && (
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm shadow-orange-500/20">
                    <Star className="w-3 h-3 fill-white" /> HOT
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#5942f4] transition-colors mb-2 line-clamp-1">
                {job.title}
              </h3>
              <p className="text-slate-500 font-medium mb-5">{job.company}</p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                <span className="bg-slate-50 text-slate-600 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-100 font-medium">
                  <MapPin className="w-4 h-4 text-slate-400" /> {job.location}
                </span>
                <span className="bg-slate-50 text-slate-600 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-slate-100 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" /> {job.type}
                </span>
                <span className="bg-emerald-50/50 text-slate-700 text-sm px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-emerald-100 font-semibold">
                  <DollarSign className="w-4 h-4 text-emerald-500" /> {job.salary}
                </span>
              </div>
              
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm text-slate-400 font-medium">Posted 2 days ago</span>
                <button className="bg-slate-50 text-[#5942f4] hover:bg-[#5942f4] hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center sm:hidden">
           <button className="border border-[#5942f4]/20 text-[#5942f4] px-6 py-2.5 rounded-xl font-medium w-full hover:bg-[#5942f4]/5 transition-colors">
             View all jobs
           </button>
        </div>
      </section>

      {/* Top Employers Section */}
      <section className="bg-white py-20 border-t border-slate-200 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(89,66,244,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 mb-3 tracking-tight uppercase">Top Game Studios</h2>
          <p className="text-slate-600 text-lg mb-12">Discover opportunities and culture at leading studios</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['VNGGames', 'Amanotes', 'Sparx*', 'Topebox'].map((company, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 border border-transparent hover:bg-white hover:border-slate-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all cursor-pointer group">
                <div className="w-24 h-24 bg-white rounded-2xl border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-10 h-10 text-slate-300 group-hover:text-[#5942f4] transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-slate-900 text-xl group-hover:text-[#5942f4]">{company}</h4>
                  <p className="text-sm text-[#5942f4] font-medium mt-2 bg-[#5942f4]/10 py-1 px-3 rounded-full inline-block">10+ open jobs</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer minimal */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
              <a href="/" className="flex items-center">
                <Image 
                  src="/gamejobslogo.png" 
                  alt="GameJobs Logo" 
                  width={200} 
                  height={60} 
                  className="w-40 sm:w-48 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </a>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm">© 2026 GameJobs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
