
import { useState, useEffect } from "react"
import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"
import { 
  Sparkles, 
  Cpu, 
  Shield, 
  ChevronRight, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  Atom, 
  Layers, 
  ArrowUpRight 
} from "lucide-react"

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 selection:bg-purple-500 selection:text-white overflow-x-hidden font-sans">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-white z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* WebGL generative canvas background */}
      <div className="fixed inset-0 z-0 opacity-100 pointer-events-none">
        <WebGLShader />
        {/* Dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#030303_100%)] opacity-20" />
      </div>

      {/* Neon Glow Spots */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] neon-glow-spot-1 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] h-[50%] neon-glow-spot-2 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Subtle fine grid overlay */}
      <div className="fixed inset-0 grid-overlay opacity-30 pointer-events-none z-0" />

      {/* Floating Glassmorphism Navbar */}
      <header className="fixed top-6 inset-x-4 md:inset-x-8 z-40 max-w-7xl mx-auto">
        <nav className="glassmorphism rounded-full px-6 py-4 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Logo brand */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-calligraphy text-3xl text-neon-white hover:text-white transition-colors duration-300">
              Zalpha-O
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest border border-blue-900/30 px-1.5 py-0.5 rounded text-neon-white bg-blue-950/20">
              AI-01
            </span>
          </a>

          {/* Nav Items - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              The Vision
            </a>
            <a href="#wearables" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              Services
            </a>
            <a href="#atelier" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              Performance
            </a>
            <a href="#portal" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              Inquire
            </a>
          </div>

          {/* Action Button & Sound Control */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              title={isMuted ? "Unmute atmospheric background" : "Mute atmospheric background"}
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <MetalButton variant="primary" className="text-xs h-9 px-4 rounded-full uppercase tracking-wider" onClick={() => document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Started
            </MetalButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setIsMuted(!isMuted)} 
              className="p-2 rounded-full border border-white/10 text-zinc-400 hover:text-white"
            >
              {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="mt-2 mx-2 p-6 glassmorphism rounded-3xl flex flex-col gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
            <a 
              href="#vision" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              The Vision
            </a>
            <a 
              href="#wearables" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              Services
            </a>
            <a 
              href="#atelier" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              Performance
            </a>
            <a 
              href="#portal" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              Inquire
            </a>
            <div className="pt-2 flex justify-center">
              <MetalButton variant="primary" className="w-full text-xs uppercase tracking-wider" onClick={() => { setIsMenuOpen(false); document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Get Started
              </MetalButton>
            </div>
          </div>
        )}
      </header>

      {/* Main Fullscreen Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 md:px-8 z-10 max-w-7xl mx-auto">
        
        {/* Center luxury layout frame */}
        <div className="relative p-2 w-full max-w-3xl mx-auto z-10">
          <main className="relative py-12 px-6 md:py-16 md:px-12 text-center rounded-2xl bg-white/[0.03] backdrop-blur-[2px] border border-white/5">
            
            {/* Live Indicator */}
            <div className="mb-6 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pink-500"></span>
              </span>
              <p className="text-[10px] font-mono tracking-widest text-pink-400 uppercase">
                <span className="font-calligraphy text-neon-white normal-case text-sm">Zalpha-O</span> Digital Systems: Connected
              </p>
            </div>

            {/* Luxurious Brand Calligraphy Heading */}
            <h1 className="mb-2 select-none leading-none">
              <span className="block font-calligraphy text-6xl md:text-8xl lg:text-9xl text-neon-white pb-4">
                Zalpha-O
              </span>
            </h1>

            {/* Oversized Cinematic Tagline */}
            <p className="font-brand-accent text-glow-white text-white text-xl md:text-2xl lg:text-3xl italic tracking-wide max-w-2xl mx-auto mb-6">
              Growth. Code. Automation.
            </p>

            {/* Premium editorial content details */}
            <p className="text-zinc-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed tracking-wider mb-8">
              A collision of programmatic marketing strategy, custom frontend engineering, and autonomous workflow automations. 
              We design premium digital growth engines for high-scale enterprise operations.
            </p>
            
            {/* Interactive Liquid Glass CTA */}
            <div className="flex justify-center relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000" />
              <LiquidButton className="text-white border border-white/20 rounded-full uppercase tracking-widest font-mono text-xs px-8 py-3 bg-black/40 backdrop-blur-md" size="xl" onClick={() => document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' })}>
                Deploy Systems
              </LiquidButton>
            </div> 

            {/* Systems specifications stats at the bottom of the hero frame */}
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-2 md:gap-4 text-center">
              <div>
                <p className="text-xs font-mono text-zinc-500 tracking-wider">MARKETING</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">GROWTH LOOPS</p>
              </div>
              <div className="border-x border-white/5">
                <p className="text-xs font-mono text-zinc-500 tracking-wider">DEVELOPMENT</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">INTERACTIVE WEB</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 tracking-wider">AUTOMATION</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">AUTONOMOUS WORKFLOWS</p>
              </div>
            </div>

          </main>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-bounce cursor-pointer z-10" onClick={() => {
          document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll to Explore</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-purple-500 to-transparent" />
        </div>

      </section>

      {/* High-End Editorial Storytelling: The Vision */}
      <section id="vision" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Asymmetrical Description block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 border border-purple-500/20 px-3 py-1 rounded-full bg-purple-950/10">
              <Sparkles className="size-3.5 text-purple-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              The Genesis of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Autonomous Growth</span>
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wider">
              Traditional agencies focus on superficial designs. <span className="font-calligraphy text-neon-white text-base">Zalpha-O</span> crafts highly functional web systems that capture intent. 
              Every project is an integration of front-end engineering, performance marketing channels, and backend workflow automation, translating complex requirements into automated digital leverage.
            </p>

            <blockquote className="border-l-2 border-pink-500 pl-4 py-1 italic text-zinc-300 text-xs tracking-wider">
              "We do not build static websites. We design self-optimizing pipelines that convert traffic into revenue."
            </blockquote>

            <div className="pt-4 flex items-center gap-4">
              <MetalButton variant="bronze" className="text-xs uppercase tracking-wider py-2.5 px-5" onClick={() => document.getElementById('wearables')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore Services
              </MetalButton>
            </div>
          </div>

          {/* Asymmetrical Visual Column (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Visual card 1 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
              <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/25 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="size-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Growth Marketing</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Behavioral data analysis, programmatic SEO campaigns, and multi-channel marketing loops to scale acquisitions.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-purple-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Learn Strategy <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 2 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 group md:translate-y-6">
              <div className="size-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/25 mb-4 group-hover:scale-110 transition-transform">
                <Atom className="size-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Modern Web Dev</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Immersive frontends designed with React, TypeScript, and modern animations engineered for zero-latency load speed.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-pink-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Inspect Stack <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 3 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/25 mb-4 group-hover:scale-110 transition-transform">
                <Layers className="size-5 text-white" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Workflow Automation</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                AI agents, custom API integrations, scheduled web scrapers, and database synchronizations that reduce overhead.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-white font-mono tracking-widest uppercase cursor-pointer hover:text-zinc-400 transition-colors">
                View pipelines <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 4 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group md:translate-y-6">
              <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/25 mb-4 group-hover:scale-110 transition-transform">
                <Shield className="size-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Secure Architectures</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Encrypted database interfaces, robust API integrations, serverless hosting, and secure user data pipelines.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-purple-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Check Protocols <ChevronRight className="size-3" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Showcase */}
      <section id="wearables" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 border border-pink-500/20 px-3 py-1 rounded-full bg-pink-950/10">
            <span className="text-[10px] font-mono tracking-widest text-pink-400 uppercase">Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Core <span className="font-brand-accent italic text-glow-pink">Growth</span> Suite
          </h2>
          <p className="text-zinc-400 max-w-xl text-xs md:text-sm tracking-wider leading-relaxed">
            High-performance marketing setups, frontend development, and custom workflow automations. Engineered for absolute leverage.
          </p>
        </div>

        {/* 3 Column Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glassmorphism rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/25 transition-all duration-500 flex flex-col group">
            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              {/* Fallback pattern representing lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="size-36 rounded-full border border-purple-500/20 absolute blur-xl animate-pulse" />
              
              {/* Graphic Symbol */}
              <div className="z-10 text-center px-4 space-y-3">
                <span className="text-[10px] font-mono tracking-widest border border-purple-500/30 text-purple-400 bg-purple-950/30 px-2 py-0.5 rounded">
                  SUITE: MARKETING
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic">Performance Growth</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Data-driven user acquisition, high-converting ad funnels, programmatic SEO, and behavioral marketing setups.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/60 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">ESTIMATED ROAS</span>
                <span className="text-white">4.8x (AVG)</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">KPI TARGET</span>
                <span className="text-purple-400">CONVERSION LIFT</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="primary" className="w-full text-xs uppercase tracking-widest h-10" onClick={() => document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' })}>
                  Explore Funnels
                </MetalButton>
              </div>
            </div>
          </div>

          {/* Card 2 (Gold variant Highlight) */}
          <div className="glassmorphism rounded-2xl overflow-hidden border border-purple-500/20 hover:border-pink-500/25 transition-all duration-500 flex flex-col group relative md:-translate-y-4">
            {/* Absolute badge */}
            <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full uppercase font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Most Selected
            </div>

            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#311042_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="size-36 rounded-full border border-pink-500/20 absolute blur-xl animate-pulse" />
              
              {/* Graphic Symbol */}
              <div className="z-10 text-center px-4 space-y-3">
                <span className="text-[10px] font-mono tracking-widest border border-pink-500/30 text-pink-400 bg-pink-950/30 px-2 py-0.5 rounded">
                  SUITE: DEVELOPMENT
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic text-glow-magenta">Interactive Web Dev</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Vibrant, high-fidelity frontends built with React, TypeScript, and modern animations engineered for zero-latency load speed.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/80 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">CORE VITALS</span>
                <span className="text-white">99/100 SPEED</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">FRAMEWORK</span>
                <span className="text-pink-400">REACT + TS + VITE</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="gold" className="w-full text-xs uppercase tracking-widest h-10" onClick={() => document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' })}>
                  Deploy Frontend
                </MetalButton>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glassmorphism rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/25 transition-all duration-500 flex flex-col group">
            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="size-36 rounded-full border border-white/10 absolute blur-xl animate-pulse" />
              
              {/* Graphic Symbol */}
              <div className="z-10 text-center px-4 space-y-3">
                <span className="text-[10px] font-mono tracking-widest border border-zinc-700 text-zinc-400 bg-zinc-900/30 px-2 py-0.5 rounded">
                  SUITE: AUTOMATION
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic">Workflow Automation</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Autonomous workflow scripting, lead scraping, automated notifications, CRM triggers, and AI integrations.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/60 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">TIME RECLAIMED</span>
                <span className="text-white">120+ Hrs/Mo</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">RELIABILITY</span>
                <span className="text-zinc-400">99.9% UPTIME</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="default" className="w-full text-xs uppercase tracking-widest h-10" onClick={() => document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth' })}>
                  Build Automation
                </MetalButton>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced Performance Specifications (Editorial Grid layout) */}
      <section id="atelier" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="relative border border-white/10 rounded-2xl glassmorphism p-8 overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 text-zinc-500 font-mono text-[9px] tracking-widest hidden md:block">
            SYSTEM ENGINE: VER-2.1.0
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-purple-500/20 px-3 py-1 rounded-full bg-purple-950/10">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Performance Specs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              High-Performance Digital Infrastructure
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wider">
              Every solution we deploy is optimized for speed, conversion, and operational leverage. We leverage modern frameworks to build ultra-responsive user interfaces and connect them with autonomous agent pipelines that process data in near real-time, removing human bottlenecks from your workflows.
            </p>
          </div>

          {/* Grid lines layout statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
            <div className="p-4 space-y-1">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">CONVERSION LIFT</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-purple">+35%</p>
              <p className="text-[10px] text-zinc-400">Average sales funnel optimization increase</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">HOURS RECLAIMED</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-magenta">150+ / Mo</p>
              <p className="text-[10px] text-zinc-400">Saved via workflow pipeline scripting</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">UPTIME RELIABILITY</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-white">99.9%</p>
              <p className="text-[10px] text-zinc-400">Stable, uninterrupted agent executions</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">CORE WEB SPEED</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-purple">&lt;0.5s</p>
              <p className="text-[10px] text-zinc-400">Lightning-fast content rendering and loading</p>
            </div>
          </div>

        </div>
      </section>

      {/* Calendly Consultation Block */}
      <div className="flex justify-center -mb-14 relative z-20">
        <MetalButton 
          variant="primary" 
          onClick={() => (window as any).Calendly?.showPopupWidget('https://calendly.com/kannikaraj/30min')}
          className="text-[10px] uppercase tracking-[0.2em] font-bold h-11 px-10 border-purple-500/30 bg-black/80 backdrop-blur-md hover:bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300"
        >
          Schedule Growth Consultation
        </MetalButton>
      </div>

      {/* Subscription/Portal Access Access Block */}
      <section id="portal" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center border border-white/10 rounded-2xl p-8 md:p-12 glassmorphism-card bg-black/60 relative overflow-hidden">
          
          {/* Glowing central beam in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              <span className="font-brand-accent italic text-glow-purple">System Access</span>
            </h2>
            
            <p className="text-zinc-400 text-xs md:text-sm max-w-lg mx-auto tracking-wider leading-relaxed">
              We design and execute custom strategies for selected businesses. Register your business email to schedule an intake briefing with our engineers.
            </p>

            {/* Futuristic Luxury Form */}
            <div className="max-w-md mx-auto pt-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="ENTER BUSINESS EMAIL" 
                  required
                  className="flex-1 px-4 py-3 bg-zinc-950/80 border border-white/10 rounded-lg text-xs font-mono tracking-widest text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <MetalButton variant="gold" type="submit" className="text-xs uppercase tracking-widest font-semibold h-11" onClick={() => (window as any).Calendly?.showPopupWidget('https://calendly.com/kannikaraj/30min')}>
                  Request Key
                </MetalButton>
              </form>
              <p className="text-[9px] font-mono text-zinc-500 tracking-wider mt-4">
                BY SUBMITTING, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* High-End Editorial Footer */}
      <footer className="relative py-12 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5 text-zinc-500 text-xs font-mono tracking-wider">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <span className="font-calligraphy text-2xl text-neon-white">
              Zalpha-O
            </span>
            <p className="text-[10px] text-zinc-600 max-w-[200px] leading-relaxed">
              Programmatic growth marketing, advanced frontend engineering, and custom automation. Engineered for high performance.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">SERVICES</p>
            <ul className="space-y-2 text-[10px]">
              <li><a href="#vision" className="hover:text-purple-400 transition-colors">THE VISION</a></li>
              <li><a href="#wearables" className="hover:text-purple-400 transition-colors">GROWTH MARKETING</a></li>
              <li><a href="#wearables" className="hover:text-purple-400 transition-colors">WEB DEVELOPMENT</a></li>
              <li><a href="#wearables" className="hover:text-purple-400 transition-colors">WORKFLOW AUTOMATION</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">TECH INFRA</p>
            <ul className="space-y-2 text-[10px]">
              <li><a href="#atelier" className="hover:text-pink-400 transition-colors">REACT & TYPESCRIPT</a></li>
              <li><a href="#atelier" className="hover:text-pink-400 transition-colors">TAILWIND CSS & WEBGL</a></li>
              <li><a href="#atelier" className="hover:text-pink-400 transition-colors">PYTHON AUTOMATIONS</a></li>
              <li><a href="#atelier" className="hover:text-pink-400 transition-colors">SECURE APIS</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">STATUS</p>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-1.5 text-green-500">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>AUTOMATION AGENTS: ONLINE</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-400">
                <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>MARKETING SYSTEMS: NOMINAL</span>
              </div>
              <p className="text-[9px] text-zinc-700">COORD: 12.9716° N, 77.5946° E</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-[9px] text-zinc-600 gap-4">
          <p>© 2026 <span className="font-calligraphy text-neon-white text-xs">Zalpha-O</span> DIGITAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-0.5">
              LEDGER CODE <ArrowUpRight className="size-2.5" />
            </a>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-0.5">
              TELEMETRY <ArrowUpRight className="size-2.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col sm:flex-row gap-3 items-end sm:items-center pointer-events-none">
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/917795271838" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="pointer-events-auto flex items-center justify-center size-12 transition-all duration-300 hover:scale-110 drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
          title="Chat on WhatsApp"
        >
          <svg className="size-full" fill="none" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="i0">
                <rect height="500" width="500" y="0" x="0" />
              </clipPath>
              <linearGradient id="i1" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-124.487" y2="123.487" x1="123" y1="-124">
                <stop offset="0%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#00d667" />
                <stop offset="100%" stopColor="#00b25b" />
              </linearGradient>
              <g id="i2">
                <g transform="matrix(1,0,0,1,250,250)" visibility="hidden" id="i3">
                  <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.212; 1" attributeName="visibility" />
                  <g id="i4">
                    <path fill="url(#i1)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                  </g>
                </g>
              </g>
              <linearGradient id="i5" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-124.487" y2="123.487" x1="123" y1="-124">
                <stop offset="0%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#00d667" />
                <stop offset="100%" stopColor="#00b25b" />
              </linearGradient>
              <g id="i6">
                <g transform="matrix(1,0,0,1,250,250)" visibility="hidden" id="i3">
                  <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.121; 1" attributeName="visibility" />
                  <g id="i4">
                    <path fill="url(#i5)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                  </g>
                </g>
              </g>
              <linearGradient id="i7" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-124.487" y2="123.487" x1="123" y1="-124">
                <stop offset="0%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#00d667" />
                <stop offset="100%" stopColor="#00b25b" />
              </linearGradient>
              <g id="i8">
                <g transform="matrix(1,0,0,1,250,250)" visibility="hidden" id="i3">
                  <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.03; 1" attributeName="visibility" />
                  <g id="i4">
                    <path fill="url(#i7)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                  </g>
                </g>
              </g>
              <linearGradient id="i9" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="-124.487" y2="123.487" x1="123" y1="-124">
                <stop offset="0%" stopColor="#833ab4" />
                <stop offset="50%" stopColor="#00d667" />
                <stop offset="100%" stopColor="#00b25b" />
              </linearGradient>
              <g id="i10">
                <g transform="matrix(1,0,0,1,250,250)" id="i3">
                  <g id="i4">
                    <path fill="url(#i9)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                  </g>
                </g>
              </g>
              <g id="i11">
                <g transform="matrix(1,0,0,1,0,0)" id="i12">
                  <g clipPath="url(#i0)">
                    <g transform="matrix(1,0,0,1,250,250)">
                      <g>
                        <path fill="url(#i9)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g id="i13">
                <g transform="matrix(1,0,0,1,250,250)" id="i14">
                  <g id="i15">
                    <path fill="#ffffff" d="M-94.55,99.03C-94.55,99.03,-79.958,44.59,-79.958,44.59C-88.219,29.685,-92.568,12.984,-92.568,-3.969C-92.568,-59.394,-47.474,-104.488,7.951,-104.488C63.377,-104.488,108.47,-59.394,108.47,-3.969C108.47,51.457,63.377,96.551,7.951,96.551C-8.688,96.551,-25.122,92.349,-39.83,84.371C-39.83,84.371,-94.55,99.03,-94.55,99.03ZM-37.109,63.97C-37.109,63.97,-33.663,66.025,-33.663,66.025C-21.012,73.563,-6.621,77.55,7.951,77.55C52.9,77.55,89.47,40.982,89.47,-3.969C89.47,-48.92,52.9,-85.488,7.951,-85.488C-36.996,-85.488,-73.567,-48.92,-73.567,-3.969C-73.567,10.874,-69.444,25.487,-61.645,38.296C-61.645,38.296,-59.531,41.767,-59.531,41.767C-59.531,41.767,-67.676,72.162,-67.676,72.162C-67.676,72.162,-37.109,63.97,-37.109,63.97Z" />
                  </g>
                  <g id="i16">
                    <path fill="#ffffff" d="M45.344,10.01C41.206,7.535,35.824,4.773,30.949,6.767C27.21,8.297,24.822,14.15,22.4,17.139C21.156,18.673,19.672,18.912,17.763,18.144C3.726,12.553,-7.03,3.182,-14.775,-9.729C-16.087,-11.736,-15.853,-13.317,-14.272,-15.178C-11.931,-17.932,-8.993,-21.061,-8.36,-24.775C-7.727,-28.487,-9.469,-32.827,-11.003,-36.133C-12.965,-40.358,-15.157,-46.382,-19.388,-48.772C-23.28,-50.969,-28.403,-49.739,-31.868,-46.917C-37.85,-42.046,-40.736,-34.413,-40.649,-26.848C-40.625,-24.698,-40.361,-22.553,-39.86,-20.479C-38.652,-15.488,-36.346,-10.83,-33.75,-6.399C-31.793,-3.059,-29.665,0.182,-27.371,3.3C-19.863,13.499,-10.523,22.362,0.292,28.987C5.696,32.296,11.517,35.198,17.544,37.19C24.303,39.423,30.325,41.748,37.625,40.362C45.267,38.911,52.801,34.181,55.835,26.817C56.733,24.636,57.182,22.208,56.679,19.905C55.64,15.144,49.196,12.313,45.344,10.01Z" />
                  </g>
                </g>
              </g>
              <linearGradient id="i17" gradientUnits="userSpaceOnUse" spreadMethod="pad" x2="123.486" y2="123.486" x1="-124" y1="-124">
                <stop offset="0%" stopColor="#833ab4" />
                <stop offset="60.1%" stopColor="#2047c6" />
                <stop offset="100%" stopColor="#2b189c" />
              </linearGradient>
              <filter id="i18">
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" type="matrix" />
              </filter>
              <mask height="20000" width="20000" y="-10000" x="-10000" maskContentUnits="userSpaceOnUse" maskUnits="userSpaceOnUse" style={{ maskType: 'alpha' }} id="i19">
                <g transform="matrix(1,0,0,1,0,0)">
                  <g filter="url(#i18)" transform="matrix(1.01,0,0,1.01,250,250)">
                    <g id="i4">
                      <path fill="url(#i17)" d="M175,0C175,-96.649,96.65,-175,0,-175C-96.65,-175,-175,-96.649,-175,0C-175,87.348,-111.006,159.746,-27.344,172.873C-27.344,172.873,-17.5,175.123,-0.5,175.123C17,175.123,27.344,172.873,27.344,172.873C111.006,159.746,175,87.348,175,0Z" />
                    </g>
                  </g>
                </g>
              </mask>
              <g id="i20">
                <g transform="matrix(1,0,0,1,0,0)" id="i21">
                  <g clipPath="url(#i0)">
                    <g transform="matrix(1,0,0,1,0,0)">
                      <g clipPath="url(#i0)">
                        <g transform="matrix(1,0,0,1,250,250)">
                          <g>
                            <path fill="url(#i9)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g mask="url(#i19)" transform="matrix(1,0,0,1,0,0)" id="i22">
                <g clipPath="url(#i0)">
                  <g transform="matrix(1,0,0,1,250,250)">
                    <g>
                      <path fill="#ffffff" d="M-94.55,99.03C-94.55,99.03,-79.958,44.59,-79.958,44.59C-88.219,29.685,-92.568,12.984,-92.568,-3.969C-92.568,-59.394,-47.474,-104.488,7.951,-104.488C63.377,-104.488,108.47,-59.394,108.47,-3.969C108.47,51.457,63.377,96.551,7.951,96.551C-8.688,96.551,-25.122,92.349,-39.83,84.371C-39.83,84.371,-94.55,99.03,-94.55,99.03ZM-37.109,63.97C-37.109,63.97,-33.663,66.025,-33.663,66.025C-21.012,73.563,-6.621,77.55,7.951,77.55C52.9,77.55,89.47,40.982,89.47,-3.969C89.47,-48.92,52.9,-85.488,7.951,-85.488C-36.996,-85.488,-73.567,-48.92,-73.567,-3.969C-73.567,10.874,-69.444,25.487,-61.645,38.296C-61.645,38.296,-59.531,41.767,-59.531,41.767C-59.531,41.767,-67.676,72.162,-67.676,72.162C-67.676,72.162,-37.109,63.97,-37.109,63.97Z" />
                    </g>
                    <g>
                      <path fill="#ffffff" d="M45.344,10.01C41.206,7.535,35.824,4.773,30.949,6.767C27.21,8.297,24.822,14.15,22.4,17.139C21.156,18.673,19.672,18.912,17.763,18.144C3.726,12.553,-7.03,3.182,-14.775,-9.729C-16.087,-11.736,-15.853,-13.317,-14.272,-15.178C-11.931,-17.932,-8.993,-21.061,-8.36,-24.775C-7.727,-28.487,-9.469,-32.827,-11.003,-36.133C-12.965,-40.358,-15.157,-46.382,-19.388,-48.772C-23.28,-50.969,-28.403,-49.739,-31.868,-46.917C-37.85,-42.046,-40.736,-34.413,-40.649,-26.848C-40.625,-24.698,-40.361,-22.553,-39.86,-20.479C-38.652,-15.488,-36.346,-10.83,-33.75,-6.399C-31.793,-3.059,-29.665,0.182,-27.371,3.3C-19.863,13.499,-10.523,22.362,0.292,28.987C5.696,32.296,11.517,35.198,17.544,37.19C24.303,39.423,30.325,41.748,37.625,40.362C45.267,38.911,52.801,34.181,55.835,26.817C56.733,24.636,57.182,22.208,56.679,19.905C55.64,15.144,49.196,12.313,45.344,10.01Z" />
                    </g>
                  </g>
                </g>
              </g>
              <g display="none" transform="matrix(1.01,0,0,1.01,250,250)" id="i23">
                <g id="i4">
                  <path fill="url(#i17)" d="M175,0C175,-96.649,96.65,-175,0,-175C-96.65,-175,-175,-96.649,-175,0C-175,87.348,-111.006,159.746,-27.344,172.873C-27.344,172.873,-17.5,175.123,-0.5,175.123C17,175.123,27.344,172.873,27.344,172.873C111.006,159.746,175,87.348,175,0Z" />
                </g>
              </g>
            </defs>
            <g visibility="hidden" id="i24">
              <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.212; 1" attributeName="visibility" />
              <animate repeatCount="indefinite" attributeName="opacity" dur="1.1s" begin="0s" fill="freeze" values="1; 1; 0; 0" keyTimes="0; 0.454545; 0.939394; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" calcMode="spline" />
              <g transform="translate(250,250)">
                <g transform="scale(0,0)">
                  <animateTransform repeatCount="indefinite" type="scale" attributeName="transform" dur="1.1s" begin="0s" calcMode="spline" values="0 0; 0 0; 1.3 1.3; 1.3 1.3" keyTimes="0; 0.212121; 0.696969; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" fill="freeze" />
                  <g transform="translate(-250,-250)">
                    <g clipPath="url(#i0)">
                      <g transform="matrix(1,0,0,1,250,250)" visibility="hidden">
                        <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.212; 1" attributeName="visibility" />
                        <g>
                          <path fill="url(#i1)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g visibility="hidden" id="i25">
              <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.121; 1" attributeName="visibility" />
              <animate repeatCount="indefinite" attributeName="opacity" dur="1.1s" begin="0s" fill="freeze" values="1; 1; 0; 0" keyTimes="0; 0.363636; 0.848485; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" calcMode="spline" />
              <g transform="translate(250,250)">
                <g transform="scale(0,0)">
                  <animateTransform repeatCount="indefinite" type="scale" attributeName="transform" dur="1.1s" begin="0s" calcMode="spline" values="0 0; 0 0; 1.2 1.2; 1.2 1.2" keyTimes="0; 0.121212; 0.60606; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" fill="freeze" />
                  <g transform="translate(-250,-250)">
                    <g clipPath="url(#i0)">
                      <g transform="matrix(1,0,0,1,250,250)" visibility="hidden">
                        <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.121; 1" attributeName="visibility" />
                        <g>
                          <path fill="url(#i5)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g visibility="hidden" id="i26">
              <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.03; 1" attributeName="visibility" />
              <animate repeatCount="indefinite" attributeName="opacity" dur="1.1s" begin="0s" fill="freeze" values="1; 1; 0; 0" keyTimes="0; 0.272727; 0.757576; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" calcMode="spline" />
              <g transform="translate(250,250)">
                <g transform="scale(0,0)">
                  <animateTransform repeatCount="indefinite" type="scale" attributeName="transform" dur="1.1s" begin="0s" calcMode="spline" values="0 0; 0 0; 1.15 1.15; 1.15 1.15" keyTimes="0; 0.030303; 0.515151; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" fill="freeze" />
                  <g transform="translate(-250,-250)">
                    <g clipPath="url(#i0)">
                      <g transform="matrix(1,0,0,1,250,250)" visibility="hidden">
                        <animate repeatCount="indefinite" begin="0s" calcMode="discrete" dur="1.1s" values="hidden; visible; visible" keyTimes="0; 0.03; 1" attributeName="visibility" />
                        <g>
                          <path fill="url(#i7)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="i27">
              <g transform="translate(250,250)">
                <g transform="scale(0.978,0.978)">
                  <animateTransform repeatCount="indefinite" type="scale" attributeName="transform" dur="1.1s" begin="0s" calcMode="spline" values="0.978 0.978; 0.978 0.978; 1.05 1.05; 1.05 1.05" keyTimes="0; 0.030303; 0.515151; 1" keySplines="0 0 1 1; 0.333 0 0.667 1; 0 0 1 1" fill="freeze" />
                  <g transform="translate(-250,-250)">
                    <g clipPath="url(#i0)">
                      <g transform="matrix(1,0,0,1,0,0)">
                        <g clipPath="url(#i0)">
                          <g transform="matrix(1,0,0,1,0,0)">
                            <g clipPath="url(#i0)">
                              <g transform="matrix(1,0,0,1,250,250)">
                                <g>
                                  <path fill="url(#i9)" d="M175,-0.001C175,96.649,96.65,175,0,175C-96.649,175,-175,96.649,-175,-0.001C-175,-96.65,-96.649,-175,0,-175C96.65,-175,175,-96.65,175,-0.001Z" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g mask="url(#i19)" transform="matrix(1,0,0,1,0,0)">
                        <g clipPath="url(#i0)">
                          <g transform="matrix(1,0,0,1,250,250)">
                            <g>
                              <path fill="#ffffff" d="M-94.55,99.03C-94.55,99.03,-79.958,44.59,-79.958,44.59C-88.219,29.685,-92.568,12.984,-92.568,-3.969C-92.568,-59.394,-47.474,-104.488,7.951,-104.488C63.377,-104.488,108.47,-59.394,108.47,-3.969C108.47,51.457,63.377,96.551,7.951,96.551C-8.688,96.551,-25.122,92.349,-39.83,84.371C-39.83,84.371,-94.55,99.03,-94.55,99.03ZM-37.109,63.97C-37.109,63.97,-33.663,66.025,-33.663,66.025C-21.012,73.563,-6.621,77.55,7.951,77.55C52.9,77.55,89.47,40.982,89.47,-3.969C89.47,-48.92,52.9,-85.488,7.951,-85.488C-36.996,-85.488,-73.567,-48.92,-73.567,-3.969C-73.567,10.874,-69.444,25.487,-61.645,38.296C-61.645,38.296,-59.531,41.767,-59.531,41.767C-59.531,41.767,-67.676,72.162,-67.676,72.162C-67.676,72.162,-37.109,63.97,-37.109,63.97Z" />
                            </g>
                            <g>
                              <path fill="#ffffff" d="M45.344,10.01C41.206,7.535,35.824,4.773,30.949,6.767C27.21,8.297,24.822,14.15,22.4,17.139C21.156,18.673,19.672,18.912,17.763,18.144C3.726,12.553,-7.03,3.182,-14.775,-9.729C-16.087,-11.736,-15.853,-13.317,-14.272,-15.178C-11.931,-17.932,-8.993,-21.061,-8.36,-24.775C-7.727,-28.487,-9.469,-32.827,-11.003,-36.133C-12.965,-40.358,-15.157,-46.382,-19.388,-48.772C-23.28,-50.969,-28.403,-49.739,-31.868,-46.917C-37.85,-42.046,-40.736,-34.413,-40.649,-26.848C-40.625,-24.698,-40.361,-22.553,-39.86,-20.479C-38.652,-15.488,-36.346,-10.83,-33.75,-6.399C-31.793,-3.059,-29.665,0.182,-27.371,3.3C-19.863,13.499,-10.523,22.362,0.292,28.987C5.696,32.296,11.517,35.198,17.544,37.19C24.303,39.423,30.325,41.748,37.625,40.362C45.267,38.911,52.801,34.181,55.835,26.817C56.733,24.636,57.182,22.208,56.679,19.905C55.64,15.144,49.196,12.313,45.344,10.01Z" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </a>

        {/* Calendly Button */}
        <button 
          onClick={() => (window as any).Calendly?.showPopupWidget('https://calendly.com/kannikaraj/30min')}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 bg-black/80 hover:bg-purple-950/20 border border-purple-500/30 hover:border-purple-500/60 text-zinc-300 hover:text-white rounded-full text-xs font-mono tracking-wider transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md"
        >
          <span className="size-2 bg-purple-500 rounded-full animate-pulse" />
          <span>Schedule meet with me</span>
        </button>
      </div>
    </div>
  )
}
