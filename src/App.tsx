
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
            <a href="#atelier" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              AI Atelier
            </a>
            <a href="#wearables" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              Cyber Couture
            </a>
            <a href="#portal" className="text-xs uppercase font-mono tracking-widest text-zinc-400 hover:text-white hover:text-glow-white transition-all duration-300">
              Access Code
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
            <MetalButton variant="primary" className="text-xs h-9 px-4 rounded-full uppercase tracking-wider">
              Enter Portal
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
              href="#atelier" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              AI Atelier
            </a>
            <a 
              href="#wearables" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              Cyber Couture
            </a>
            <a 
              href="#portal" 
              onClick={() => setIsMenuOpen(false)}
              className="text-sm uppercase font-mono tracking-widest text-zinc-400 hover:text-white py-2 border-b border-white/5"
            >
              Access Code
            </a>
            <div className="pt-2 flex justify-center">
              <MetalButton variant="primary" className="w-full text-xs uppercase tracking-wider">
                Enter Portal
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
                <span className="font-calligraphy text-neon-white normal-case text-sm">Zalpha-O</span> Atelier System: Connected
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
              Design is Everything.
            </p>

            {/* Premium editorial content details */}
            <p className="text-zinc-400 max-w-xl mx-auto text-xs md:text-sm leading-relaxed tracking-wider mb-8">
              A collision of high-end cybernetic luxury, neural digital couture, and generative aesthetics. 
              We formulate experimental digital wear for the autonomous identity.
            </p>
            
            {/* Interactive Liquid Glass CTA */}
            <div className="flex justify-center relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000" />
              <LiquidButton className="text-white border border-white/20 rounded-full uppercase tracking-widest font-mono text-xs px-8 py-3 bg-black/40 backdrop-blur-md" size="xl">
                Let's Go
              </LiquidButton>
            </div> 

            {/* Systems specifications stats at the bottom of the hero frame */}
            <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-2 md:gap-4 text-center">
              <div>
                <p className="text-xs font-mono text-zinc-500 tracking-wider">ATELIER CORE</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">GEN-AI 2.0</p>
              </div>
              <div className="border-x border-white/5">
                <p className="text-xs font-mono text-zinc-500 tracking-wider">DIGITAL SCARCITY</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">LIMITED EDITIONS</p>
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 tracking-wider">EXPERIENCE</p>
                <p className="text-sm font-semibold text-white tracking-widest mt-1">IMMERSIVE WEBGL</p>
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
              The Genesis of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Autonomous Fashion</span>
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wider">
              Traditional fashion designs for physical constraints. <span className="font-calligraphy text-neon-white text-base">Zalpha-O</span> crafts garments for the infinite digital domain. 
              Each couture collection is generated procedurally by neural networks, translating deep cultural codes into fluid, pixel-perfect luxury wearables.
            </p>

            <blockquote className="border-l-2 border-pink-500 pl-4 py-1 italic text-zinc-300 text-xs tracking-wider">
              "We do not build garments for body shapes. We build code structures that wrap the digital aura."
            </blockquote>

            <div className="pt-4 flex items-center gap-4">
              <MetalButton variant="bronze" className="text-xs uppercase tracking-wider py-2.5 px-5">
                Read Whitepaper
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
              <h3 className="text-lg font-bold tracking-tight mb-2">Neural Synthesis</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Algorithms parsing dynamic human parameters to generate bespoke, personalized draping mechanics.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-purple-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Explore Tech <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 2 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300 group md:translate-y-6">
              <div className="size-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/25 mb-4 group-hover:scale-110 transition-transform">
                <Atom className="size-5 text-pink-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Smart Thread</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                WebGL rendered fabrics that react to cursor interaction, simulated atmospheric friction, and background audio pitch.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-pink-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Inspect Shader <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 3 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group">
              <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/25 mb-4 group-hover:scale-110 transition-transform">
                <Layers className="size-5 text-white" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Layered Identity</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Own your avatar's style in the metaverse. Cross-platform integrations for decentralized gaming and AR projections.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-white font-mono tracking-widest uppercase cursor-pointer hover:text-zinc-400 transition-colors">
                View Demos <ChevronRight className="size-3" />
              </div>
            </div>

            {/* Visual card 4 */}
            <div className="glassmorphism-card p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group md:translate-y-6">
              <div className="size-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/25 mb-4 group-hover:scale-110 transition-transform">
                <Shield className="size-5 text-purple-400" />
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Immutable Provenance</h3>
              <p className="text-zinc-500 text-xs leading-relaxed tracking-wider">
                Verifiable cryptographic records secure ownership, creation histories, and future utility of your <span className="font-calligraphy text-neon-white text-sm">Zalpha-O</span> tokens.
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-[10px] text-purple-400 font-mono tracking-widest uppercase cursor-pointer hover:text-white transition-colors">
                Check Ledger <ChevronRight className="size-3" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Cyber Couture & Digital Wearables Showcase */}
      <section id="wearables" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 border border-pink-500/20 px-3 py-1 rounded-full bg-pink-950/10">
            <span className="text-[10px] font-mono tracking-widest text-pink-400 uppercase">Collection 01</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The Neural <span className="font-brand-accent italic text-glow-pink">Couture</span> Archive
          </h2>
          <p className="text-zinc-400 max-w-xl text-xs md:text-sm tracking-wider leading-relaxed">
            Procedurally tailored digital apparel. Available in fractionalized token droplets or direct AR integrations.
          </p>
        </div>

        {/* 3 Column Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="glassmorphism rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/25 transition-all duration-500 flex flex-col group">
            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              {/* Fallback pattern representing luxury clothing threads */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="size-36 rounded-full border border-purple-500/20 absolute blur-xl animate-pulse" />
              
              {/* Graphic Symbol */}
              <div className="z-10 text-center px-4 space-y-3">
                <span className="text-[10px] font-mono tracking-widest border border-purple-500/30 text-purple-400 bg-purple-950/30 px-2 py-0.5 rounded">
                  MODEL: NEURAL-01
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic">Liquid Obsidian</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Glossy, light-refracting volumetric outer shell. Simulates fluid physics in real-time.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/60 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">MINT RATE</span>
                <span className="text-white">0.089 ETH</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">RARITY</span>
                <span className="text-purple-400">EPIC (1 / 100)</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="primary" className="w-full text-xs uppercase tracking-widest h-10">
                  Acquire Volatiles
                </MetalButton>
              </div>
            </div>
          </div>

          {/* Card 2 (Gold variant Highlight) */}
          <div className="glassmorphism rounded-2xl overflow-hidden border border-purple-500/20 hover:border-pink-500/25 transition-all duration-500 flex flex-col group relative md:-translate-y-4">
            {/* Absolute badge */}
            <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-mono text-[9px] tracking-widest px-2.5 py-1 rounded-full uppercase font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Hyper Rare
            </div>

            <div className="relative aspect-[3/4] bg-zinc-950 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#311042_1px,transparent_1px)] [background-size:16px_16px] opacity-40 group-hover:scale-110 transition-transform duration-700" />
              <div className="size-36 rounded-full border border-pink-500/20 absolute blur-xl animate-pulse" />
              
              {/* Graphic Symbol */}
              <div className="z-10 text-center px-4 space-y-3">
                <span className="text-[10px] font-mono tracking-widest border border-pink-500/30 text-pink-400 bg-pink-950/30 px-2 py-0.5 rounded">
                  MODEL: CHROMATIC-09
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic text-glow-magenta">Hyperion Shroud</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Adaptive mesh cloak featuring self-illuminating fibre pathways shifting based on sound dynamics.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/80 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">MINT RATE</span>
                <span className="text-white">0.245 ETH</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">RARITY</span>
                <span className="text-pink-400">MYTHIC (1 / 25)</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="gold" className="w-full text-xs uppercase tracking-widest h-10">
                  Unlock Hyperion
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
                  MODEL: SILICONE-04
                </span>
                <p className="text-xl font-bold tracking-tight text-white font-brand-accent italic">Bismuth Matrix</p>
                <p className="text-[11px] text-zinc-400 max-w-[200px] mx-auto leading-relaxed">
                  Crystalline geometric plates layered like organic scales. Reflects environmental gradients.
                </p>
              </div>
            </div>
            
            <div className="p-6 bg-black/60 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">MINT RATE</span>
                <span className="text-white">0.055 ETH</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-zinc-500">RARITY</span>
                <span className="text-zinc-400">RARE (1 / 250)</span>
              </div>
              <div className="pt-2">
                <MetalButton variant="default" className="w-full text-xs uppercase tracking-widest h-10">
                  Inspect Artifact
                </MetalButton>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Advanced AI Atelier Specifications (Editorial Grid layout) */}
      <section id="atelier" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="relative border border-white/10 rounded-2xl glassmorphism p-8 overflow-hidden">
          
          <div className="absolute top-0 right-0 p-8 text-zinc-500 font-mono text-[9px] tracking-widest hidden md:block">
            Z-O PROTOCOL: VER-2.0.46
          </div>

          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 border border-purple-500/20 px-3 py-1 rounded-full bg-purple-950/10">
              <span className="text-[10px] font-mono tracking-widest text-purple-400 uppercase">Engine Specs</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Procedural Fabric Simulations
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed tracking-wider">
              Powered by customized WebGL shaders running in mathematical matrices, <span className="font-calligraphy text-neon-white text-base">Zalpha-O</span> fabrics display simulated physical dynamics. Custom volumetric ray-marching simulates sub-surface scattering of light, reproducing the exact premium sheen of silk, high-contrast latex, and raw metals under cosmic lighting setups.
            </p>
          </div>

          {/* Grid lines layout statistics */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-white/5 pt-8">
            <div className="p-4 space-y-1">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">REFRACTION INDEX</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-purple">1.462</p>
              <p className="text-[10px] text-zinc-400">High-fidelity organic glass physics</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">POLYCOUNT DENSITY</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-magenta">1.2M</p>
              <p className="text-[10px] text-zinc-400">Micro-geometric drape precision</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">INTEGRATION FRAMEWORKS</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-white">6+</p>
              <p className="text-[10px] text-zinc-400">Cross-game standard compliance</p>
            </div>
            <div className="p-4 space-y-1 border-t md:border-t-0 md:border-l border-white/5">
              <p className="text-xs font-mono text-zinc-500 tracking-wider">SIMULATION SPEED</p>
              <p className="text-3xl font-extrabold text-white tracking-widest text-glow-purple">120 FPS</p>
              <p className="text-[10px] text-zinc-400">Zero latency interactive latency</p>
            </div>
          </div>

        </div>
      </section>

      {/* Subscription/Portal Access Access Block */}
      <section id="portal" className="relative py-28 px-4 md:px-8 z-10 max-w-7xl mx-auto border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center border border-white/10 rounded-2xl p-8 md:p-12 glassmorphism-card bg-black/60 relative overflow-hidden">
          
          {/* Glowing central beam in the background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Request <span className="font-brand-accent italic text-glow-purple">System Access</span>
            </h2>
            
            <p className="text-zinc-400 text-xs md:text-sm max-w-lg mx-auto tracking-wider leading-relaxed">
              Drop droplets are strictly gated. Register your neural address or input your credential access key to join the <span className="font-calligraphy text-neon-white text-base">Zalpha-O</span> VIP syndicate.
            </p>

            {/* Futuristic Luxury Form */}
            <div className="max-w-md mx-auto pt-4">
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="ENTER NEURAL EMAIL" 
                  required
                  className="flex-1 px-4 py-3 bg-zinc-950/80 border border-white/10 rounded-lg text-xs font-mono tracking-widest text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <MetalButton variant="gold" type="submit" className="text-xs uppercase tracking-widest font-semibold h-11">
                  Request Key
                </MetalButton>
              </form>
              <p className="text-[9px] font-mono text-zinc-500 tracking-wider mt-4">
                BY SUBMITTING, YOU AGREE TO CRYPTOGRAPHIC LOGGING OF YOUR NETWORK METADATA.
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
              Haute couture for autonomous digital identity. Decentralized. Generated. Absolute.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">SYNDICATE</p>
            <ul className="space-y-2 text-[10px]">
              <li><a href="#" className="hover:text-purple-400 transition-colors">VISION STATEMENTS</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">THE SHADER SOURCE</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">AI ORCHESTRATION</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">CREDENTIAL REGISTRY</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">METAVERSE</p>
            <ul className="space-y-2 text-[10px]">
              <li><a href="#" className="hover:text-pink-400 transition-colors">AR PROJECTIONS</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">FABRIC SDK</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">CROSS-CHAIN BRIDGE</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">DECENTRALAND DROP</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-white text-xs font-bold uppercase tracking-widest">STATUS</p>
            <div className="space-y-2 text-[10px]">
              <div className="flex items-center gap-1.5 text-green-500">
                <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                <span>CORE SHADERS: NOMINAL</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-400">
                <span className="size-1.5 rounded-full bg-purple-400 animate-pulse" />
                <span>ATELIER MINT: ONLINE</span>
              </div>
              <p className="text-[9px] text-zinc-700">COORD: 47.6062° N, 122.3321° W</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-8 text-[9px] text-zinc-600 gap-4">
          <p>© 2026 <span className="font-calligraphy text-neon-white text-xs">Zalpha-O</span> SYNDICATE. ALL RIGHTS IN THE VIRTUAL DOMAIN RESERVED.</p>
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
    </div>
  )
}
