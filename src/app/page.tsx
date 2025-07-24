"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Zap,
  Shield,
  TrendingUp,
  Target,
  Lightbulb,
  Settings,
  Phone,
  Mail,
  MapPin,
  Play,
  ChevronLeft,
  ChevronRight,
  PhoneCall,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import heroImg from "@/assets/heroImg.jpg";
import Image from "next/image";

const InqordWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Transformation Strategy",
      description:
        "We assess your current systems and processes, then design a practical roadmap to help you shift into a digital-first operation, securely and efficiently.",
      subtext: "NGOs, SMEs, public sector teams, and social enterprises.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Solutions",
      description:
        "Offers strategic guidance and innovative solutions to propel startups forward and specialize in fostering creativity and efficiency to achieve sustainable growth and market success.",
      subtext: "Founders, dev agencies, innovation teams, and social startups.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description:
        "Offers strategic guidance and innovative solutions to propel startups forward and specialize in fostering creativity and efficiency to achieve sustainable growth and market success.",
      subtext: "INGOs, foundations, development agencies.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Secure Tech for Development Advisory",
      description:
        "We help you build and assess digital systems with cybersecurity, user protection, and ethical tech at the core, especially in sensitive or large-scale contexts.",
      subtext: "Civic tech projects, GovTech teams, donor-funded programs.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Training & Capacity Building",
      description:
        "We deliver practical, hands-on training for teams and leaders in product thinking, agile execution, innovation management, and digital delivery.",
      subtext:
        "Program managers, internal teams, early-stage PMs, tech-for-good teams.",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Retainer Packages (Monthly)",
      description:
        "For ongoing product strategy, digital oversight, or fractional PM support, we offer monthly retainers tailored to your needs, from lightweight advisory to deep hands-on engagement.",
      subtext: "Founders, startup teams, delivery leads, and program managers.",
    },
  ];

  const workProcess = [
    {
      step: "01",
      title: "Assessment and Planning",
      description:
        "We analyze your current situation and create a comprehensive plan for success.",
    },
    {
      step: "02",
      title: "Solution and Development",
      description:
        "Our team develops and implements tailored solutions for your specific needs.",
    },
    {
      step: "03",
      title: "Support and Optimization",
      description:
        "Ongoing support and continuous optimization to ensure sustained growth.",
    },
  ];

  const testimonials = [
    {
      name: "Femi A.",
      role: "Startup Founder",
      content:
        "ImpactLayer helped us move from idea to execution faster than we imagined. Their process was structured, collaborative, and results-driven. We now have a working MVP that speaks for itself.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Tolu E.",
      role: "Digital Lead at CivicTech Project",
      content:
        "Working with Adaeze and her team was a game-changer. They brought clarity to our project and managed everything from scope to delivery with zero chaos. Highly recommended",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Lami B.",
      role: "Program Manager, Social Enterprise",
      content:
        "They didn’t just advise, they got into the trenches with us. From product strategy to user testing, the support was top-tier.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Chinedu O.",
      role: "CEO, Logistics Startup",
      content:
        "We’d been stuck in endless planning loops. ImpactLayer came in, clarified our roadmap, and helped us launch in 10 weeks. It was the execution muscle we didn’t know we needed.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Hafsat A.",
      role: "Director, Development Initiative",
      content:
        "They understood our mission and translated it into a digital solution that works, without overcomplicating things. The team was responsive, patient, and deeply strategic.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Brian K.",
      role: "Founder, Fintech Platform",
      content:
        "We didn’t just get a product—we got a partner. From building our MVP to post-launch support, their level of ownership was rare",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Ijeoma N.",
      role: "Innovation Lead, International Nonprofit",
      content:
        "Their training changed how we approach digital delivery. It wasn’t theory, it was hands-on, contextual, and instantly applicable to our projects.",
      rating: 5,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-gray-900">Impact Layer</div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Process
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="hidden lg:block">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Process
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit">
                  Get Started
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="lg:py-20 py-0  relative z-10 ">
        <div className="absolute z-[-10] bottom-0 top-0 right-0 left-0 hidden lg:block ">
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-gray-900 opacity-70 z-10 " />

          {/* Background image */}
          <Image
            src={heroImg}
            alt="background"
            objectFit="cover"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto  gap-12 items-center">
            <div className="absolute z-[-10] bottom-150 top-0 right-0 left-0 lg:hidden block h-[400px]">
              {/* Blue overlay */}
              <div className="absolute inset-0 bg-gray-900 opacity-60 z-10" />

              {/* Background image */}
              <Image
                src={heroImg}
                alt="background"
                objectFit="cover"
                className="w-full object-cover h-[400px]"
              />
            </div>
            <div className="text-center lg:text-left py-20 lg:py-0">
              <h1 className="text-3xl lg:text-6xl font-bold text-gray-100 mb-6 leading-tight">
                Leading with
                <span className="text-blue-600 block">technology</span>
                delivering with trust.
              </h1>
              <p className="text-lg lg:text-2xl text-gray-100 mb-8 leading-relaxed">
                Offers tailored consulting service to ignite startup growth.
                From strategic planning to implementation, we empower
                entrepreneurs with tools for success in competitive markets.
              </p>
            </div>
            {/* Stats */}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                Start A Project <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center">
                <PhoneCall className="mr-2 w-5 h-5" /> Talk With An Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className=" lg:mt-[-50px] relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:px-20 px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            Strategic Partnership
          </div>
          <div className="text-gray-600">
            We don’t just consult, we co-create. Our work is grounded in
            collaboration, trust, and long-term value for every client we serve.
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            Expert-Led Delivery
          </div>
          <div className="text-gray-600">
            Our team brings deep expertise in product strategy, platform design,
            and digital transformation, with a sharp focus on execution
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
          <div className="text-2xl font-bold text-blue-600 mb-2">
            Proven Track Record
          </div>
          <div className="text-gray-600">
            From idea to implementation, we’ve supported high-impact teams and
            ventures across sectors to launch scalable, user-centered digital
            products.
          </div>
        </div>
      </div>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-full ">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="About us"
                className="w-full h-80 lg:h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="h-full ">
              <div className="text-blue-600 font-semibold mb-4">About us</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Grounded in Strategy,
                <br />
                <span className="text-xl lg:text-3xl">
                  Focused on Outcomes.
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                ImpactLayer is a product innovation and delivery firm. We work
                with founders, startups, and forward-thinking teams to turn
                ideas into usable, scalable digital products. Whether you're
                starting from a concept or need help getting your MVP built, we
                handle everything—from strategy and scoping to assembling the
                right tech team and shipping your product. Fast, structured, and
                outcome-driven.
              </p>
              <div>
                <h1 className="text-gray-900 font-bold">
                  On-Demand Expert Support
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Tap into our team of product strategists, consultants, and
                  transformation specialists anytime you need to move with
                  confidence.
                </p>
              </div>
              <article className="flex lg:flex-row flex-col items-center justify-start gap-x-4 rounded-xl gap-y-4">
                <div className=" bg-blue-600 text-white py-2 px-8 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
                <div className="">
                  <h1 className="text-gray-900 font-bold ">
                    Call to ask anything:
                  </h1>
                  <p className="text-lg text-gray-600 ">+234-9070770139</p>
                </div>
              </article>

              {/* <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Dedicated 24/7 support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">Agile & fast working</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">
                    Expert team of professionals
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              What we offer
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              High-impact design and development service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions to help startups and businesses
              achieve their goals through innovative strategies and cutting-edge
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#eff3fa] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Who's it for:
                </button>
                <span className="text-gray-900">{service.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 mr-3" />
              <span className="text-xl font-semibold">
                Highly acclaimed company
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              5000+ Client reviews
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore amet pariatur. Excepteur sint occaecat cupidatat non
              proident.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-3 text-lg font-semibold">
                Trust score 4.5
              </span>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">
              Working process
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Explore our best proven work procedure
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {workProcess.map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                      {process.step}
                    </div>
                    {index < workProcess.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-semibold mb-4">Testimonial</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              See what our customers are saying
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don’t just deliver work, we build lasting relationships. Our
              clients trust us because we listen, we lead with clarity, and we
              care about what success means for them.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center">
                {/* <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                /> */}
                <div className="text-center">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contact us today to discuss how we can help your startup achieve
              its goals and reach new heights of success.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">hello@inqord.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">New York, NY</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 bg-white"
                ></textarea>
                <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-6">Impact Layer</div>
              <p className="text-gray-400 mb-6">
                We help founders, organizations, and product teams turn complex
                ideas into working digital products. From strategy to execution,
                we deliver clarity, speed, and results you can launch.
              </p>

              <div className="flex flex-row gap-x-3">
                <a href="facebook.com/impactlayer">
                  <Facebook />
                </a>
                <a href="@impactlayer.co">
                  <Instagram />
                </a>
                <a href="linkedin.com/company/impactlayer">
                  <Linkedin />
                </a>
                <a href="@impactlayer">
                  <X />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Quick Links (solutions)</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                  Request a Project Estimate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  {" "}
                  <span className="font-bold">Address</span> <br /> Abuja,
                  Nigeria (Remote, Global Access)
                </li>
                <li>
                  {" "}
                  <span className="font-bold">Opening Hours</span> <br />{" "}
                  Weekdays: 09:00 – 17:00
                  <br/>
                  Saturday: 10:00 – 14:00
                </li>
               
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 ImpactLayer. All rights reserved.</p>
            <p>
              Terms & Conditions | Privacy Policy | Legal
              </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InqordWebsite;
