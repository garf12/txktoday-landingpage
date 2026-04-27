import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import {
  Eye, Users, Mail, Facebook, TrendingUp, Award,
  Phone, AtSign, Newspaper, Store, Home,
  FileText, Video, Zap, Shield, CheckCircle2,
  ArrowRight, Star, Clock, Sparkles, Globe, Search,
  ThumbsUp, MessageCircle, Timer, Calendar, BarChart3, Flame,
  MousePointerClick, UserCheck, Activity, Layers
} from 'lucide-react'

function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-light"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={`${import.meta.env.BASE_URL}txk-logo.png`} alt="TXK Today" className="h-10" />
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#plans" className="hover:text-txk-orange transition-colors">Plans</a>
          <a href="#specialties" className="hover:text-txk-orange transition-colors">Specialties</a>
          <a href="#bundles" className="hover:text-txk-orange transition-colors">Bundles</a>
          <a href="#stats" className="hover:text-txk-orange transition-colors">Stats</a>
          <a href="#process" className="hover:text-txk-orange transition-colors">Process</a>
        </div>
        <a
          href="#contact"
          className="bg-txk-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-txk-orange-light transition-colors shadow-lg shadow-txk-orange/25"
        >
          Get Started
        </a>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-txk-darker">
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}hero-bg.jpg)`, y: bgY }}
      />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              width: 600 + i * 200,
              height: 600 + i * 200,
              border: '1px solid rgba(232, 125, 30, 0.3)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </div>

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-txk-orange rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-txk-orange text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Texarkana&apos;s #1 Digital News Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 tracking-tight"
        >
          Reach{' '}
          <span className="text-gradient">Texarkana</span>
          <br />
          Where It Matters
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Connect with hundreds of thousands of engaged local readers.
          TXKtoday is the daily must-read for Texarkana and the surrounding areas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#plans"
            className="group inline-flex items-center gap-2 bg-txk-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-txk-orange-light transition-all shadow-2xl shadow-txk-orange/30 hover:shadow-txk-orange/50"
          >
            View Advertising Plans
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: '15+ Million', label: 'Monthly Facebook Engagement', icon: Eye },
            { value: '200,000+', label: 'Monthly Unique Visitors', icon: Users },
            { value: '115,000+', label: 'Facebook Followers', icon: Facebook },
            { value: '2,500+', label: 'Email Subscribers', icon: Mail },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 text-txk-orange mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <svg className="absolute bottom-0 left-0 right-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z" fill="#fdf8f3" />
      </svg>
    </section>
  )
}

function About() {
  return (
    <section className="relative overflow-hidden">
      {/* Main content area with warm gradient background */}
      <div className="bg-gradient-to-b from-txk-cream via-white to-white pt-8 pb-12">
        {/* Orange accent bar */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="h-1 w-32 bg-gradient-to-r from-txk-orange to-txk-orange-light rounded-full origin-left mx-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image placeholder + decorative frame */}
            <AnimatedSection>
              <div className="relative">
                {/* Decorative corner accents */}
                <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-txk-orange rounded-tl-2xl" />
                <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-txk-orange rounded-br-2xl" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-txk-orange/15">
                  <img
                    src={`${import.meta.env.BASE_URL}images/txk-display.png`}
                    alt="TXKtoday Display"
                    className="w-full h-80 md:h-[420px] object-contain bg-txk-cream"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Right: Text content */}
            <AnimatedSection delay={0.2}>
              <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Since 2014</span>
              <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-6 leading-tight">
                The Voice of<br />Texarkana
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                TXKtoday chronicles news and events for Texarkana and the surrounding areas.
                With monthly readership in the hundreds of thousands, we&apos;re the daily must-read
                for those who want to stay informed — and often where <em>other news outlets</em> go
                to get their Texarkana crime and community news.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {['Schools', 'Events', 'Crime', 'Real Estate', 'Restaurants', 'Business', 'Community'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white text-txk-orange text-sm font-medium rounded-full border border-txk-orange/20 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>

            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Bottom divider into next section */}
      <svg className="w-full h-8 -mb-px" viewBox="0 0 1440 32" preserveAspectRatio="none">
        <path d="M0,32 L0,8 Q720,-8 1440,8 L1440,32 Z" fill="#0f0f1a" />
      </svg>
    </section>
  )
}

function Advertisers() {
  const logos = [
    { src: `${import.meta.env.BASE_URL}saulogo-32264.jpg`, alt: 'Southern Arkansas University' },
    { src: `${import.meta.env.BASE_URL}TECH-TM-02.webp`, alt: 'Arkansas Tech' },
    { src: `${import.meta.env.BASE_URL}UAHT_Logo_Red.png`, alt: 'UAHT' },
    { src: `${import.meta.env.BASE_URL}harvest.webp`, alt: 'Harvest' },
    { src: `${import.meta.env.BASE_URL}domino.png`, alt: 'Domino' },
    { src: `${import.meta.env.BASE_URL}four-state-fair.jpeg`, alt: 'Four State Fair' },
    { src: `${import.meta.env.BASE_URL}TISD.jpg`, alt: 'TISD' },
    { src: `${import.meta.env.BASE_URL}hospice.png`, alt: 'Hospice' },
  ]
  // Double the array for seamless infinite scroll
  const scrollLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="pt-8 pb-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Trusted Partners</span>
          <h2 className="text-3xl md:text-4xl font-black text-txk-dark mt-3 mb-3">
            Our Advertisers
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Join the businesses and organizations that trust TXKtoday to reach Texarkana
          </p>
        </AnimatedSection>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        <motion.div
          className="flex items-center gap-16 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 45,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {scrollLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-60 h-36 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-8 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BroadstreetAd({ adId }) {
  const containerRef = useRef(null)
  const loadedRef = useRef(false)
  useEffect(() => {
    if (!containerRef.current || loadedRef.current) return
    loadedRef.current = true
    const div = document.createElement('div')
    div.setAttribute('street-address', adId)
    containerRef.current.appendChild(div)

    const script = document.createElement('script')
    script.async = true
    script.src = `https://ad.broadstreetads.com/display/${adId}.js?sa=1&`
      + (window.broadstreet ? 'init=0' : '')
    containerRef.current.appendChild(script)
  }, [adId])
  return <div ref={containerRef} className="flex justify-center" />
}

function AdShowcase() {
  const ads = ['1364230', '1362381', '397725']
  const scrollAds = [...ads, ...ads, ...ads, ...ads]

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-4">
            Advertising Showcase
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            See examples of ads we create for our partners
          </p>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex items-center gap-8 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {scrollAds.map((adId, i) => (
            <div
              key={i}
              className="flex-shrink-0 glass rounded-2xl p-6"
            >
              <BroadstreetAd adId={adId} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Plans() {
  const plans = [
    {
      name: 'Spotlight',
      price: '$325',
      annual: '$3,250',
      impressions: '80,000+',
      description: 'Ad appears in articles and descending sidebar (on desktop). Featured article included.',
      features: ['In-article ads', 'Sidebar placement (desktop)', 'Featured article included', 'Free ad design'],
      popular: false,
    },
    {
      name: 'Showcase',
      price: '$750',
      annual: '$7,500',
      impressions: '120,000+',
      description: 'Your ad will appear above, below and beside the Story of the Day and all articles.',
      features: ['Story of the Day placement', 'Above & below articles', 'Beside content (desktop)', 'Free ad design'],
      popular: true,
    },
    {
      name: 'Prominence',
      price: '$900',
      annual: '$9,000',
      impressions: '160,000+',
      description: 'Top of page video and footer ad placement for all platforms. Complementary video creation.',
      features: ['Top-of-page video ad', 'Footer ad all platforms', 'Video creation included*', 'Free ad design'],
      popular: false,
    },
  ]

  return (
    <section id="plans" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Standard Plans</span>
          <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-4">
            Choose Your Visibility
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Our most popular options, newly optimized for maximum impact
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'bg-txk-dark text-white shadow-2xl shadow-txk-dark/30 scale-105'
                    : 'bg-white shadow-lg shadow-gray-100 border border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-txk-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-txk-dark'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-txk-orange' : 'text-txk-dark'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}> /mo</span>
                </div>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  or {plan.annual}/yr
                </p>

                <div className={`flex items-center gap-2 mb-6 px-4 py-3 rounded-xl ${
                  plan.popular ? 'bg-white/10' : 'bg-txk-cream'
                }`}>
                  <TrendingUp className="w-4 h-4 text-txk-orange" />
                  <span className={`text-sm font-semibold ${plan.popular ? 'text-white' : 'text-txk-dark'}`}>
                    Est. {plan.impressions} impressions
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-txk-orange' : 'text-green-500'}`} />
                      <span className={plan.popular ? 'text-gray-200' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`w-full py-3.5 rounded-full text-center font-semibold transition-all block ${
                    plan.popular
                      ? 'bg-txk-orange text-white hover:bg-txk-orange-light shadow-lg shadow-txk-orange/30'
                      : 'bg-txk-dark text-white hover:bg-txk-gray'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-txk-dark rounded-3xl p-10 md:p-12 text-center text-white shadow-2xl shadow-txk-dark/40 border border-white/10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-txk-orange/15 text-txk-orange text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" /> Total Coverage
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Want All Ad Positions?</h3>
            <p className="text-gray-400 mb-6">Maximum exposure across every placement on TXKtoday</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
              <div>
                <span className="text-5xl md:text-6xl font-black text-txk-orange">$1,650</span>
                <span className="text-lg text-gray-400">/mo<sup>+</sup></span>
              </div>
              <span className="text-gray-500 text-lg font-medium">or</span>
              <div>
                <span className="text-5xl md:text-6xl font-black text-white">$16,500</span>
                <span className="text-lg text-gray-400">/yr<sup>*</sup></span>
              </div>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-400 text-sm">*Yearly pricing must pay 6 months up front. <sup>+</sup>Complementary video creation with two-month agreement.</p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Specialties() {
  const items = [
    {
      icon: Newspaper,
      title: 'Community Announcement',
      price: '$225',
      description: 'Milestones, celebrations, weddings, engagements, graduations, birthdays, and more — posted to TXKtoday.com and preserved forever online.',
      includes: ['Article posted to TXKtoday.com', 'Shared on Facebook', 'Permanently archived online', 'Free graphic design'],
      note: 'All we need is a graphic and statement',
    },
    {
      icon: Store,
      title: 'New Business Feature',
      price: '$300',
      description: 'Special rate for new Texarkana businesses. Perfect for restaurants, food trucks, retail, health clinics, and creative startups.',
      includes: ['Featured article on TXKtoday.com', 'Article posted to Facebook', 'Onsite ribbon-cutting coverage available', 'Free graphic design'],
      note: 'Onsite ribbon-cutting coverage available',
    },
    {
      icon: Home,
      title: 'Real Estate Weekly Listing',
      price: '$285',
      description: 'Your open house or real estate listing with professional, customizable marketing templates.',
      includes: ['Listing posted to Facebook', 'One week of Showcase ads', 'Professional marketing templates', 'Video property walkthrough available'],
      note: 'Video property walkthrough available',
    },
    {
      icon: Facebook,
      title: 'Facebook Post(s)',
      price: 'From $350',
      description: 'Post on TXKtoday\'s Facebook page to our audience of over 115,000+ followers.',
      includes: ['Single post — $350', 'Twin posts — $625', 'Six Post Pack — $1,500', '115,000+ follower reach'],
      note: '115,000+ follower reach',
    },
  ]

  return (
    <section id="specialties" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">À La Carte Options</span>
          <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-4">
            Engage the Right Way
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Reach readers at the right moment with targeted advertising solutions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 h-full flex flex-col border border-gray-100 shadow-lg shadow-gray-50 hover:shadow-xl hover:shadow-txk-orange/10 transition-shadow"
              >
                <div className="w-14 h-14 bg-txk-cream rounded-2xl flex items-center justify-center mb-5 mx-auto">
                  <item.icon className="w-7 h-7 text-txk-orange" />
                </div>
                <h3 className="text-lg font-bold text-txk-dark mb-2 min-h-[3.5rem] text-center">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                <ul className="space-y-2 mb-4">
                  {item.includes.map((inc, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600">{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-gray-100 text-center">
                  <span className="text-3xl font-black text-txk-orange">{item.price}</span>
                  <p className="text-xs text-gray-400 mt-2">{item.note}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <AnimatedSection delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-txk-cream rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-11 h-11 bg-txk-orange rounded-xl flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-txk-dark text-sm">Featured Article</h4>
                <p className="text-xs text-gray-500">Posted to TXKtoday.com & Facebook</p>
              </div>
              <span className="text-xl font-black text-txk-orange ml-auto">$350</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-txk-cream rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-11 h-11 bg-txk-orange rounded-xl flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-txk-dark text-sm">Featured Video</h4>
                <p className="text-xs text-gray-500">Posted to TXKtoday.com & Facebook</p>
              </div>
              <span className="text-xl font-black text-txk-orange ml-auto">$850</span>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-txk-cream rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-11 h-11 bg-txk-orange rounded-xl flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-txk-dark text-sm">Event Promotion</h4>
                <p className="text-xs text-gray-500">Facebook post, article & video</p>
              </div>
              <span className="text-xl font-black text-txk-orange ml-auto whitespace-nowrap">From $250</span>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function Bundles() {
  const bundles = [
    {
      name: 'Splash Bundle',
      threeMonth: '$1,660',
      annual: '$5,644',
      includes: ['Spotlight display ads', 'Monthly Facebook post', 'Quarterly featured article'],
      description: 'Make a splash by combining our core products.',
    },
    {
      name: 'Super Bundle',
      threeMonth: '$3,400',
      annual: '$10,330',
      includes: ['Showcase display ads', 'Monthly Facebook posts + extra', 'Quarterly featured article'],
      description: 'A robust campaign that makes an impression.',
      popular: true,
    },
    {
      name: 'Maximum Bundle',
      threeMonth: '$4,040',
      annual: '$11,540',
      includes: ['Prominence display ads', 'Two monthly Facebook posts', 'Quarterly featured video'],
      description: 'No better way to maximize your message.',
    },
  ]

  return (
    <section id="bundles" className="py-24 bg-txk-darker relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-txk-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-txk-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Bundled Value Plans</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Save More, Reach More
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combine our best products for maximum impact at bundled pricing
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bundles.map((bundle, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className={`rounded-3xl p-8 h-full flex flex-col ${
                  bundle.popular
                    ? 'bg-gradient-to-b from-txk-orange to-txk-orange-light text-white shadow-2xl shadow-txk-orange/30'
                    : 'glass'
                }`}
              >
                {bundle.popular && (
                  <div className="inline-flex self-start items-center gap-1 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                    <Star className="w-3 h-3" /> Best Value
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {bundle.name}
                </h3>
                <p className={`text-sm mb-6 ${bundle.popular ? 'text-white/80' : 'text-gray-400'}`}>
                  {bundle.description}
                </p>

                <div className="mb-2">
                  <span className="text-4xl font-black text-white">{bundle.threeMonth}</span>
                  <span className={`text-sm ${bundle.popular ? 'text-white/60' : 'text-gray-500'}`}> / 3 months</span>
                </div>
                <p className={`text-sm mb-6 ${bundle.popular ? 'text-white/60' : 'text-gray-500'}`}>
                  or {bundle.annual}/yr
                </p>

                <ul className="space-y-3 flex-1">
                  {bundle.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${bundle.popular ? 'text-white' : 'text-txk-orange'}`} />
                      <span className={bundle.popular ? 'text-white/90' : 'text-gray-300'}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 w-full py-3.5 rounded-full text-center font-semibold transition-all block ${
                    bundle.popular
                      ? 'bg-white text-txk-orange hover:bg-gray-100'
                      : 'bg-txk-orange text-white hover:bg-txk-orange-light'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-2xl mx-auto glass rounded-2xl p-8 text-center"
          >
            <Zap className="w-10 h-10 text-txk-orange mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">New Business Special</h3>
            <p className="text-gray-400 mb-4">One week of Showcase ads, one Facebook post, and one Featured Article</p>
            <span className="text-5xl font-black text-txk-orange">$425</span>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section id="stats" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">By the Numbers</span>
          <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-4">
            Who Reads TXKtoday?
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {[
            { icon: Eye, value: '1.1M', label: 'Yearly Pageviews' },
            { icon: Users, value: '113K+', label: 'Unique Monthly Visitors' },
            { icon: Facebook, value: '11M', label: 'Facebook Pageviews' },
            { icon: Clock, value: '45+', label: 'Minutes per Month' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-gray-50 rounded-2xl p-5 shadow-lg shadow-txk-orange/5 border border-txk-orange/10 text-center"
            >
              <item.icon className="w-7 h-7 text-txk-orange mx-auto mb-2" />
              <div className="text-2xl font-black text-txk-dark">{item.value}</div>
              <div className="text-xs text-gray-500 mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-txk-dark mb-6">Gender Split</h3>
              <div className="flex gap-4 items-end h-40 mb-4">
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '66.6%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="w-full bg-gradient-to-t from-txk-orange to-txk-orange-light rounded-t-xl"
                  />
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '33.4%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    className="w-full bg-gradient-to-t from-txk-dark to-txk-gray rounded-t-xl"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 text-center">
                  <span className="text-3xl font-black text-txk-orange">66.6%</span>
                  <p className="text-sm text-gray-500">Women</p>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-3xl font-black text-txk-dark">33.4%</span>
                  <p className="text-sm text-gray-500">Men</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl font-black text-txk-orange"
                >85.9%</motion.div>
                <p className="text-gray-600 font-semibold mt-1">of our readers are local</p>
                <p className="text-gray-400 text-sm mt-1">The rest have a connection to Texarkana</p>
              </div>
              <h3 className="text-xl font-bold text-txk-dark mb-5">Where Our Readers Live</h3>
              <div className="space-y-4">
                {[
                  { label: 'Texarkana, TX', value: '37.5%', width: '100%' },
                  { label: 'Texarkana, AR', value: '27.1%', width: '72%' },
                  { label: 'Wake Village, TX', value: '7.4%', width: '20%' },
                  { label: 'Hope, AR', value: '5.3%', width: '14%' },
                  { label: 'Ashdown, AR', value: '4.4%', width: '12%' },
                  { label: 'Atlanta, TX', value: '4.2%', width: '11%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 font-medium">{item.label}</span>
                      <span className="font-bold text-txk-dark">{item.value}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-txk-orange to-txk-orange-light rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <div className="max-w-4xl mx-auto bg-txk-cream rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-txk-dark mb-2 text-center">Available Discounts</h3>
            <p className="text-gray-500 text-center mb-8">Discounts can be combined! Discounts available for up front payments.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Credit Card on File', value: '5%', icon: Shield },
                { label: 'Auto Recurring Billing', value: '5%', icon: Zap },
                { label: 'Nonprofits', value: '10%', icon: Award },
              ].map((d, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm"
                >
                  <d.icon className="w-8 h-8 text-txk-orange mx-auto mb-3" />
                  <div className="text-4xl font-black text-txk-dark mb-1">{d.value}</div>
                  <div className="text-sm text-gray-500">{d.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function PostPerformance() {
  const metrics = [
    { icon: Eye, value: '177,827', label: 'Views', accent: 'from-txk-orange to-txk-orange-light' },
    { icon: Users, value: '90,040', label: 'Unique Viewers', accent: 'from-txk-orange to-txk-orange-light' },
    { icon: TrendingUp, value: '2,077', label: 'Interactions', accent: 'from-txk-orange to-txk-orange-light' },
    { icon: ThumbsUp, value: '1,449', label: 'Reactions', accent: 'from-txk-orange to-txk-orange-light' },
    { icon: MessageCircle, value: '301', label: 'Comments', accent: 'from-txk-orange to-txk-orange-light' },
    { icon: Facebook, value: '45.9%', label: 'Reach Beyond Followers', accent: 'from-txk-orange to-txk-orange-light' },
  ]

  return (
    <section id="performance" className="py-24 bg-txk-darker relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] bg-txk-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[28rem] h-[28rem] bg-txk-orange/10 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,125,30,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,125,30,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-txk-orange text-sm font-semibold mb-5">
            <Timer className="w-4 h-4" />
            Real Post. Real 24 Hours.
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-4">
            One Post. <span className="text-gradient">One Day.</span>
            <br />This Kind of Reach.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A typical TXKtoday Facebook post — these are the numbers from the first 24 hours after publishing.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
          {/* Graphic */}
          <AnimatedSection className="lg:col-span-3">
            <div className="relative group">
              {/* Glow halo */}
              <div className="absolute -inset-1 bg-gradient-to-br from-txk-orange/40 via-txk-orange/0 to-txk-orange/40 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* 24 hour badge */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-6 -right-4 md:-right-8 z-20"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-txk-orange rounded-2xl blur-lg opacity-60" />
                  <div className="relative bg-gradient-to-br from-txk-orange to-txk-orange-light text-white rounded-2xl px-5 py-3 shadow-2xl shadow-txk-orange/50 border border-white/20">
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-90">Just</div>
                    <div className="text-3xl md:text-4xl font-black leading-none">24 Hrs</div>
                  </div>
                </div>
              </motion.div>

              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src={`${import.meta.env.BASE_URL}post-stats.jpg`}
                  alt="TXK Today Facebook post analytics — 177,827 views and 2,077 interactions in 24 hours"
                  className="w-full h-auto block"
                />
                {/* Subtle top gradient for depth */}
                <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Caption strip */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-txk-orange animate-pulse" />
                Actual screenshot from TXK Today&apos;s Facebook analytics
              </div>
            </div>
          </AnimatedSection>

          {/* Metrics */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl p-5 border border-white/5 hover:border-txk-orange/30 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center mb-3 shadow-lg shadow-txk-orange/20`}>
                    <m.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">{m.value}</div>
                  <div className="text-[11px] text-gray-400 mt-1.5 uppercase tracking-wide">{m.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Audience callout */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-4 bg-gradient-to-br from-txk-orange to-txk-orange-light rounded-2xl p-5 shadow-xl shadow-txk-orange/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-white" />
                <span className="text-white/90 text-xs font-bold uppercase tracking-widest">Prime Audience</span>
              </div>
              <p className="text-white font-semibold leading-snug">
                <span className="text-2xl font-black">54.6%</span> of viewers are women <span className="opacity-80">ages 25–44</span> — the buying decision-makers of the region.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 text-lg mb-6">
              Imagine your business, your event, or your message in front of <span className="text-white font-semibold">90,000+ unique local readers</span> — before tomorrow.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-txk-orange text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-txk-orange-light transition-all shadow-2xl shadow-txk-orange/30 hover:shadow-txk-orange/50"
            >
              Put Your Brand Here
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function MonthlyReach() {
  const metrics = [
    { icon: Eye, value: '15.5M+', label: 'Total Views', sub: 'January' },
    { icon: TrendingUp, value: '+28.4%', label: 'Month-Over-Month', sub: 'vs. prior 31 days', positive: true },
    { icon: Flame, value: '1.5M+', label: 'Peak Day', sub: 'Jan 26 alone' },
    { icon: BarChart3, value: '7', label: 'Posts Over 300K', sub: 'views each' },
  ]

  const competitors = [
    { name: 'TXK Today', followers: 116000, label: '116K+', us: true },
    { name: 'Texarkana FYI', followers: 52000, label: '52K' },
    { name: 'Texarkana Gazette', followers: 35000, label: '35K' },
    { name: 'KKYR Radio', followers: 20000, label: '20K' },
    { name: 'NPR Texarkana', followers: 798, label: '798' },
  ]
  const compMax = competitors[0].followers

  return (
    <section id="monthly" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Soft orange wash accents */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-txk-orange/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-txk-orange/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-txk-orange/10 text-txk-orange text-sm font-semibold mb-5 border border-txk-orange/20">
            <Calendar className="w-4 h-4" />
            A Typical Month on Our Page
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-txk-dark leading-[1.05] mb-4">
            31 Days. <span className="text-gradient">15.5 Million</span>
            <br />Facebook Views.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            And we&apos;re still climbing — January grew{' '}
            <span className="inline-flex items-center gap-1 font-bold text-green-600">
              <TrendingUp className="w-4 h-4" />+28.4%
            </span>{' '}
            over the previous 31 days.
          </p>
        </AnimatedSection>

        {/* Top-line metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-lg shadow-txk-orange/5 text-center"
            >
              <div className="w-10 h-10 bg-txk-cream rounded-xl flex items-center justify-center mx-auto mb-3">
                <m.icon className="w-5 h-5 text-txk-orange" />
              </div>
              <div className={`text-3xl font-black tracking-tight leading-none ${m.positive ? 'text-green-600' : 'text-txk-dark'}`}>
                {m.value}
              </div>
              <div className="text-xs font-semibold text-txk-dark mt-2 uppercase tracking-wide">{m.label}</div>
              <div className="text-[11px] text-gray-400 mt-1">{m.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Main graphic + top posts */}
        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-txk-orange/30 via-transparent to-txk-orange/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-txk-dark/20">
                <img
                  src={`${import.meta.env.BASE_URL}monthly-views.png`}
                  alt="15,527,552 Facebook views in January with most viewed posts"
                  className="w-full h-auto block"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-txk-orange animate-pulse" />
                Meta Business Suite — January page performance
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25} className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg shadow-gray-100">
              <div className="flex items-center gap-2 mb-1">
                <Facebook className="w-5 h-5 text-txk-orange" />
                <h3 className="text-lg font-bold text-txk-dark">Texarkana&apos;s Most Followed News Source</h3>
              </div>
              <p className="text-xs text-gray-400 mb-5">How TXK Today stacks up against every other Texarkana news outlet.</p>

              <ul className="space-y-4">
                {competitors.map((c, i) => {
                  const pct = Math.max(2, Math.round((c.followers / compMax) * 100))
                  return (
                    <li key={i}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className={`font-semibold ${c.us ? 'text-txk-dark' : 'text-gray-500'}`}>
                          {c.us && <span className="inline-block w-1.5 h-1.5 rounded-full bg-txk-orange mr-2 align-middle" />}
                          {c.name}
                        </span>
                        <span className={`tabular-nums font-black ${c.us ? 'text-txk-orange text-base' : 'text-gray-500'}`}>
                          {c.label}
                        </span>
                      </div>
                      <div className={`h-3 rounded-full overflow-hidden ${c.us ? 'bg-txk-cream' : 'bg-gray-100'}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * i, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            c.us
                              ? 'bg-gradient-to-r from-txk-orange to-txk-orange-light shadow-sm shadow-txk-orange/40'
                              : 'bg-gray-300'
                          }`}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">More followers than</div>
                <div className="text-sm font-semibold text-txk-dark">every other local news outlet <span className="text-txk-orange">combined</span>.</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function WebsiteTraffic() {
  const heroMetrics = [
    { icon: Eye, value: '810K', label: 'Pageviews', sub: '30 days' },
    { icon: Users, value: '114K', label: 'Active Users', sub: '30 days' },
    { icon: MousePointerClick, value: '2.1M', label: 'Events Tracked', sub: '30 days' },
    { icon: Activity, value: '543K', label: 'Sessions', sub: '30 days' },
  ]

  const secondary = [
    { icon: UserCheck, value: '313K', label: 'New Visitors' },
    { icon: Clock, value: '1m 07s', label: 'Avg. Engagement Time' },
    { icon: Layers, value: '22K', label: 'Weekly Active Users' },
    { icon: Flame, value: '3.3K', label: 'Daily Active Users' },
  ]

  const topPages = [
    { title: 'TXK Today | Homepage', views: '117K' },
    { title: 'Obituaries Texarkana', views: '29K' },
    { title: 'Dallas County jury…', views: '22K' },
    { title: 'Texarkana Pastor Arrest', views: '17K' },
    { title: 'Army awards $80M…', views: '15K' },
    { title: 'Crime Archives | Texarkana', views: '13K' },
  ]
  const topMax = 117

  return (
    <section id="website" className="py-24 bg-txk-darker relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-txk-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-txk-orange/5 rounded-full blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,125,30,1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,125,30,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-txk-orange text-sm font-semibold mb-5">
            <Globe className="w-4 h-4" />
            On the Website Itself
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-4">
            <span className="text-gradient">TXKtoday.com</span>
            <br />Where Texarkana Reads.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond social — these are real Google Analytics numbers from a single month on the site.
          </p>
        </AnimatedSection>

        {/* Hero metric row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4">
          {heroMetrics.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative glass rounded-2xl p-5 border border-white/5 hover:border-txk-orange/30 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-txk-orange/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-txk-orange to-txk-orange-light flex items-center justify-center mb-3 shadow-lg shadow-txk-orange/20">
                  <m.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">{m.value}</div>
                <div className="text-[11px] text-gray-300 mt-2 uppercase tracking-wider font-semibold">{m.label}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{m.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary metric row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
          {secondary.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="bg-white/[0.03] rounded-xl p-4 border border-white/5 flex items-center gap-3"
            >
              <m.icon className="w-5 h-5 text-txk-orange shrink-0" />
              <div className="min-w-0">
                <div className="text-lg font-black text-white leading-none">{m.value}</div>
                <div className="text-[11px] text-gray-400 mt-1 truncate">{m.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-column: screenshot + top pages */}
        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <AnimatedSection className="lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-txk-orange/30 via-transparent to-txk-orange/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}website-analytics.png`}
                  alt="Google Analytics engagement overview for TXKtoday.com — 810K views, 114K active users, 2.1M events"
                  className="w-full h-auto block"
                />
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-txk-orange animate-pulse" />
                Google Analytics — TXKtoday.com engagement overview
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <div className="glass rounded-3xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-5">
                <BarChart3 className="w-5 h-5 text-txk-orange" />
                <h3 className="text-lg font-bold text-white">Top Pages This Month</h3>
              </div>
              <ul className="space-y-3">
                {topPages.map((p, i) => {
                  const num = parseFloat(p.views)
                  const pct = Math.round((num / topMax) * 100)
                  return (
                    <li key={i}>
                      <div className="flex items-center justify-between text-sm mb-1.5">
                        <span className="text-gray-300 font-medium truncate pr-2">{p.title}</span>
                        <span className="font-black text-white tabular-nums shrink-0">{p.views}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.08 * i, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-txk-orange to-txk-orange-light rounded-full"
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>

              {/* Live indicator */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full" />
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                </div>
                <div className="text-xs text-gray-400">
                  <span className="text-white font-bold">72 readers</span> active in the last 30 minutes
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { title: 'Needs Assessment', desc: 'We meet with you to discuss your needs and goals.' },
    { title: 'Proposal', desc: 'We craft a proposal that targets your needs and goals.' },
    { title: 'Acceptance & Selection', desc: 'Accept the proposal and select your package.' },
    { title: 'Campaign Creation', desc: 'We draft digital creatives and sponsored content for your approval. ~1 week.' },
    { title: 'Campaign Launch', desc: 'Your campaign goes live with maximum attention. 1-2 weeks from acceptance.' },
    { title: 'Campaign Check-in', desc: 'We check in 3 times throughout to ensure performance and satisfaction.' },
    { title: 'Completion & Review', desc: 'We review performance and identify the biggest successes.' },
  ]

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-txk-dark mt-3 mb-4">
            Simple. Transparent. Effective.
          </h2>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-txk-orange rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-txk-orange/10"
                  >
                    <span className="text-txk-orange font-bold text-lg">{i + 1}</span>
                  </motion.div>
                  <div className="bg-white rounded-2xl p-6 flex-1 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-txk-dark text-lg mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 bg-txk-darker relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-txk-orange/20 rounded-full"
          style={{ left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 relative text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Ready to Reach<br />
            <span className="text-gradient">Texarkana?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how TXKtoday can help your business grow with targeted,
            local digital advertising.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="mailto:Stephen@TXKtoday.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-txk-orange text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl shadow-txk-orange/30 hover:bg-txk-orange-light transition-colors"
            >
              <Mail className="w-5 h-5" />
              Stephen@TXKtoday.com
            </motion.a>
            <motion.a
              href="tel:9032807977"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 glass text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              903.280.7977
            </motion.a>
          </div>

          <div className="glass rounded-2xl p-6 inline-flex items-center gap-4">
            <img src={`${import.meta.env.BASE_URL}txk-logo.png`} alt="TXK Today" className="h-12" />
            <div className="text-left">
              <span className="text-gray-400 text-sm">Texarkana&apos;s Daily Must-Read Since 2014</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

function AdditionalServices() {
  const services = [
    {
      icon: Globe,
      title: 'Websites',
      description: 'Full websites or one-off landing pages tailored to your business. Modern, mobile-friendly designs that convert visitors into customers.',
    },
    {
      icon: Search,
      title: 'SEO Consultation',
      description: 'Expert guidance to improve your search engine rankings. We help local businesses get found by the customers who are looking for them.',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/digital.jpg)` }}
      />
      <div className="absolute inset-0 bg-txk-darker/70" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <span className="text-txk-orange font-semibold text-sm tracking-wider uppercase">Beyond Advertising</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-4">
            Additional Marketing Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Extend your reach with our full suite of digital marketing solutions
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 h-full flex flex-col border border-gray-100 shadow-lg shadow-gray-50 hover:shadow-xl hover:shadow-txk-orange/10 transition-shadow"
              >
                <div className="w-14 h-14 bg-txk-cream rounded-2xl flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-txk-orange" />
                </div>
                <h3 className="text-xl font-bold text-txk-dark mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-txk-darker border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TXKtoday.com. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <PostPerformance />
      <MonthlyReach />
      <WebsiteTraffic />
      <Advertisers />
      <Plans />
      <Specialties />
      <Bundles />
      <AdShowcase />
      <div className="relative bg-white py-4">
        <div className="max-w-5xl mx-auto px-6 flex items-center gap-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-txk-orange/30 to-txk-orange" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-txk-orange/40" />
            <div className="w-3 h-3 rounded-full bg-txk-orange" />
            <div className="bg-txk-orange text-white font-black text-lg px-3 py-1 tracking-tight rounded-lg">TXK</div>
            <div className="w-3 h-3 rounded-full bg-txk-orange" />
            <div className="w-2 h-2 rounded-full bg-txk-orange/40" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-txk-orange/30 to-txk-orange" />
        </div>
      </div>
      <Stats />
      <Process />
      <AdditionalServices />
      <Contact />
      <Footer />
    </div>
  )
}
