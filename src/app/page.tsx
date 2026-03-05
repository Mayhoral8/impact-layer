"use client";
import heroImg from "@/assets/main/heroImg.jpg";
import logoWhite from "@/assets/main/logo-white.png";
import logo from "@/assets/main/logo.png";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Menu,
  Settings,
  Shield,
  Star,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const InqordWebsite = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // TIVA Red brand color
  const PRIMARY_RED = "#D11E26";

  const services = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      title: "Digital Transformation Strategy",
      description:
        "We assess your current systems and processes, then design a practical roadmap to help you shift into a digital-first operation, securely and efficiently.",
      subtext: "NGOs, SMEs, public sector groups",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Innovation Solutions",
      description:
        "Offers strategic guidance and innovative solutions to propel startups forward and specialize in fostering creativity and efficiency.",
      subtext: "Founders, dev agencies, social startups",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Strategic Planning",
      description:
        "Offers strategic guidance and innovative solutions to propel startups forward and specialize in fostering creativity and efficiency.",
      subtext: "INGOs, foundations, dev agencies",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Secure Tech Advisory",
      description:
        "We help you build and assess digital systems with cybersecurity, user protection, and ethical tech at the core, especially in large-scale contexts.",
      subtext: "Civic tech projects, GovTech teams",
    },
    {
      icon: <Settings className="w-7 h-7" />,
      title: "Training & Capacity Building",
      description:
        "We deliver practical, hands-on training for teams and leaders in product thinking, agile execution, innovation management.",
      subtext: "Program managers, internal teams",
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Retainer Packages (Monthly)",
      description:
        "For ongoing product strategy, digital oversight, or fractional PM support, we offer monthly retainers tailored to your needs.",
      subtext: "Founders, startup teams, delivery leads",
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Assessment and Planning",
      description:
        "We analyze your current situation and create a comprehensive plan for success.",
      icon: <Map className="w-5 h-5 text-white" />,
    },
    {
      step: "02",
      title: "Solution and Development",
      description:
        "Our team develops and implements tailored solutions for your specific needs.",
      icon: <Settings className="w-5 h-5 text-white" />,
    },
    {
      step: "03",
      title: "Support and Optimization",
      description:
        "Ongoing support and continuous optimization to ensure sustained growth.",
      icon: <TrendingUp className="w-5 h-5 text-white" />,
    },
  ];

  const testimonials = [
    {
      name: "Femi A.",
      role: "Startup Founder",
      content:
        "ImpactLayer helped us move from idea to execution faster than we imagined. Their process was structured, collaborative, and results-driven. We now have a working MVP that speaks for itself.",
      rating: 5,
    },
    {
      name: "Tolu E.",
      role: "Digital Lead at CivicTech Project",
      content:
        "Working with Adaeze and her team was a game-changer. They brought clarity to our project and managed everything from scope to delivery with zero chaos. Highly recommended",
      rating: 5,
    },
    {
      name: "Lami B.",
      role: "Program Manager, Social Enterprise",
      content:
        "They didn’t just advise, they got into the trenches with us. From product strategy to user testing, the support was top-tier.",
      rating: 5,
    },
    {
      name: "Chinedu O.",
      role: "CEO, Logistics Startup",
      content:
        "We’d been stuck in endless planning loops. ImpactLayer came in, clarified our roadmap, and helped us launch in 10 weeks. It was the execution muscle we didn’t know we needed.",
      rating: 5,
    },
  ];

  const keyBenefits = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Strategic Partnership",
      desc: "We don't just consult, we co-create. Grounded in collaboration and trust.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Expert-Led Delivery",
      desc: "Deep expertise in product strategy and digital transformation.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Proven Track Record",
      desc: "From idea to implementation, we've supported high-impact teams natively.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] scroll-smooth font-sans text-[#1a1a1a]">
      {/* Navbar - Tiva Style (Transparent on top, sticky black/white) */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[80px]">
            <div className="text-2xl font-bold flex-shrink-0">
              {/* If you have a clear logo use it, assuming standard logo here */}
              <Image
                src={logo}
                alt="Impact Layer"
                height={40}
                width={140}
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-10">
              <a
                href="#home"
                className="text-[15px] font-medium text-gray-800 hover:text-[#D11E26] transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-[15px] font-medium text-gray-800 hover:text-[#D11E26] transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-[15px] font-medium text-gray-800 hover:text-[#D11E26] transition-colors"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-[15px] font-medium text-gray-800 hover:text-[#D11E26] transition-colors"
              >
                Testimonials
              </a>
            </nav>

            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                className="bg-[#D11E26] text-white text-[15px] font-medium px-7 py-3 rounded-md hover:bg-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-[1px]"
              >
                Book a Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-[80px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg pb-6 pt-2 px-4 z-50">
            <div className="flex flex-col space-y-5">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium text-lg border-b border-gray-50 pb-2"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium text-lg border-b border-gray-50 pb-2"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium text-lg border-b border-gray-50 pb-2"
              >
                Services
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 font-medium text-lg border-b border-gray-50 pb-2"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#D11E26] text-white text-center font-medium px-6 py-3 rounded-md w-full mt-2"
              >
                Book a Consultation
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section - Tiva Style (Dark with red accent text) */}
      <section
        id="home"
        className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#050505] text-white"
      >
        {/* Dark overlay with heroImg */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
          <Image
            src={heroImg}
            alt="background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#0a0a0a]/90 to-transparent z-0"></div>
        {/* Subtle red glow mimicking Tiva */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent z-0 opacity-70 blur-3xl"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8">
              Leading with <span className="text-[#D11E26]">technology,</span>{" "}
              <br className="hidden lg:block" />
              delivering with trust.
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              Offers tailored consulting service to ignite startup growth. From
              strategic planning to implementation, we empower entrepreneurs
              with tools for success in competitive markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-[#D11E26] text-white px-8 py-4 rounded-md hover:bg-red-700 transition font-semibold text-[16px] flex items-center justify-center shadow-[0_4px_14px_0_rgb(209,30,38,0.39)]"
              >
                Start A Project <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="border border-gray-600 text-white px-8 py-4 rounded-md hover:bg-white hover:text-black transition font-semibold text-[16px] flex items-center justify-center"
              >
                Talk With An Expert{" "}
                <ArrowUpRight className="ml-2 w-5 h-5 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - "More Than Digital Services. We Build Digital Businesses." */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Content (Tiva Style - Bold heading) */}
            <div className="lg:col-span-5" data-aos="fade-right">
              <div className="text-[#D11E26] font-bold text-sm tracking-wider uppercase mb-5 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[#D11E26]"></span> About Us
              </div>
              <h2 className="text-4xl lg:text-[50px] font-bold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                Grounded in Strategy, <br />
                <span className="text-[#D11E26]">Focused on Outcomes.</span>
              </h2>
              <p className="text-[17px] text-gray-600 leading-relaxed mb-8">
                ImpactLayer is a product innovation and delivery firm. We work
                with founders, startups, and forward-thinking teams to turn
                ideas into usable, scalable digital products. Whether you're
                starting from a concept or need help getting your MVP built, we
                handle everything—from strategy and scoping to assembling the
                right tech team and shipping your product. Fast, structured, and
                outcome-driven.
              </p>

              <div className="p-6 bg-[#fafafa] border-l-4 border-[#D11E26] rounded-r-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  On-Demand Expert Support
                </h4>
                <p className="text-gray-600 text-[15px]">
                  Tap into our team of product strategists, consultants, and
                  transformation specialists anytime you need to move with
                  confidence.
                </p>
              </div>
            </div>

            {/* Right Content (Tiva Style - Soft red icons in list) */}
            <div
              className="lg:col-span-6 lg:col-start-7 space-y-8"
              data-aos="fade-left"
            >
              {keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FFF0F0] flex items-center justify-center text-[#D11E26] group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-[16px]">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered statement at bottom of About */}
          <div
            className="mt-24 text-center max-w-3xl mx-auto"
            data-aos="fade-up"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">
              We don't just advise.{" "}
              <span className="text-[#D11E26]">
                We design, implement, and stay with you through execution.
              </span>
            </h3>
          </div>
        </div>
      </section>

      {/* Services Section - Tiva Style Cards */}
      <section
        id="services"
        className="py-24 bg-[#fafafa] relative overflow-hidden"
      >
        {/* Subtle background patterns */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0 transform translate-x-1/2 -translate-y-1/2"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-[#D11E26] font-bold text-sm tracking-wider uppercase mb-4">
              What We Offer
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Your Digital Consulting & Transformation Partner
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05),0_10px_20px_-2px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 rounded-[18px] bg-[#FFF0F0] text-[#D11E26] flex items-center justify-center mb-6 group-hover:bg-[#D11E26] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-[22px] font-bold mb-4 text-gray-900 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-[16px]">
                  {service.description}
                </p>
                <div className="mt-auto border-t border-gray-100 pt-5">
                  <span className="text-[14px] font-bold text-gray-400 uppercase tracking-wide block mb-1">
                    Who it's for
                  </span>
                  <span className="text-[#D11E26] font-medium text-[15px]">
                    {service.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Process Section - Pink Cards  */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-[#D11E26] font-bold text-sm tracking-wider uppercase mb-4">
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Strategic Programs for Every Growth Stage
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {workProcess.map((process, index) => (
                <div
                  key={index}
                  className="bg-[#FFF0F0] p-10 rounded-2xl transition-all duration-300 relative overflow-hidden group hover:shadow-md"
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                >
                  {/* Decorative large number in background */}
                  <div className="absolute -right-6 -bottom-10 text-[150px] font-black text-[#D11E26] opacity-[0.03] leading-none pointer-events-none transition-transform group-hover:scale-110">
                    {process.step}
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-2xl font-black text-[#D11E26]">
                      {process.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#D11E26] flex items-center justify-center shadow-lg">
                      {process.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                    {process.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-[16px] relative z-10">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center" data-aos="fade-up">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-[#D11E26] text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition shadow-[0_4px_14px_0_rgb(209,30,38,0.39)] hover:shadow-[0_6px_20px_rgba(209,30,38,0.23)] hover:-translate-y-0.5"
              >
                Explore All Offerings <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Red Banner Full Width CTA */}
      <section className="py-24 bg-[#D11E26] text-white relative overflow-hidden">
        {/* Very subtle pattern inside red to mimic Tiva's mesh */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-4xl lg:text-[56px] font-bold leading-[1.15] tracking-tight mb-8">
              Built for Local Realities. <br /> Designed for Global Standards.
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto font-light">
              We're the execution muscle you didn't know you needed. Tap into
              our team of product strategists and build something lasting.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-[#fafafa]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="text-[#D11E26] font-bold text-sm tracking-wider uppercase mb-4">
              Tested & Proven
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Trusted by Forward-Thinking Leaders
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            {/* Tiva Style - White card, soft border/shadow, avatar with red */}
            <div
              className="bg-white p-10 lg:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all min-h-[300px] flex flex-col justify-center border border-gray-100 relative overflow-hidden"
              data-aos="fade-up"
            >
              {/* Subtle Quote Mark */}
              <div className="absolute top-6 left-8 text-[120px] font-serif text-[#FFF0F0] leading-none select-none">
                "
              </div>

              <div className="relative z-10">
                <div className="flex items-center mb-8 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#D11E26] fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-2xl lg:text-[28px] text-gray-800 leading-snug mb-10 font-medium">
                  {testimonials[currentTestimonial].content}
                </blockquote>

                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-[#FFF0F0] flex items-center justify-center text-[#D11E26] font-bold text-xl mr-4 border border-red-100">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-[17px]">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-500 text-[15px]">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation (Tiva style - outside or soft overlaid buttons) */}
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-[#D11E26] hover:text-white hover:border-[#D11E26] transition-all shadow-sm"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-[#D11E26] hover:text-white hover:border-[#D11E26] transition-all shadow-sm"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? "bg-[#D11E26] w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section - Tiva Style (White/Patterned background) */}
      <section className="py-24 bg-white relative border-t border-gray-100">
        {/* Subtle pattern matching Tiva footer CTA area */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        ></div>

        <div
          className="container mx-auto px-4 lg:px-8 relative z-10 text-center"
          id="contact"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to Build a{" "}
            <span className="text-[#D11E26]">Digital World?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Let's discuss how our strategies and frameworks can help your
            business achieve its goals and secure its market position.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:adaeze@impactlayer.tech"
              className="bg-[#D11E26] text-white px-8 py-4 rounded-md font-semibold hover:bg-red-700 transition shadow-lg flex justify-center items-center"
            >
              Book a Strategy Session
            </a>
            <a
              target="_blank"
              href="https://adaezeekwochi.substack.com/"
              className="border border-gray-300 text-gray-800 bg-white px-8 py-4 rounded-md font-semibold hover:border-gray-800 transition flex justify-center items-center"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Global Footer - Tiva Style (Black with sharp clean text) */}
      <footer className="bg-[#050505] text-white pt-20 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-8">
                <Image
                  src={logoWhite}
                  alt="Impact Layer Logo"
                  height={45}
                  width={160}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed font-light text-[15px]">
                We help founders, organizations, and product teams turn complex
                ideas into working digital products. From strategy to execution,
                we deliver clarity and results.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D11E26] transition-colors text-gray-300 hover:text-white"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D11E26] transition-colors text-gray-300 hover:text-white"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D11E26] transition-colors text-gray-300 hover:text-white"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 tracking-wide">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Innovation Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Strategic Planning
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Training & Capacity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 tracking-wide">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="https://adaezeekwochi.substack.com/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors text-[15px]"
                  >
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 tracking-wide">
                Get in Touch
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-3 text-gray-400 text-[15px]">
                  <MapPin
                    size={20}
                    className="text-[#D11E26] flex-shrink-0 mt-0.5"
                  />
                  <span>
                    Abuja, Nigeria <br /> (Remote, Global Access)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-[15px]">
                  <Mail
                    size={20}
                    className="text-[#D11E26] flex-shrink-0 mt-0.5"
                  />
                  <a
                    href="mailto:adaeze@impactlayer.tech"
                    className="hover:text-white transition-colors"
                  >
                    adaeze@impactlayer.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} ImpactLayer. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InqordWebsite;
