"use client";
import heroImg from "@/assets/main/hero-img.jpeg";
import logoNew from "@/assets/main/logo-new.png";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
export default function AdaezePage() {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="bg-[#080808] text-white font-['Outfit',sans-serif] min-h-screen overflow-x-hidden selection:bg-[#c41e1e] selection:text-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex justify-between items-center bg-[#080808]/85 backdrop-blur-md border-b border-white/5">
        <Image
          src={logoNew}
          alt="Adaeze Logo"
          className="h-8 md:h-10 w-auto object-contain"
          priority
        />
        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          <li>
            <a
              href="#about"
              className="text-[13px] font-medium text-white/60 no-underline tracking-widest uppercase transition-colors duration-300 hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-[13px] font-medium text-white/60 no-underline tracking-widest uppercase transition-colors duration-300 hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#impact"
              className="text-[13px] font-medium text-white/60 no-underline tracking-widest uppercase transition-colors duration-300 hover:text-white"
            >
              Impact
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-[13px] font-medium text-white/60 no-underline tracking-widest uppercase transition-colors duration-300 hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-block bg-[#c41e1e] text-white px-6 py-2.5 rounded-md text-[13px] font-semibold no-underline tracking-wider transition-colors duration-300 hover:bg-[#a01515]"
        >
          Book a Free Call
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden pt-20">
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 md:px-16 py-10 md:py-20 -mt-48 md:mt-0 relative z-10">
          <div
            className="inline-flex items-center gap-2.5 mb-7 animate-fadeUp opacity-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-2 h-2 bg-[#c41e1e] rounded-full"></div>
            <span className="text-[11px] font-semibold tracking-[0.3em] text-[#c41e1e] uppercase">
              Product Consultant & Growth Strategist
            </span>
          </div>
          <h1
            className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-bold leading-none text-white mb-6 animate-fadeUp opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            I Grew From
            <br />
            Nothing. Now I<br />
            Help Others
            <br />
            Build <em className="italic text-[#c41e1e]">Everything.</em>
          </h1>
          <p
            className="text-base font-light text-white/55 leading-relaxed mb-11 max-w-md animate-fadeUp opacity-0"
            style={{ animationDelay: "0.6s" }}
          >
            Product consulting, business growth strategy, and career development
            for startups, organizations, and ambitious professionals across
            Africa and beyond.
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fadeUp opacity-0"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://calendar.app.google/wBVicZDz7DmiaXBk8"
              className="bg-[#c41e1e] text-white px-8 py-4 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 shadow-[0_8px_30px_rgba(196,30,30,0.35)] hover:bg-[#a01515] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(196,30,30,0.5)]"
            >
              Book a Free Call <ArrowBigRight className="inline-block" />
            </a>
            <a
              href="#services"
              className="bg-transparent text-white px-8 py-4 rounded-lg text-sm font-medium tracking-wider border border-white/20 transition-all duration-300 hover:border-white/50 hover:bg-white/5"
            >
              See How I Work <ArrowBigRight className="inline-block" />
            </a>
          </div>
          <div
            className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-white/10 animate-fadeUp opacity-0"
            style={{ animationDelay: "1s" }}
          >
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white leading-none">
                5<span className="text-[#c41e1e]">+</span>
              </div>
              <div className="text-[11px] text-[#888888] mt-1 font-normal tracking-wide">
                Years Building Products
              </div>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white leading-none">
                $600<span className="text-[#c41e1e]">K+</span>
              </div>
              <div className="text-[11px] text-[#888888] mt-1 font-normal tracking-wide">
                Transactions Processed
              </div>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] text-4xl font-bold text-white leading-none">
                3<span className="text-[#c41e1e]"></span>
              </div>
              <div className="text-[11px] text-[#888888] mt-1 font-normal tracking-wide">
                Continents Served
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative overflow-hidden min-h-[400px] md:min-h-0 bg-[#080808]">
          <Image
            src={heroImg}
            alt="Adaeze"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top animate-fadeIn"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 via-20% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-30% to-[#080808] opacity-100"></div>

          <div
            className="hidden md:block absolute bottom-10 right-6 md:right-10 bg-[#c41e1e] text-white p-5 rounded-xl text-[13px] font-semibold leading-snug shadow-[0_8px_30px_rgba(196,30,30,0.4)] animate-fadeUp md:opacity-0"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="font-['Cormorant_Garamond',serif] text-3xl font-bold block">
              27K+
            </span>
            Users Acquired
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-[#c41e1e] py-4 overflow-hidden whitespace-nowrap">
        <div className="inline-flex gap-0 animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                Product Strategy
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                Business Growth
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                Women's Economic Inclusion
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                Career Mentorship
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                Fintech & Payments
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/90 px-8">
                African Markets
              </span>
              <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white/40 px-8">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section
        className="bg-[#f5f3ef] text-[#080808] px-6 md:px-16 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
        id="about"
      >
        <div
          className="opacity-0 translate-y-8 transition-all duration-700 ease-in-out"
          ref={addToRefs}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c41e1e]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#c41e1e] uppercase">
              About Me
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-[54px] font-bold leading-[1.05] text-[#080808] mb-5">
            Built From Scratch.
            <br />
            <em className="italic text-[#c41e1e]">Focused on</em>
            <br />
            What Works.
          </h2>
          <p className="text-base font-light text-[#444] leading-[1.8] mb-8">
            I've been broke, stuck, and underestimated. I also built products
            processing millions across Africa and Europe. I know both sides and
            that's what I bring to every client.
            <br />
            <br />I work with startups, NGOs, multinationals, and ambitious
            professionals who are ready to stop guessing and start building
            things that actually work.
          </p>
        </div>
        <div
          className="flex flex-col gap-6 opacity-0 translate-y-8 transition-all duration-700 ease-in-out delay-100"
          ref={addToRefs}
        >
          <div className="bg-white rounded-2xl p-6 md:p-7 flex gap-5 items-start shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
            <div className="w-11 h-11 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center shrink-0 text-xl">
              💡
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-[#080808] mb-1.5 mt-0">
                I've Done the Work
              </h4>
              <p className="text-[13px] text-[#666] leading-[1.6] font-light m-0">
                Not theory. Real products, real markets, real results across
                Nigeria, UK, Benin Republic and beyond.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-7 flex gap-5 items-start shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
            <div className="w-11 h-11 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center shrink-0 text-xl">
              🤝
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-[#080808] mb-1.5 mt-0">
                We Build Together
              </h4>
              <p className="text-[13px] text-[#666] leading-[1.6] font-light m-0">
                I don't just advise. I get in the trenches with you and stay
                until it works.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-7 flex gap-5 items-start shadow-[0_2px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
            <div className="w-11 h-11 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center shrink-0 text-xl">
              📈
            </div>
            <div>
              <h4 className="text-[15px] font-semibold text-[#080808] mb-1.5 mt-0">
                Growth You Can Measure
              </h4>
              <p className="text-[13px] text-[#666] leading-[1.6] font-light m-0">
                Your product, business, or career. We track what actually moves
                the needle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        className="bg-[#111111] px-6 md:px-16 py-24 md:py-32"
        id="services"
      >
        <div
          className="text-center mb-16 md:mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-in-out"
          ref={addToRefs}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c41e1e]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#c41e1e] uppercase">
              What I Offer
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-[54px] font-bold text-white mt-4 mb-0">
            Your Partner in <em className="italic text-[#c41e1e]">Growth</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-2xl p-8 md:p-9 transition-all duration-700 ease-in-out hover:bg-white/10 hover:border-[#c41e1e]/30 hover:-translate-y-1.5 opacity-0 translate-y-8"
            ref={addToRefs}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c41e1e] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-14 h-14 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              🚀
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-[#c41e1e] uppercase mb-3.5">
              For Startups, NGOs & Multinationals
            </div>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-3 mt-0 leading-[1.2]">
              Product, Ops & Growth Consulting
            </h3>
            <p className="text-[14px] text-white/55 leading-[1.7] font-light m-0">
              You have an idea or a product that isn't performing. I help you
              figure out what to build, how to build it, and how to grow it.
              Product, ops, and growth, all in one place.
            </p>
          </div>
          <div
            className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-2xl p-8 md:p-9 transition-all duration-700 ease-in-out delay-100 hover:bg-white/10 hover:border-[#c41e1e]/30 hover:-translate-y-1.5 opacity-0 translate-y-8"
            ref={addToRefs}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c41e1e] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-14 h-14 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              🌱
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-[#c41e1e] uppercase mb-3.5">
              For Women-Led SMEs & Impact Orgs
            </div>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-3 mt-0 leading-[1.2]">
              Business Growth Strategy
            </h3>
            <p className="text-[14px] text-white/55 leading-[1.7] font-light m-0">
              Your business is running but not growing the way it should. I help
              you find the gaps, fix what's broken, and build a path that
              actually works for your market.
            </p>
          </div>
          <div
            className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-2xl p-8 md:p-9 transition-all duration-700 ease-in-out delay-200 hover:bg-white/10 hover:border-[#c41e1e]/30 hover:-translate-y-1.5 opacity-0 translate-y-8"
            ref={addToRefs}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#c41e1e] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            <div className="w-14 h-14 bg-[#c41e1e]/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              🎯
            </div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-[#c41e1e] uppercase mb-3.5">
              For Aspiring PMs, Women & Youth
            </div>
            <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-3 mt-0 leading-[1.2]">
              Career Coaching & Mentorship
            </h3>
            <p className="text-[14px] text-white/55 leading-[1.7] font-light m-0">
              You know you're capable of more but don't know how to get there. I
              help you build the skills, the confidence, and the strategy to
              move.
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section
        className="bg-[#080808] px-6 md:px-16 py-24 md:py-32 text-center"
        id="impact"
      >
        <div
          className="opacity-0 translate-y-8 transition-all duration-700 ease-in-out"
          ref={addToRefs}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c41e1e]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#c41e1e] uppercase">
              By the Numbers
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-[54px] font-bold text-white mb-4 mt-0">
            Rooted in Africa.
            <br />
            <em className="italic text-[#c41e1e]">Built for the World.</em>
          </h2>
          <p className="text-base text-[#888888] font-light mb-16 md:mb-[70px] max-w-[500px] mx-auto leading-[1.7]">
            Real experience across real markets. Here's what that looks like in
            numbers.
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-white/5 rounded-2xl overflow-hidden mb-20 opacity-0 translate-y-8 transition-all duration-700 ease-in-out delay-100"
          ref={addToRefs}
        >
          <div className="bg-[#1a1a1a] p-8 md:p-11 text-center">
            <div className="font-['Cormorant_Garamond',serif] text-4xl md:text-[52px] font-bold text-white leading-none">
              $600<span className="text-[#c41e1e]">K+</span>
            </div>
            <div className="text-[12px] text-[#888888] mt-2.5 font-normal tracking-[0.04em] leading-[1.5]">
              Transactions Processed in First 2 Months
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 md:p-11 text-center">
            <div className="font-['Cormorant_Garamond',serif] text-4xl md:text-[52px] font-bold text-white leading-none">
              27<span className="text-[#c41e1e]">K+</span>
            </div>
            <div className="text-[12px] text-[#888888] mt-2.5 font-normal tracking-[0.04em] leading-[1.5]">
              Users Acquired in 5 Months
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 md:p-11 text-center">
            <div className="font-['Cormorant_Garamond',serif] text-4xl md:text-[52px] font-bold text-white leading-none">
              $100<span className="text-[#c41e1e]">K</span>
            </div>
            <div className="text-[12px] text-[#888888] mt-2.5 font-normal tracking-[0.04em] leading-[1.5]">
              Pre-MVP Funding Raised
            </div>
          </div>
          <div className="bg-[#1a1a1a] p-8 md:p-11 text-center">
            <div className="font-['Cormorant_Garamond',serif] text-4xl md:text-[52px] font-bold text-white leading-none">
              5<span className="text-[#c41e1e]">+</span>
            </div>
            <div className="text-[12px] text-[#888888] mt-2.5 font-normal tracking-[0.04em] leading-[1.5]">
              Years Shipping Products Across 3 Continents
            </div>
          </div>
        </div>
      </section>

      {/* RED BAND */}
      <div
        className="bg-[#c41e1e] px-6 md:px-16 py-16 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-in-out"
        ref={addToRefs}
      >
        <div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-[52px] font-bold text-white leading-[1.05] m-0">
            Local Insight.
            <br />
            Global Standards.
          </h2>
          <p className="text-[15px] text-white/75 font-light mt-3 leading-[1.6] mb-0">
            I've built in the markets most consultants only read about.
            <br className="hidden md:block" />
            That's the difference.
          </p>
        </div>
        <a
          href="#contact"
          className="bg-white text-[#c41e1e] px-9 py-4 rounded-lg text-[14px] font-bold no-underline tracking-[0.06em] whitespace-nowrap transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] shrink-0"
        >
          Work With Me &rarr;
        </a>
      </div>

      {/* CONTACT */}
      <section
        className="bg-[#111111] px-6 md:px-16 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start"
        id="contact"
      >
        <div
          className="opacity-0 translate-y-8 transition-all duration-700 ease-in-out"
          ref={addToRefs}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 bg-[#c41e1e]"></div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#c41e1e] uppercase">
              Get In Touch
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-[54px] font-bold text-white mb-5 leading-[1.05] mt-0">
            Let's Build
            <br />
            <em className="italic text-[#c41e1e]">Something</em>
            <br />
            Together.
          </h2>
          <p className="text-[15px] text-[#888888] font-light leading-[1.8] mb-9">
            Whether you need a product consultant, a growth strategist, or a
            mentor who's been where you are, I'm here. Book a free call and
            let's figure out your next move.
          </p>
          <div className="flex flex-col gap-3.5">
            <a
              href="mailto:ekwochiadaeze@gmail.com"
              className="flex items-center gap-3.5 text-[14px] text-white/70 no-underline transition-colors duration-300 hover:text-white"
            >
              <div className="w-9 h-9 bg-[#c41e1e]/10 rounded-lg flex items-center justify-center text-base shrink-0">
                ✉️
              </div>
              ekwochiadaeze@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/ekwochi-adaeze-a93751148"
              className="flex items-center gap-3.5 text-[14px] text-white/70 no-underline transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-9 h-9 bg-[#c41e1e]/10 rounded-lg flex items-center justify-center text-base shrink-0">
                💼
              </div>
              linkedin.com/in/ekwochi-adaeze
            </a>
            <a
              href="https://instagram.com/growthwithada"
              className="flex items-center gap-3.5 text-[14px] text-white/70 no-underline transition-colors duration-300 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-9 h-9 bg-[#c41e1e]/10 rounded-lg flex items-center justify-center text-base shrink-0">
                📸
              </div>
              @growthwithada
            </a>
          </div>
        </div>
        <div
          className="opacity-0 translate-y-8 transition-all duration-700 ease-in-out delay-100"
          ref={addToRefs}
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                Your Name
              </label>
              <input
                type="text"
                placeholder="What should I call you?"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white font-['Outfit',sans-serif] font-light transition-colors duration-300 outline-none appearance-none hover:border-white/20 focus:border-[#c41e1e]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white font-['Outfit',sans-serif] font-light transition-colors duration-300 outline-none appearance-none hover:border-white/20 focus:border-[#c41e1e]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                What do you need help with?
              </label>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white font-['Outfit',sans-serif] font-light transition-colors duration-300 outline-none appearance-none hover:border-white/20 focus:border-[#c41e1e]">
                <option value="" className="bg-[#1a1a1a]">
                  Select a service
                </option>
                <option className="bg-[#1a1a1a]">
                  Product, Ops & Growth Consulting
                </option>
                <option className="bg-[#1a1a1a]">
                  Business Growth Strategy
                </option>
                <option className="bg-[#1a1a1a]">
                  Career Coaching & Mentorship
                </option>
                <option className="bg-[#1a1a1a]">Something else</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[11px] font-semibold tracking-[0.15em] text-white/40 uppercase">
                Tell me more
              </label>
              <textarea
                placeholder="What's going on? What do you want to achieve?"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[14px] text-white font-['Outfit',sans-serif] font-light transition-colors duration-300 outline-none appearance-none min-h-[120px] resize-y hover:border-white/20 focus:border-[#c41e1e]"
              ></textarea>
            </div>
            <button
              type="button"
              className="bg-[#c41e1e] text-white px-8 py-4 rounded-xl text-[14px] font-semibold tracking-[0.06em] border-none cursor-pointer font-['Outfit',sans-serif] transition-all duration-300 shadow-[0_8px_30px_rgba(196,30,30,0.3)] mt-2 hover:bg-[#a01515] hover:-translate-y-0.5"
            >
              Send Message &rarr;
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080808] px-6 md:px-16 py-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
        <Image
          src={logoNew}
          alt="Adaeze Logo"
          className="h-6 w-auto object-contain"
        />
        <p className="text-[12px] text-[#888888] font-light m-0 text-center">
          &copy; 2026 Adaeze Ekwochi. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#about"
            className="text-[12px] text-[#888888] no-underline transition-colors duration-300 hover:text-white"
          >
            About
          </a>
          <a
            href="#services"
            className="text-[12px] text-[#888888] no-underline transition-colors duration-300 hover:text-white"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-[12px] text-[#888888] no-underline transition-colors duration-300 hover:text-white"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
