"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    const onClick = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Carousel Témoignages
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayRef = useRef<boolean>(true);
  useEffect(() => { autoPlayRef.current = autoPlay; }, [autoPlay]);
  const getMaxIndex = () => {
    const el = trackRef.current; if (!el) return 0;
    const cards = el.querySelectorAll('.testimonial-card').length;
    return Math.max(0, cards - 1);
  };
  const scrollToSlide = (i: number) => {
    const el = trackRef.current; if (!el) return;
    const card = el.querySelector('.testimonial-card') as HTMLElement | null; if (!card) return;
    const style = getComputedStyle(el); const gap = parseFloat(style.gap) || 24;
    const rect = card.getBoundingClientRect();
    const step = rect.width + gap;
    const maxI = getMaxIndex();
    const target = Math.max(0, Math.min(maxI, i));
    // pause autoplay le temps du scroll smooth
    setAutoPlay(false);
    // disable scroll snap during programmatic scroll to avoid overshoot
    const prevSnap = el.style.scrollSnapType;
    el.style.scrollSnapType = 'none';
    el.scrollTo({ left: target * step, behavior: 'smooth' });
    setActiveSlide(target);
    window.setTimeout(() => {
      el.style.scrollSnapType = prevSnap || '';
      setAutoPlay(true);
    }, 500);
  };

  // synchroniser l’état actif avec le scroll continu
  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    const card = el.querySelector('.testimonial-card') as HTMLElement | null; if (!card) return;
    const style = getComputedStyle(el); const gap = parseFloat(style.gap) || 24;
    const step = card.offsetWidth + gap;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / step);
      const maxI = getMaxIndex();
      setActiveSlide(Math.max(0, Math.min(maxI, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => { el.removeEventListener('scroll', onScroll); };
  }, []);


  useEffect(() => {
    const el = trackRef.current; if (!el) return;
    const onScroll = () => {
      const card = el.querySelector('.testimonial-card') as HTMLElement | null; if (!card) return;
      const style = getComputedStyle(el); const gap = parseFloat(style.gap) || 24;
      const step = card.offsetWidth + gap;
      const i = Math.round(el.scrollLeft / step);
      const maxI = getMaxIndex();
      setActiveSlide(Math.max(0, Math.min(maxI, i)));
    };
    el.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => { el.removeEventListener('scroll', onScroll); };
  }, []);


  useEffect(() => {
    const el = trackRef.current;
    if (!el || !autoPlay) return;
    let rafId = 0;
    const speed = 2.2; // pixels per frame
    const step = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (autoPlayRef.current) {
        let nextLeft = el.scrollLeft + speed;
        if (nextLeft >= maxScroll) {
          nextLeft = nextLeft % maxScroll; // wrap seamlessly
        }
        el.scrollLeft = nextLeft;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => { if (rafId) cancelAnimationFrame(rafId); };
  }, [autoPlay]);

  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const partnerLogos = [
    { src: "/assets/brands/shopify.svg", alt: "Shopify" },
    { src: "/assets/brands/amazon.svg", alt: "Amazon" },
    { src: "/assets/brands/nike.svg", alt: "Nike" },
    { src: "/assets/brands/adidas.svg", alt: "Adidas" },
    { src: "/assets/brands/zalando.svg", alt: "Zalando" },
    { src: "/assets/brands/ebay.svg", alt: "eBay" },
    { src: "/assets/brands/hm.svg", alt: "H&M" },
    { src: "/assets/brands/ikea.svg", alt: "IKEA" },
  ];
  return (
    <div className="min-h-screen text-zinc-900">{/* retiré bg-white pour utiliser #F0F0F0 global */}
      {/* Header + Hero */}
      <header className="relative">
        {/* Top menu */}
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="brand-wordmark">
                <Image
                  src="/assets/img/ECOM ICON A.png"
                  alt="Logo EcomDomination"
                  width={40}
                  height={40}
                  priority
                  className="brand-logo"
                />
                <span className="brand-ecom">EcomDomination</span>
                
              </span>
              <sup className="brand-registered">®</sup>
            </div>
            <div className="flex items-center gap-3 relative">
              <button
                type="button"
                className="menu-trigger"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                aria-controls="topmenu"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span>Menu</span>
                <svg className={`chevron ${menuOpen ? "open" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div ref={menuRef} id="topmenu" className={`menu-popover ${menuOpen ? "open" : ""}`} role="menu">
                <ul className="menu-list">
                  <li><a href="#services" className="menu-item" role="menuitem">Découvrir nos services</a></li>
                  <li><a href="#pricing" className="menu-item" role="menuitem">Voir les tarifs</a></li>
                  <li><a href="#portfolio" className="menu-item" role="menuitem">Portfolio</a></li>
                  <li>
                    <a href="https://wa.me/message/URL4FFGHMAQLD1" className="menu-item" role="menuitem" target="_blank" rel="noopener noreferrer">
                      <span className="menu-icon" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.04 2C6.57 2 2.2 6.37 2.2 11.84c0 2.06.63 3.98 1.71 5.56L2 22l4.73-1.86c1.53.96 3.33 1.52 5.3 1.52 5.47 0 9.84-4.37 9.84-9.84S17.51 2 12.04 2zm5.77 14.07c-.25.71-1.45 1.3-2.01 1.32-.54.02-1.22.08-3.94-1.26-3.32-1.63-5.45-5.69-5.62-5.96-.17-.27-1.35-1.8-1.35-3.43s.84-2.47 1.14-2.81c.3-.34.66-.43.88-.43.22 0 .44.01.64.01.21 0 .49-.08.77.59.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.33.57-.16.2-.34.45-.49.6-.16.15-.33.32-.14.66.19.34.84 1.38 1.81 2.24 1.25 1.12 2.31 1.46 2.65 1.62.34.16.53.14.73-.09.2-.23.84-.98 1.06-1.32.22-.34.45-.28.75-.17.3.11 1.9.9 2.22 1.06.32.16.54.25.62.39.08.14.08.81-.17 1.52z" fill="#25D366"/>
                        </svg>
                      </span>
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        {/* Hero content */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 pt-14 pb-10 framer-liWvq"
        >
          {/* badges slider */}
          <div className="lg:col-span-7">
            <div className="badge-slider">
              <div className="badge-track">
                {[
                  "Création de Sites Shopify",
                  "Création d’Images Produits",
                  "Création de Visuels et Vidéos performante",
                ].map((b, i) => (
                  <span key={i} className="badge">{b}</span>
                ))}
                {/* duplicate for seamless loop */}
                {[
                  "Création de Sites Shopify",
                  "Création d’Images Produits",
                  "Création de Visuels et Vidéos performante",
                ].map((b, i) => (
                  <span key={`dup-${i}`} className="badge">{b}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Left textual content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.h1 variants={fadeUp} className="hero-title text-5xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
              Nous vous aidons à bâtir une <span className="accent">marque e-commerce</span> solide et à maximiser vos ventes !
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-subtitle text-lg lg:text-2xl max-w-2xl">
              Chez EcomDomination, nous vous accompagnons de A à Z dans la création et le développement de votre e-commerce.
            </motion.p>
            <motion.div variants={fadeUp} className="hero-actions flex flex-wrap items-center gap-4">
              <a href="#services" className="btn-primary inline-flex items-center justify-center">
                Voir nos services
              </a>
              <a href="https://wa.me/message/URL4FFGHMAQLD1" className="btn-secondary inline-flex items-center" target="_blank" rel="noopener noreferrer">
                <span className="cta-avatar" aria-hidden>
                  <svg className="cta-whatsapp" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.04 2C6.57 2 2.2 6.37 2.2 11.84c0 2.06.63 3.98 1.71 5.56L2 22l4.73-1.86c1.53.96 3.33 1.52 5.3 1.52 5.47 0 9.84-4.37 9.84-9.84S17.51 2 12.04 2zm5.77 14.07c-.25.71-1.45 1.3-2.01 1.32-.54.02-1.22.08-3.94-1.26-3.32-1.63-5.45-5.69-5.62-5.96-.17-.27-1.35-1.8-1.35-3.43s.84-2.47 1.14-2.81c.3-.34.66-.43.88-.43.22 0 .44.01.64.01.21 0 .49-.08.77.59.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.33.57-.16.2-.34.45-.49.6-.16.15-.33.32-.14.66.19.34.84 1.38 1.81 2.24 1.25 1.12 2.31 1.46 2.65 1.62.34.16.53.14.73-.09.2-.23.84-.98 1.06-1.32.22-.34.45-.28.75-.17.3.11 1.9.9 2.22 1.06.32.16.54.25.62.39.08.14.08.81-.17 1.52z" fill="#25D366"/>
                  </svg>
                </span>
                <span className="cta-text">
                  <span className="cta-title">Obtenez une consultation gratuite</span>
                  <span className="cta-sub"><span className="cta-dot" />sur WhatsApp</span>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right banner image on Desktop - absolute per model */}
          <div className="hidden lg:block">
            <div
              className="framer-h2d1oe"
              data-framer-appear-id="h2d1oe"
              data-framer-name="Image (Desktop)"
              style={{ opacity: 1 }}
            >
              <img
                decoding="async"
                width={3072}
                height={2048}
                sizes="1210.5837px"
                src="https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png"
                alt=""
                style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center center", objectFit: "cover" }}
                srcSet="https://framerusercontent.com/images/893LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=512 512w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png 3072w"
              />
            </div>
          </div>

          {/* Aucun gradient dans le Hero (supprimé) */}
        </motion.div>

        {/* Bottom banner on Tablet/Mobile */}
        <div className="lg:hidden relative px-0">
          <div className="relative w-full h-[220px] sm:h-[280px] md:h-[360px]">
            <Image
              src="https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png"
              alt="Bannière hero mobile"
              fill
              priority
              sizes="100vw"
              className="object-cover select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Aucun gradient bas (supprimé) */}
      </header>

      {/* Partenaires (carousel) */}
      <section className="partners-section">
        <div className="partners-wrap">
          <span className="partners-lead">
            De grandes marques nous font confiance
            <br />
            partout dans le monde
          </span>
          <div className="partner-slider">
            <div className="partner-track">
              {partnerLogos.concat(partnerLogos).map((logo, i) => (
                <span key={i} className="partner-logo" aria-hidden>
                  <img src={logo.src} alt={logo.alt} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Le reste des sections existantes suit, non modifiées ici */}

      {/* Services (features-style) */}
      <section className="services-section" id="services">
        <div className="services-wrap">
          <span className="services-pill">Services</span>
          <h2 className="services-title"><em>Nos services</em> pour propulser votre e-commerce</h2>
          <div className="services-grid">
            {/* Shopify */}
            <article className="service-card">
              <div className="service-icon"><img src="/store.svg" alt="Shopify" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">Création de Sites Shopify</h3>
                <p className="service-desc">Nous construisons des sites e‑commerce professionnels sur Shopify, conçus pour maximiser vos ventes et offrir une expérience d’achat fluide.</p>
                <a className="service-cta" href="https://wa.me/message/URL4FFGHMAQLD1" target="_blank" rel="noopener noreferrer">Parlons de votre site</a>
              </div>
            </article>
            {/* Images produits */}
            <article className="service-card">
              <div className="service-icon"><img src="/image.svg" alt="Images produits" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">Création d’Images Produits</h3>
                <p className="service-desc">Nous créons des images de produits professionnelles et percutantes qui séduisent vos clients et boostent vos ventes.</p>
                <a className="service-cta" href="https://wa.me/message/URL4FFGHMAQLD1" target="_blank" rel="noopener noreferrer">Demandez des exemples</a>
              </div>
            </article>
            {/* Visuels & vidéos */}
            <article className="service-card">
              <div className="service-icon"><img src="/video.svg" alt="Visuels & vidéos" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">Des visuels et vidéos qui captent l’attention et stimulent vos ventes !</h3>
                <p className="service-desc">Images et vidéos performantes pour vos annonces et pages e‑commerce. Chaque visuel est pensé pour l’engagement et la conversion.</p>
                <a className="service-cta" href="https://wa.me/message/URL4FFGHMAQLD1" target="_blank" rel="noopener noreferrer">Discutons de vos visuels</a>
              </div>
            </article>
            {/* Valeur ajoutée 1 */}
            <article className="service-card">
              <div className="service-icon"><img src="/speed.svg" alt="Délai rapide" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">Délai rapide</h3>
                <p className="service-desc">La plupart des demandes sont traitées en quelques jours, sans sacrifier la qualité.</p>
              </div>
            </article>
            {/* Valeur ajoutée 2 */}
            <article className="service-card">
              <div className="service-icon"><img src="/star.svg" alt="Qualité premium" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">Qualité premium</h3>
                <p className="service-desc">Des standards élevés et une attention aux détails, à chaque résultat.</p>
              </div>
            </article>
            {/* Valeur ajoutée 3 */}
            <article className="service-card">
              <div className="service-icon"><img src="/shield.svg" alt="Propriété 100% à vous" className="service-icon-img" /></div>
              <div className="service-content">
                <h3 className="service-title">100% à vous</h3>
                <p className="service-desc">Des créations sur‑mesure, pleinement adaptées et sous votre contrôle.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="col-span-12">
        {/* Process */}
        <section className="process-section">
          <div className="process-wrap">
            <span className="process-pill">Comment ça marche</span>
                
            <h2 className="process-title">Découvrez un <em>processus clair</em> pour un<br/>e-commerce professionnel et rentable.</h2>
            <div className="process-grid">
              {/* Subscribe */}
              <article className="process-card">
                <div className="process-card-head">
                  <div className="pricing-panel">
                    <div className="brand-mark">EcomDomination<sup>®</sup></div>
                    {/* <span className="card-badge">Popular</span> */}
                    <div className="price-line">
                      <span className="price-value">Assistance 24/7</span>
                    </div>
                    <a className="process-btn" href="https://wa.me/message/URL4FFGHMAQLD1" target="_blank" rel="noopener noreferrer">Discutons de votre projet</a>
                  </div>
                </div>
                <div className="process-card-body">
                  <h3>Obtenez une consultation gratuite sur WhatsApp</h3>
                  <p>Parlez-nous de votre projet en quelques minutes. Audit express, recommandations concrètes, sans rendez-vous ni engagement — disponible 24/7.</p>
                </div>
              </article>
              {/* Request */}
              <article className="process-card">
                <div className="process-card-head">
                  <div className="request-head">
                    <div className="badge-row row-1">
                      <div className="badge-row-track">
                        {[
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                        ].map((b, i) => (
                          <span key={i} className="badge-chip">{b}</span>
                        ))}
                        {[
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                        ].map((b, i) => (
                          <span key={`dup-${i}`} className="badge-chip">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div className="badge-row row-2">
                      <div className="badge-row-track reversed">
                        {[
                          "Création d’Images Produits",
                          "Création de Sites Shopify",
                          "Création de Visuels et Vidéos performante",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                        ].map((b, i) => (
                          <span key={`r2-${i}`} className="badge-chip">{b}</span>
                        ))}
                        {[
                          "Création d’Images Produits",
                          "Création de Sites Shopify",
                          "Création de Visuels et Vidéos performante",
                          "Création d’Images Produits",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                        ].map((b, i) => (
                          <span key={`r2-dup-${i}`} className="badge-chip">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div className="badge-row row-3">
                      <div className="badge-row-track">
                        {[
                          "Création de Visuels et Vidéos performante",
                          "Création d’Images Produits",
                          "Création de Sites Shopify",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                        ].map((b, i) => (
                          <span key={`r3-${i}`} className="badge-chip">{b}</span>
                        ))}
                        {[
                          "Création de Visuels et Vidéos performante",
                          "Création d’Images Produits",
                          "Création de Sites Shopify",
                          "Création de Visuels et Vidéos performante",
                          "Création de Sites Shopify",
                          "Création d’Images Produits",
                        ].map((b, i) => (
                          <span key={`r3-dup-${i}`} className="badge-chip">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div className="center-mark">
                      <img src="/assets/img/ECOM ICON 3 .png" alt="EcomDomination Logomark" />
                    </div>
                  </div>
                </div>
                <div className="process-card-body">
                  <h3>Accompagnement</h3>
                  <p>Nous vous accompagnons de bout en bout dans la création et la croissance de votre e‑commerce&nbsp;: site Shopify soigné, visuels produits qui attirent l’attention et campagnes publicitaires tournées vers la conversion. Notre objectif&nbsp;: des résultats concrets et durables.</p>
                </div>
              </article>
              {/* Receive - folder with shots */}
              <article className="process-card receive-card">
                <div className="process-card-head">
                  <div className="folder">
                    <div className="back"><img className="back-img" src="https://framerusercontent.com/images/u6NHrizsQWk4u5sqIM2DGhO2EI.svg" alt="Folder back" /></div>
                    <div className="shots">
                      <span className="shot shot-1"><img src="/assets/img/ECOM.png" alt="Project shot 1" /></span>
                      <span className="shot shot-2"><img src="/assets/img/ECOM B.png" alt="Project shot 2" /></span>
                      <span className="shot shot-3"><img src="/assets/img/Ecom v .png" alt="Project shot 3" /></span>
                    </div>
                    <div className="front"></div>
                  </div>
                </div>
                <div className="process-card-body">
                  <h3>Résultats</h3>
                  <p>Votre marque e‑commerce passe un cap : conversion qui grimpe, panier moyen qui progresse, ROAS maîtrisé, acquisition plus rentable et rétention renforcée. Testez vite, apprenez, et scalez sereinement — une identité de marque cohérente et des performances qui parlent d’elles‑mêmes.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Témoignages – Slider au pixel près */}
        <section className="testimonials-section">
          <div className="testimonials-wrap">
            <span className="testimonials-pill">Témoignages</span>
            <h2 className="process-title">Ils aiment quand c'est<em> bien fait.</em></h2>
            <div className="testimonials-carousel">
              <div className="testimonials-track" ref={trackRef}>
              {/* cartes visibles (3 colonnes) */}
              {[0,1,2,3].map((idx) => (
                <article key={`card-${idx}`} className={`testimonial-card ${idx===3?'ghost':''}`}>
                  <div className="t-head">
                    <img className="t-avatar" src="https://i.pravatar.cc/96?img=21" alt="Client" />
                    <div className="t-meta">
                      <strong className="t-name">Tina Zhang</strong>
                      <span className="t-role">Responsable e‑commerce, Octave</span>
                    </div>
                    </div>
                    <p className="t-quote">Site Shopify livré sans friction, visuels produits qui convertissent et une équipe qui anticipe. Impact visible dès la première campagne.</p>
                  </article>
                ))}
                {[0,1,2,3].map((idx) => (
                  <article key={`dup-card-${idx}`} className={`testimonial-card ${idx===3?'ghost':''}`}>
                    <div className="t-head">
                      <img className="t-avatar" src="https://i.pravatar.cc/96?img=12" alt="Client" />
                      <div className="t-meta">
                        <strong className="t-name">Jared Cole</strong>
                        <span className="t-role">Fondateur, Nimbus Systems</span>
                      </div>
                    </div>
                    <p className="t-quote">Ils ont structuré nos pages, nos images et nos vidéos ads. Moins de bricolage, plus de ventes. Communication directe sur WhatsApp: efficace.</p>
                  </article>
                ))}
                <article className="testimonial-card">
                  <div className="t-head">
                    <img className="t-avatar" src="https://i.pravatar.cc/96?img=37" alt="Client" />
                    <div className="t-meta">
                      <strong className="t-name">Alexia Fran</strong>
                      <span className="t-role">Marketing Lead, RelayOne</span>
                    </div>
                  </div>
                  <p className="t-quote">Landing pages et kits visuels prêts à l’emploi. Lancement plus rapide et un lift de conversion mesurable en quelques jours.</p>
                </article>

                <article className="testimonial-card ghost">
                  <div className="t-head">
                    <img className="t-avatar" src="https://i.pravatar.cc/96?img=49" alt="Client" />
                    <div className="t-meta">
                      <strong className="t-name">—</strong>
                      <span className="t-role">—</span>
                    </div>
                  </div>
                  <p className="t-quote">Un aperçu de plus pour que le carousel défile. Ce témoignage fantôme étend la largeur pour permettre le scroll.</p>
                </article>
              </div>
            </div>

            <div className="testimonials-dots" aria-label="Contrôles du carousel d'avis" role="tablist">
              <span className={`dot ${activeSlide === 0 ? 'active dot-pop' : ''}`} role="tab" aria-selected={activeSlide===0} aria-controls="slide-0" onClick={() => scrollToSlide(0)}></span>
              <span className={`dot ${activeSlide === 1 ? 'active dot-pop' : ''}`} role="tab" aria-selected={activeSlide===1} aria-controls="slide-1" onClick={() => scrollToSlide(1)}></span>
              <span className={`dot ${activeSlide === 2 ? 'active dot-pop' : ''}`} role="tab" aria-selected={activeSlide===2} aria-controls="slide-2" onClick={() => scrollToSlide(2)}></span>
              <span className={`dot ${activeSlide === 3 ? 'active dot-pop' : ''}`} role="tab" aria-selected={activeSlide===3} aria-controls="slide-3" onClick={() => scrollToSlide(3)}></span>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" aria-labelledby="faq-title">
          <div className="faq-card">
            <span className="faq-badge">FAQ</span>
            <div className="faq-title">
              <span id="faq-title" className="faq-title-line">Ce que se demandent souvent nos clients</span>
            </div>
            <div className="faq-contact">
              <div className="faq-email">
                <span className="faq-email-label">Email</span>
                <span className="faq-email-value">contact@ecomdomination.com</span>
              </div>
              <a href="https://wa.me/message/URL4FFGHMAQLD1" className="faq-cta" aria-label="Commencez votre consultation">Commencez votre consultation</a>
            </div>
            <div className="faq-list" role="list">
              <div className={`faq-item ${faqOpenIndex === 0 ? 'open' : ''}`} role="listitem">
                <div className="faq-item-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4rem', position:'relative' }}>
                  <div className="faq-item-text">Combien de demandes puis-je soumettre ?</div>
                  <button className="faq-item-toggle" aria-label="Toggle answer" onClick={() => setFaqOpenIndex(faqOpenIndex === 0 ? null : 0)}>
                    <span className="plus-icon" style={{ transition: 'transform .22s ease', transform: faqOpenIndex === 0 ? 'rotate(45deg)' : 'none' }} />
                  </button>
                </div>
                <div className="faq-answer-wrap" style={{ maxHeight: faqOpenIndex === 0 ? 260 : 0, opacity: faqOpenIndex === 0 ? 1 : 0, overflow:'hidden', transition:'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s', paddingBottom: faqOpenIndex === 0 ? 6 : 0 }}>
                  <p className="faq-answer">Autant que vous le souhaitez. Nous les traitons une par une afin de garantir la qualité et la régularité des livrables.</p>
                </div>
              </div>
              <div className={`faq-item ${faqOpenIndex === 1 ? 'open' : ''}`} role="listitem">
                <div className="faq-item-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4rem', position:'relative' }}>
                  <div className="faq-item-text">Quel type de travail est inclus ?</div>
                  <button className="faq-item-toggle" aria-label="Toggle answer" onClick={() => setFaqOpenIndex(faqOpenIndex === 1 ? null : 1)}>
                    <span className="plus-icon" style={{ transition: 'transform .22s ease', transform: faqOpenIndex === 1 ? 'rotate(45deg)' : 'none' }} />
                  </button>
                </div>
                <div className="faq-answer-wrap" style={{ maxHeight: faqOpenIndex === 1 ? 260 : 0, opacity: faqOpenIndex === 1 ? 1 : 0, overflow:'hidden', transition:'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s', paddingBottom: faqOpenIndex === 1 ? 6 : 0 }}>
                  <p className="faq-answer">Création de sites Shopify, images produits, visuels et vidéos publicitaires, landing pages et optimisation orientée conversion. Nous adaptons l’ampleur selon votre besoin.</p>
                </div>
              </div>
              <div className={`faq-item ${faqOpenIndex === 2 ? 'open' : ''}`} role="listitem">
                <div className="faq-item-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4rem', position:'relative' }}>
                  <div className="faq-item-text">Quel est le délai de livraison ?</div>
                  <button className="faq-item-toggle" aria-label="Toggle answer" onClick={() => setFaqOpenIndex(faqOpenIndex === 2 ? null : 2)}>
                    <span className="plus-icon" style={{ transition: 'transform .22s ease', transform: faqOpenIndex === 2 ? 'rotate(45deg)' : 'none' }} />
                  </button>
                </div>
                <div className="faq-answer-wrap" style={{ maxHeight: faqOpenIndex === 2 ? 260 : 0, opacity: faqOpenIndex === 2 ? 1 : 0, overflow:'hidden', transition:'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s', paddingBottom: faqOpenIndex === 2 ? 6 : 0 }}>
                  <p className="faq-answer">La plupart des demandes sont livrées en 24–48h. Les projets plus complexes peuvent demander davantage de temps — nous vous prévenons toujours à l’avance.</p>
                </div>
              </div>
              <div className={`faq-item ${faqOpenIndex === 3 ? 'open' : ''}`} role="listitem">
                <div className="faq-item-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4rem', position:'relative' }}>
                  <div className="faq-item-text">Puis-je mettre en pause ?</div>
                  <button className="faq-item-toggle" aria-label="Toggle answer" onClick={() => setFaqOpenIndex(faqOpenIndex === 3 ? null : 3)}>
                    <span className="plus-icon" style={{ transition: 'transform .22s ease', transform: faqOpenIndex === 3 ? 'rotate(45deg)' : 'none' }} />
                  </button>
                </div>
                <div className="faq-answer-wrap" style={{ maxHeight: faqOpenIndex === 3 ? 260 : 0, opacity: faqOpenIndex === 3 ? 1 : 0, overflow:'hidden', transition:'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s', paddingBottom: faqOpenIndex === 3 ? 6 : 0 }}>
                  <p className="faq-answer">Oui. Vous pouvez mettre en pause et reprendre quand vous voulez, sans complexité administrative.</p>
                </div>
              </div>
              <div className={`faq-item ${faqOpenIndex === 4 ? 'open' : ''}`} role="listitem">
                <div className="faq-item-row" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingRight:'4rem', position:'relative' }}>
                  <div className="faq-item-text">Et si j’ai besoin de développement aussi ?</div>
                  <button className="faq-item-toggle" aria-label="Toggle answer" onClick={() => setFaqOpenIndex(faqOpenIndex === 4 ? null : 4)}>
                    <span className="plus-icon" style={{ transition: 'transform .22s ease', transform: faqOpenIndex === 4 ? 'rotate(45deg)' : 'none' }} />
                  </button>
                </div>
                <div className="faq-answer-wrap" style={{ maxHeight: faqOpenIndex === 4 ? 260 : 0, opacity: faqOpenIndex === 4 ? 1 : 0, overflow:'hidden', transition:'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s', paddingBottom: faqOpenIndex === 4 ? 6 : 0 }}>
                  <p className="faq-answer">Oui. Nous collaborons avec vos développeurs ou nos partenaires pour intégrer et livrer des produits de qualité, de bout en bout.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="site-footer" aria-label="Pied de page">
        <div className="footer-wrap">
          <div className="footer-left">EcomDomination<sup>®</sup></div>
          <nav className="footer-right" aria-label="Liens de pied de page">
            <a href="#services" className="footer-link">Services</a>
            <a href="#mentions-legales" className="footer-link">Mentions légales</a>
            <a href="https://wa.me/message/URL4FFGHMAQLD1" className="footer-link footer-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </nav>
        </div>
      </footer>
      </div>
    </div>
  );
}
