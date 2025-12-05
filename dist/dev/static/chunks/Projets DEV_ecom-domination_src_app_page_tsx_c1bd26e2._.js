(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projets DEV/ecom-domination/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const styleProfile = 'doux';
const prefersReducedMotion = ("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 12
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: prefersReducedMotion ? {
            duration: 0
        } : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
            duration: 0.42,
            ease: [
                0.22,
                0.6,
                0.36,
                1
            ]
        }
    }
};
const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 0.07
        }
    }
};
const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.985
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: prefersReducedMotion ? {
            duration: 0
        } : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
            duration: 0.42,
            ease: [
                0.22,
                0.6,
                0.36,
                1
            ]
        }
    }
};
function Home() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!menuOpen) return;
            const prevOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const onKey = {
                "Home.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpen(false);
                }
            }["Home.useEffect.onKey"];
            const onClick = {
                "Home.useEffect.onClick": (e)=>{
                    const target = e.target;
                    const clickedTrigger = !!(triggerRef.current && triggerRef.current.contains(target));
                    const clickedInsideMenu = !!(menuRef.current && menuRef.current.contains(target));
                    if (!clickedInsideMenu && !clickedTrigger) setMenuOpen(false);
                }
            }["Home.useEffect.onClick"];
            document.addEventListener("keydown", onKey);
            document.addEventListener("click", onClick);
            return ({
                "Home.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.removeEventListener("click", onClick);
                    document.body.style.overflow = prevOverflow;
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        menuOpen
    ]);
    // Carousel Témoignages
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeSlide, setActiveSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoPlay, setAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const autoPlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            autoPlayRef.current = autoPlay;
        }
    }["Home.useEffect"], [
        autoPlay
    ]);
    // Géométrie du carousel: calcule pages/dots à partir de la largeur visible
    const getCarouselGeometry = ()=>{
        const el = trackRef.current;
        if (!el) return null;
        const style = getComputedStyle(el);
        const gap = parseFloat(style.gap) || 24;
        const card = el.querySelector('.testimonial-card');
        if (!card) return null;
        const cardWidth = card.getBoundingClientRect().width;
        const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth - 1);
        // Prendre en compte le padding horizontal du track (défini en CSS)
        const paddingLeft = parseFloat(style.paddingLeft || '0') || 0;
        const paddingRight = parseFloat(style.paddingRight || '0') || 0;
        const minScroll = paddingLeft; // premier dot aligné au début réel
        const effectiveMax = Math.max(0, maxScroll + paddingLeft); // fin réelle au dernier dot
        const dots = document.querySelectorAll('.testimonials-dots .dot').length || 1;
        const dotStep = dots > 1 ? (effectiveMax - minScroll) / (dots - 1) : 0;
        return {
            el,
            gap,
            cardWidth,
            maxScroll: effectiveMax,
            dots,
            dotStep,
            minScroll
        };
    };
    const getMaxIndex = ()=>{
        const dots = document.querySelectorAll('.testimonials-dots .dot');
        return Math.max(0, dots.length - 1);
    };
    const scrollToSlide = (i)=>{
        const g = getCarouselGeometry();
        if (!g) return;
        const { el, dotStep, minScroll, maxScroll } = g;
        const maxI = getMaxIndex();
        const target = Math.max(0, Math.min(maxI, i));
        // pause autoplay le temps du scroll smooth
        setAutoPlay(false);
        // disable scroll snap during programmatic scroll to avoid overshoot
        const prevSnap = el.style.scrollSnapType;
        el.style.scrollSnapType = 'none';
        const left = minScroll + target * (dotStep || 0);
        el.scrollTo({
            left,
            behavior: 'smooth'
        });
        setActiveSlide(target);
        window.setTimeout(()=>{
            el.style.scrollSnapType = prevSnap || '';
            setAutoPlay(true);
            // wrap si on est à la fin
            const end = Math.max(0, maxScroll - 0.5);
            if (el.scrollLeft >= end) {
                el.scrollLeft = minScroll;
                setActiveSlide(0);
            }
        }, 500);
    };
    // synchroniser l’état actif avec le scroll continu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const el = trackRef.current;
            if (!el) return;
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    const g = getCarouselGeometry();
                    if (!g) return;
                    const { dotStep, minScroll } = g;
                    const base = Math.max(0, (Number.isFinite(el.scrollLeft) ? el.scrollLeft : 0) - (minScroll || 0));
                    const i = dotStep > 0 ? Math.round(base / dotStep) : 0;
                    const maxI = getMaxIndex();
                    setActiveSlide(Math.max(0, Math.min(maxI, i)));
                }
            }["Home.useEffect.onScroll"];
            el.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Home.useEffect": ()=>{
                    el.removeEventListener('scroll', onScroll);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const el = trackRef.current;
            if (!el || !autoPlay) return;
            let rafId = 0;
            // Désactiver le snap et le scroll lissé pendant l’autoplay pour éviter les “poses” au premier dot
            const prevSnap = el.style.scrollSnapType;
            const prevBehavior = el.style.scrollBehavior;
            el.style.scrollSnapType = 'none';
            el.style.scrollBehavior = 'auto';
            const speed = 2.2; // pixels per frame
            const geom = getCarouselGeometry();
            if (!geom) return;
            const { minScroll, maxScroll } = geom;
            const step = {
                "Home.useEffect.step": ()=>{
                    const end = Math.max(0, maxScroll - 0.5);
                    if (!autoPlayRef.current) {
                        rafId = requestAnimationFrame(step);
                        return;
                    }
                    if (maxScroll <= 0) {
                        el.scrollLeft = minScroll;
                        rafId = requestAnimationFrame(step);
                        return;
                    }
                    let nextLeft = (Number.isFinite(el.scrollLeft) ? el.scrollLeft : minScroll) + speed;
                    // léger headroom pour éviter l’arrondi au dot précédent
                    if (nextLeft >= end) {
                        nextLeft = minScroll; // wrap et resynchronise au premier dot réel
                        setActiveSlide(0);
                    }
                    el.scrollLeft = nextLeft;
                    rafId = requestAnimationFrame(step);
                }
            }["Home.useEffect.step"];
            rafId = requestAnimationFrame(step);
            return ({
                "Home.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                    el.style.scrollSnapType = prevSnap || '';
                    el.style.scrollBehavior = prevBehavior || '';
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        autoPlay
    ]);
    // Configuration des gestes (sensibilité et inertie)
    const gestureConfig = {
        momentumFriction: 0.92,
        momentumMinVelocity: 0.06,
        swipeThresholdPx: 30,
        autoplayResumeDelayMs: 500
    };
    // Gestes souris/tactiles: drag, wheel, momentum et swipe
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const el = trackRef.current;
            if (!el) return;
            const geom = getCarouselGeometry();
            const minScroll = geom?.minScroll || 0;
            const maxScroll = geom?.maxScroll || 0;
            const dotStep = geom?.dotStep || 0;
            let isDown = false;
            let startX = 0;
            let startLeft = 0;
            let lastX = 0;
            let lastT = 0;
            let velocity = 0; // px/ms
            let wheelTimeout = 0;
            let cancelMomentum = null;
            let prevSnap = '';
            let prevBehavior = '';
            const onPointerDown = {
                "Home.useEffect.onPointerDown": (e)=>{
                    if (e.button !== 0 && e.pointerType !== 'touch') return; // clic gauche ou tactile
                    isDown = true;
                    prevSnap = el.style.scrollSnapType;
                    prevBehavior = el.style.scrollBehavior;
                    el.style.scrollSnapType = 'none';
                    el.style.scrollBehavior = 'auto';
                    el.classList.add('dragging');
                    startX = e.clientX;
                    lastX = e.clientX;
                    lastT = performance.now();
                    startLeft = Number.isFinite(el.scrollLeft) ? el.scrollLeft : minScroll;
                    velocity = 0;
                    setAutoPlay(false);
                    try {
                        el.setPointerCapture(e.pointerId);
                    } catch  {}
                    // arrêter une éventuelle inertie en cours
                    if (cancelMomentum) {
                        cancelMomentum();
                        cancelMomentum = null;
                    }
                }
            }["Home.useEffect.onPointerDown"];
            const onPointerMove = {
                "Home.useEffect.onPointerMove": (e)=>{
                    if (!isDown) return;
                    const now = performance.now();
                    const dx = e.clientX - startX;
                    const dX = e.clientX - lastX;
                    const dt = Math.max(1, now - lastT);
                    velocity = dX / dt; // px/ms
                    lastX = e.clientX;
                    lastT = now;
                    let next = startLeft - dx;
                    if (next < minScroll) next = minScroll;
                    if (next > maxScroll) next = maxScroll;
                    el.scrollLeft = next;
                }
            }["Home.useEffect.onPointerMove"];
            const startMomentum = {
                "Home.useEffect.startMomentum": (initialVelocity)=>{
                    let v = initialVelocity;
                    let raf = 0;
                    const step = {
                        "Home.useEffect.startMomentum.step": ()=>{
                            v *= gestureConfig.momentumFriction;
                            if (Math.abs(v) < gestureConfig.momentumMinVelocity) {
                                el.style.scrollSnapType = prevSnap || '';
                                el.style.scrollBehavior = prevBehavior || '';
                                window.setTimeout({
                                    "Home.useEffect.startMomentum.step": ()=>setAutoPlay(true)
                                }["Home.useEffect.startMomentum.step"], gestureConfig.autoplayResumeDelayMs);
                                return;
                            }
                            let next = el.scrollLeft - v * 16; // ~16ms par frame
                            if (next < minScroll) {
                                next = minScroll;
                                v = 0;
                            }
                            if (next > maxScroll) {
                                next = maxScroll;
                                v = 0;
                            }
                            el.scrollLeft = next;
                            raf = requestAnimationFrame(step);
                        }
                    }["Home.useEffect.startMomentum.step"];
                    raf = requestAnimationFrame(step);
                    return ({
                        "Home.useEffect.startMomentum": ()=>{
                            if (raf) cancelAnimationFrame(raf);
                        }
                    })["Home.useEffect.startMomentum"];
                }
            }["Home.useEffect.startMomentum"];
            const onPointerUp = {
                "Home.useEffect.onPointerUp": (e)=>{
                    if (!isDown) return;
                    isDown = false;
                    el.classList.remove('dragging');
                    try {
                        el.releasePointerCapture(e.pointerId);
                    } catch  {}
                    const totalDx = e.clientX - startX;
                    // Swipe tactile: si dépasse le seuil on va au dot suivant/précédent
                    if (e.pointerType === 'touch' && dotStep > 0 && Math.abs(totalDx) >= gestureConfig.swipeThresholdPx) {
                        const direction = totalDx < 0 ? 1 : -1;
                        scrollToSlide(activeSlide + direction);
                        return;
                    }
                    // Sinon on lance l’inertie
                    cancelMomentum = startMomentum(velocity);
                }
            }["Home.useEffect.onPointerUp"];
            const onWheel = {
                "Home.useEffect.onWheel": (e)=>{
                    const delta = Math.abs(e.deltaX) > 0 ? e.deltaX : e.deltaY;
                    if (delta !== 0) {
                        e.preventDefault();
                        setAutoPlay(false);
                        const current = Number.isFinite(el.scrollLeft) ? el.scrollLeft : minScroll;
                        let next = current + delta;
                        if (next < minScroll) next = minScroll;
                        if (next > maxScroll) next = maxScroll;
                        el.scrollLeft = next;
                        window.clearTimeout(wheelTimeout);
                        wheelTimeout = window.setTimeout({
                            "Home.useEffect.onWheel": ()=>setAutoPlay(true)
                        }["Home.useEffect.onWheel"], gestureConfig.autoplayResumeDelayMs);
                    }
                }
            }["Home.useEffect.onWheel"];
            el.addEventListener('pointerdown', onPointerDown);
            window.addEventListener('pointermove', onPointerMove);
            window.addEventListener('pointerup', onPointerUp);
            el.addEventListener('wheel', onWheel, {
                passive: false
            });
            return ({
                "Home.useEffect": ()=>{
                    el.removeEventListener('pointerdown', onPointerDown);
                    window.removeEventListener('pointermove', onPointerMove);
                    window.removeEventListener('pointerup', onPointerUp);
                    el.removeEventListener('wheel', onWheel);
                    if (wheelTimeout) window.clearTimeout(wheelTimeout);
                    el.classList.remove('dragging');
                    el.style.scrollSnapType = prevSnap || '';
                    el.style.scrollBehavior = prevBehavior || '';
                    if (cancelMomentum) cancelMomentum();
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        activeSlide
    ]);
    // Head bar: état de scroll pour hide-on-scroll et shadow au scroll
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    const y = window.scrollY;
                    setScrolled(y > 10);
                // (retiré) headerVisible avec hystérésis: nous gardons la barre visible dès le chargement
                }
            }["Home.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const [faqOpenIndex, setFaqOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Scroll spy: lien actif
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('top');
    const prefersReducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const ids = [
                'top',
                'services',
                'faq'
            ];
            const sections = ids.map({
                "Home.useEffect.sections": (id)=>document.getElementById(id)
            }["Home.useEffect.sections"]).filter(Boolean);
            if (!sections.length) return;
            const offset = 120; // hauteur de la head bar
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    const y = window.scrollY + offset + 1;
                    let current = 'top';
                    for (const s of sections){
                        const rect = s.getBoundingClientRect();
                        const top = rect.top + window.scrollY;
                        if (y >= top) current = s.id;
                    }
                    setActiveSection(current);
                }
            }["Home.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            onScroll();
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    // Trap focus dans le menu overlay pour l’accessibilité
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (!menuOpen || !menuRef.current) return;
            const container = menuRef.current;
            const focusable = container.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])');
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const onKeyDown = {
                "Home.useEffect.onKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        e.preventDefault();
                        setMenuOpen(false);
                        return;
                    }
                    if (e.key !== 'Tab') return;
                    if (e.shiftKey) {
                        if (document.activeElement === first) {
                            e.preventDefault();
                            last.focus();
                        }
                    } else {
                        if (document.activeElement === last) {
                            e.preventDefault();
                            first.focus();
                        }
                    }
                }
            }["Home.useEffect.onKeyDown"];
            first?.focus();
            container.addEventListener('keydown', onKeyDown);
            // aria-hidden sur le contenu derrière
            const root = document.querySelector('main, body > div');
            const prevHidden = root?.getAttribute('aria-hidden');
            root?.setAttribute('aria-hidden', 'true');
            return ({
                "Home.useEffect": ()=>{
                    container.removeEventListener('keydown', onKeyDown);
                    if (prevHidden !== null) root?.setAttribute('aria-hidden', prevHidden);
                    else root?.removeAttribute('aria-hidden');
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        menuOpen
    ]);
    const partnerLogos = [
        {
            src: "/assets/brands/shopify.svg",
            alt: "Shopify"
        },
        {
            src: "/assets/brands/amazon.svg",
            alt: "Amazon"
        },
        {
            src: "/assets/brands/nike.svg",
            alt: "Nike"
        },
        {
            src: "/assets/brands/adidas.svg",
            alt: "Adidas"
        },
        {
            src: "/assets/brands/zalando.svg",
            alt: "Zalando"
        },
        {
            src: "/assets/brands/ebay.svg",
            alt: "eBay"
        },
        {
            src: "/assets/brands/hm.svg",
            alt: "H&M"
        },
        {
            src: "/assets/brands/ikea.svg",
            alt: "IKEA"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: false,
                        animate: {
                            opacity: 1
                        },
                        transition: prefersReducedMotion ? {
                            duration: 0
                        } : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {
                            type: 'spring',
                            stiffness: 220,
                            damping: 28
                        },
                        className: `fixed top-0 left-0 right-0 z-50 header-premium ${scrolled ? "bg-white shadow-xl border-b border-zinc-200" : "bg-white/40 shadow-none border-b border-transparent"} transition-all duration-300`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "brand-wordmark",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/assets/img/ECOM ICON A.png",
                                                    alt: "Logo EcomDomination",
                                                    width: 40,
                                                    height: 40,
                                                    priority: true,
                                                    className: "brand-logo"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "brand-ecom",
                                                    children: "EcomDomination"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 368,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                            className: "brand-registered",
                                            children: "®"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "top-links hidden lg:flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#top",
                                                className: `top-link ${activeSection === 'top' ? 'is-active' : ''}`,
                                                "aria-current": activeSection === 'top' ? 'page' : undefined,
                                                children: "Accueil"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#services",
                                                className: `top-link ${activeSection === 'services' ? 'is-active' : ''}`,
                                                "aria-current": activeSection === 'services' ? 'page' : undefined,
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#faq",
                                                className: `top-link ${activeSection === 'faq' ? 'is-active' : ''}`,
                                                "aria-current": activeSection === 'faq' ? 'page' : undefined,
                                                children: "FAQ"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/message/URL4FFGHMAQLD1",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/70 border border-zinc-200 shadow-lg text-zinc-900 font-semibold tracking-tight backdrop-blur-sm transition hover:bg-white hover:shadow-xl hover:-translate-y-0.5",
                                            "aria-label": "Obtenez une consultation gratuite sur WhatsApp",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center justify-center w-6 h-6 rounded-full shadow-inner",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        "aria-hidden": true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                fill: "#25D366"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 407,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M16.67 14.92c-.26.74-1.52 1.35-2.11 1.37-.57.02-1.28.08-4.14-1.31-3.48-1.71-5.72-5.97-5.9-6.26-.18-.28-1.42-1.89-1.42-3.6 0-1.71.88-2.58 1.2-2.93.32-.35.69-.45.92-.45.23 0 .46.01.66.01.22 0 .52-.08.82.61.3.69 1 2.49 1.09 2.67.09.18.14.39.02.64-.12.25-.18.39-.35.61-.17.22-.36.47-.52.63-.17.16-.35.33-.15.69.2.36.88 1.47 1.91 2.39 1.32 1.19 2.45 1.56 2.82 1.73.36.17.56.15.78-.1.22-.24.9-1.04 1.13-1.41.24-.37.48-.3.8-.18.32.12 2.02.96 2.36 1.13.34.17.58.27.67.41.09.15.09.86-.18 1.6z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 408,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "menu-trigger md:hidden",
                                            "aria-haspopup": "dialog",
                                            "aria-expanded": menuOpen,
                                            "aria-controls": "topmenu",
                                            onClick: ()=>setMenuOpen((v)=>!v),
                                            ref: triggerRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: `chevron ${menuOpen ? "open" : ""}`,
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7 10l5 5 5-5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                ref: menuRef,
                                                id: "topmenu",
                                                className: "menu-overlay",
                                                role: "dialog",
                                                "aria-modal": "true",
                                                initial: {
                                                    y: "-100%",
                                                    opacity: 0
                                                },
                                                animate: {
                                                    y: 0,
                                                    opacity: 1,
                                                    transition: {
                                                        duration: 0.4,
                                                        ease: "easeOut"
                                                    }
                                                },
                                                exit: {
                                                    y: "-100%",
                                                    opacity: 0,
                                                    transition: {
                                                        duration: 0.3,
                                                        ease: "easeIn"
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "menu-overlay-top",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "menu-overlay-brand",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/img/ECOM ICON A.png",
                                                                        alt: "Logo EcomDomination",
                                                                        width: 40,
                                                                        height: 40,
                                                                        className: "brand-logo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 441,
                                                                        columnNumber: 22
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "brand-ecom",
                                                                        children: "EcomDomination"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 22
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                        className: "brand-registered",
                                                                        children: "®"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 22
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "menu-overlay-close",
                                                                onClick: ()=>setMenuOpen(false),
                                                                "aria-label": "Fermer le menu",
                                                                children: "Fermer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 20
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 18
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "menu-overlay-list",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#top",
                                                                    className: `menu-overlay-link ${activeSection === 'top' ? 'is-active' : ''}`,
                                                                    "aria-current": activeSection === 'top' ? 'page' : undefined,
                                                                    onClick: ()=>setMenuOpen(false),
                                                                    children: "Accueil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 449,
                                                                    columnNumber: 22
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#services",
                                                                    className: `menu-overlay-link ${activeSection === 'services' ? 'is-active' : ''}`,
                                                                    "aria-current": activeSection === 'services' ? 'page' : undefined,
                                                                    onClick: ()=>setMenuOpen(false),
                                                                    children: "Services"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 22
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 20
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "#faq",
                                                                    className: `menu-overlay-link ${activeSection === 'faq' ? 'is-active' : ''}`,
                                                                    "aria-current": activeSection === 'faq' ? 'page' : undefined,
                                                                    onClick: ()=>setMenuOpen(false),
                                                                    children: "FAQ"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 455,
                                                                    columnNumber: 22
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 454,
                                                                columnNumber: 20
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 18
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 429,
                                                columnNumber: 16
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 14
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 360,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": "true",
                        className: "h-16 sm:h-16 md:h-20"
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        id: "top",
                        variants: stagger,
                        initial: "hidden",
                        animate: "visible",
                        className: "relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-6 pt-14 pb-10 framer-liWvq",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "badge-slider",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "badge-track",
                                        children: [
                                            [
                                                "Création de Sites Shopify",
                                                "Création d’Images Produits",
                                                "Création de Visuels et Vidéos performante"
                                            ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge",
                                                    children: b
                                                }, i, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this)),
                                            [
                                                "Création de Sites Shopify",
                                                "Création d’Images Produits",
                                                "Création de Visuels et Vidéos performante"
                                            ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge",
                                                    children: b
                                                }, `dup-${i}`, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 477,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 476,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 flex flex-col gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                        variants: fadeUp,
                                        className: "hero-title text-5xl lg:text-[5.5rem] leading-[1.02] tracking-tight",
                                        children: [
                                            "Nous vous aidons à bâtir une ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "accent",
                                                children: "marque e-commerce"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 501,
                                                columnNumber: 44
                                            }, this),
                                            " solide et à maximiser vos ventes !"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 500,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: fadeUp,
                                        className: "hero-subtitle text-lg lg:text-2xl max-w-2xl",
                                        children: "Chez EcomDomination, nous vous accompagnons de A à Z dans la création et le développement de votre e-commerce."
                                    }, void 0, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: fadeUp,
                                        className: "hero-actions flex flex-wrap items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#services",
                                                className: "btn-primary inline-flex items-center justify-center",
                                                children: "Voir nos services"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                className: "btn-secondary inline-flex items-center",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cta-avatar",
                                                        "aria-hidden": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "cta-whatsapp",
                                                            width: "22",
                                                            height: "22",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12.04 2C6.57 2 2.2 6.37 2.2 11.84c0 2.06.63 3.98 1.71 5.56L2 22l4.73-1.86c1.53.96 3.33 1.52 5.3 1.52 5.47 0 9.84-4.37 9.84-9.84S17.51 2 12.04 2zm5.77 14.07c-.25.71-1.45 1.3-2.01 1.32-.54.02-1.22.08-3.94-1.26-3.32-1.63-5.45-5.69-5.62-5.96-.17-.27-1.35-1.8-1.35-3.43s.84-2.47 1.14-2.81c.3-.34.66-.43.88-.43.22 0 .44.01.64.01.21 0 .49-.08.77.59.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.33.57-.16.2-.34.45-.49.6-.16.15-.33.32-.14.66.19.34.84 1.38 1.81 2.24 1.25 1.12 2.31 1.46 2.65 1.62.34.16.53.14.73-.09.2-.23.84-.98 1.06-1.32.22-.34.45-.28.75-.17.3.11 1.9.9 2.22 1.06.32.16.54.25.62.39.08.14.08.81-.17 1.52z",
                                                                fill: "#25D366"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 511,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "cta-text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cta-title",
                                                                children: "Obtenez une consultation gratuite"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cta-sub",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "cta-dot"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 518,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "sur WhatsApp"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 518,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 516,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "framer-h2d1oe",
                                    "data-framer-appear-id": "h2d1oe",
                                    "data-framer-name": "Image (Desktop)",
                                    style: {
                                        opacity: 1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        decoding: "async",
                                        width: 3072,
                                        height: 2048,
                                        sizes: "1210.5837px",
                                        src: "https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png",
                                        alt: "",
                                        style: {
                                            display: "block",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "inherit",
                                            objectPosition: "center center",
                                            objectFit: "cover"
                                        },
                                        srcSet: "https://framerusercontent.com/images/893LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=512 512w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png 3072w"
                                    }, void 0, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 525,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:hidden relative px-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-[220px] sm:h-[280px] md:h-[360px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "https://framerusercontent.com/images/922LPrLT3JS7JXQbJxraBeoo8I.png",
                                alt: "Bannière hero mobile",
                                fill: true,
                                priority: true,
                                sizes: "100vw",
                                className: "object-cover select-none pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 550,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 549,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "partners-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "partners-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "partners-lead",
                            children: [
                                "De grandes marques nous font confiance",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 570,
                                    columnNumber: 13
                                }, this),
                                "partout dans le monde"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 568,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "partner-slider",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "partner-track",
                                children: partnerLogos.concat(partnerLogos).map((logo, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "partner-logo",
                                        "aria-hidden": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: logo.src,
                                            alt: logo.alt
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 576,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 573,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                    lineNumber: 567,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 566,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "services-section",
                id: "services",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "services-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "services-pill",
                            children: "Services"
                        }, void 0, false, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "services-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Nos services"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 42
                                }, this),
                                " pour propulser votre e-commerce"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "services-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/store.svg",
                                                alt: "Shopify",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 595,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 595,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "Création de Sites Shopify"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Nous construisons des sites e‑commerce professionnels sur Shopify, conçus pour maximiser vos ventes et offrir une expérience d’achat fluide."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta group",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        "Parlons de votre site",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "ml-2 w-5 h-5 transition-transform duration-200",
                                                            viewBox: "0 0 24 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 6h20M21 6l-4-4M21 6l-4 4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 600,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 594,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/image.svg",
                                                alt: "Images produits",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 608,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 608,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "Création d’Images Produits"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Nous créons des images de produits professionnelles et percutantes qui séduisent vos clients et boostent vos ventes."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta group",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        "Demandez des exemples",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "ml-2 w-5 h-5 transition-transform duration-200",
                                                            viewBox: "0 0 24 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 6h20M21 6l-4-4M21 6l-4 4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 609,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 607,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/video.svg",
                                                alt: "Visuels & vidéos",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 621,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "Des visuels et vidéos qui captent l’attention et stimulent vos ventes !"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Images et vidéos performantes pour vos annonces et pages e‑commerce. Chaque visuel est pensé pour l’engagement et la conversion."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 624,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta group",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        "Discutons de vos visuels",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "ml-2 w-5 h-5 transition-transform duration-200",
                                                            viewBox: "0 0 24 12",
                                                            fill: "none",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M1 6h20M21 6l-4-4M21 6l-4 4",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 627,
                                                                columnNumber: 5
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 626,
                                                            columnNumber: 3
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 622,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 620,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/speed.svg",
                                                alt: "Délai rapide",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 634,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "Délai rapide"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "La plupart des demandes sont traitées en quelques jours, sans sacrifier la qualité."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 633,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/star.svg",
                                                alt: "Qualité premium",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 642,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 642,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "Qualité premium"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Des standards élevés et une attention aux détails, à chaque résultat."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 643,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "service-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/shield.svg",
                                                alt: "Propriété 100% à vous",
                                                className: "service-icon-img"
                                            }, void 0, false, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "service-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "service-title",
                                                    children: "100% à vous"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Des créations sur‑mesure, pleinement adaptées et sous votre contrôle."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 651,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                    lineNumber: 589,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 588,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "process-section",
                        variants: scaleIn,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "process-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "process-pill",
                                    children: "Comment ça marche"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "process-title",
                                    children: [
                                        "Découvrez un ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "processus clair"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 56
                                        }, this),
                                        " pour un",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 88
                                        }, this),
                                        "e-commerce professionnel et rentable."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 666,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "process-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                            className: "process-card",
                                            variants: fadeUp,
                                            whileHover: {
                                                y: -3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pricing-panel",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "brand-mark",
                                                                children: [
                                                                    "EcomDomination",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                                        children: "®"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 672,
                                                                        columnNumber: 63
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 672,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "price-line",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "price-value",
                                                                    children: "Assistance 24/7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 675,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 674,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "process-btn",
                                                                href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: "Discutons de votre projet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Obtenez une consultation gratuite sur WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 681,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Parlez-nous de votre projet en quelques minutes. Audit express, recommandations concrètes, sans rendez-vous ni engagement — disponible 24/7."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 680,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 669,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                            className: "process-card",
                                            variants: fadeUp,
                                            whileHover: {
                                                y: -3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "request-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "badge-row row-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "badge-row-track",
                                                                    children: [
                                                                        [
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, i, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 692,
                                                                                columnNumber: 27
                                                                            }, this)),
                                                                        [
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, `dup-${i}`, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 695,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "badge-row row-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "badge-row-track reversed",
                                                                    children: [
                                                                        [
                                                                            "Création d’Images Produits",
                                                                            "Création de Sites Shopify",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, `r2-${i}`, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 702,
                                                                                columnNumber: 27
                                                                            }, this)),
                                                                        [
                                                                            "Création d’Images Produits",
                                                                            "Création de Sites Shopify",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création d’Images Produits",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, `r2-dup-${i}`, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 705,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 700,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "badge-row row-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "badge-row-track",
                                                                    children: [
                                                                        [
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création d’Images Produits",
                                                                            "Création de Sites Shopify",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, `r3-${i}`, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 712,
                                                                                columnNumber: 27
                                                                            }, this)),
                                                                        [
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création d’Images Produits",
                                                                            "Création de Sites Shopify",
                                                                            "Création de Visuels et Vidéos performante",
                                                                            "Création de Sites Shopify",
                                                                            "Création d’Images Produits"
                                                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "badge-chip",
                                                                                children: b
                                                                            }, `r3-dup-${i}`, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 715,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 709,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "center-mark",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/assets/img/ECOM ICON 3 .png",
                                                                    alt: "EcomDomination Logomark"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 720,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 719,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Accompagnement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 725,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Nous vous accompagnons de bout en bout dans la création et la croissance de votre e‑commerce : site Shopify soigné, visuels produits qui attirent l’attention et campagnes publicitaires tournées vers la conversion. Notre objectif : des résultats concrets et durables."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                            className: "process-card receive-card results-card",
                                            variants: fadeUp,
                                            whileHover: {
                                                y: -3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "result-visual",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "donut",
                                                                "aria-hidden": true,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "donut-inner"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 734,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "donut-label",
                                                                        children: "ROAS"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 735,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "donut-value",
                                                                        children: "3.8x"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 736,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 733,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "stat-line",
                                                                "aria-label": "KPIs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "kpi",
                                                                        children: [
                                                                            "CPA ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "-22%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 739,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 739,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "dot",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 740,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "kpi",
                                                                        children: [
                                                                            "Conversion ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "+31%"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 741,
                                                                                columnNumber: 56
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 741,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "dot",
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 742,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "kpi",
                                                                        children: [
                                                                            "Panier moyen ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "+18€"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                                lineNumber: 743,
                                                                                columnNumber: 58
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 743,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 738,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 731,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Résultats"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 748,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Des résultats mesurables: ROAS en hausse, CPA maîtrisé et taux de conversion en progression. Nous optimisons vos pages et vos visuels pour des performances durables."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 747,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 663,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 662,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        className: "testimonials-section",
                        variants: scaleIn,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            amount: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "testimonials-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "testimonials-pill",
                                    children: "Témoignages"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 759,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "process-title",
                                    children: [
                                        "Ils aiment quand c'est",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: " bien fait."
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 70
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 760,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "testimonials-carousel",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "testimonials-track",
                                        ref: trackRef,
                                        children: [
                                            [
                                                0,
                                                1,
                                                2,
                                                3
                                            ].map((idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: `testimonial-card ${idx === 3 ? 'ghost' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "t-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    className: "t-avatar",
                                                                    src: "https://i.pravatar.cc/96?img=21",
                                                                    alt: "Client"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "t-meta",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "t-name",
                                                                            children: "Tina Zhang"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 769,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "t-role",
                                                                            children: "Responsable e‑commerce, Octave"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 770,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 768,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 766,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-quote",
                                                            children: "Site Shopify livré sans friction, visuels produits qui convertissent et une équipe qui anticipe. Impact visible dès la première campagne."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 773,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `card-${idx}`, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 17
                                                }, this)),
                                            [
                                                0,
                                                1,
                                                2,
                                                3
                                            ].map((idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                    className: `testimonial-card ${idx === 3 ? 'ghost' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "t-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    className: "t-avatar",
                                                                    src: "https://i.pravatar.cc/96?img=12",
                                                                    alt: "Client"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 779,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "t-meta",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "t-name",
                                                                            children: "Jared Cole"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 781,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "t-role",
                                                                            children: "Fondateur, Nimbus Systems"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 782,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 778,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-quote",
                                                            children: "Ils ont structuré nos pages, nos images et nos vidéos ads. Moins de bricolage, plus de ventes. Communication directe sur WhatsApp: efficace."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 785,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `dup-card-${idx}`, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 777,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "testimonial-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "t-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                className: "t-avatar",
                                                                src: "https://i.pravatar.cc/96?img=37",
                                                                alt: "Client"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "t-meta",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "t-name",
                                                                        children: "Alexia Fran"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 792,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "t-role",
                                                                        children: "Marketing Lead, RelayOne"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 793,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "t-quote",
                                                        children: "Landing pages et kits visuels prêts à l’emploi. Lancement plus rapide et un lift de conversion mesurable en quelques jours."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 788,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "testimonial-card ghost",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "t-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                className: "t-avatar",
                                                                src: "https://i.pravatar.cc/96?img=49",
                                                                alt: "Client"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 801,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "t-meta",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "t-name",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 803,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "t-role",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 804,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "t-quote",
                                                        children: "Un aperçu de plus pour que le carousel défile. Ce témoignage fantôme étend la largeur pour permettre le scroll."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 762,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 761,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "testimonials-dots",
                                    "aria-label": "Contrôles du carousel d'avis",
                                    role: "tablist",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot ${activeSlide === 0 ? 'active dot-pop' : ''}`,
                                            role: "tab",
                                            "aria-selected": activeSlide === 0,
                                            "aria-controls": "slide-0",
                                            onClick: ()=>scrollToSlide(0)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot ${activeSlide === 1 ? 'active dot-pop' : ''}`,
                                            role: "tab",
                                            "aria-selected": activeSlide === 1,
                                            "aria-controls": "slide-1",
                                            onClick: ()=>scrollToSlide(1)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 814,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot ${activeSlide === 2 ? 'active dot-pop' : ''}`,
                                            role: "tab",
                                            "aria-selected": activeSlide === 2,
                                            "aria-controls": "slide-2",
                                            onClick: ()=>scrollToSlide(2)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 815,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `dot ${activeSlide === 3 ? 'active dot-pop' : ''}`,
                                            role: "tab",
                                            "aria-selected": activeSlide === 3,
                                            "aria-controls": "slide-3",
                                            onClick: ()=>scrollToSlide(3)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 816,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 812,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 758,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 757,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "faq-section",
                        id: "faq",
                        "aria-labelledby": "faq-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-badge",
                                    children: "FAQ"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 824,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-title",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        id: "faq-title",
                                        className: "faq-title-line",
                                        children: "Ce que se demandent souvent nos clients"
                                    }, void 0, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 826,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 825,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-contact",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "faq-email",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "faq-email-label",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 830,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "faq-email-value",
                                                    children: "contact@ecomdomination.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/message/URL4FFGHMAQLD1",
                                            className: "faq-cta",
                                            "aria-label": "Commencez votre consultation",
                                            children: "Commencez votre consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 833,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 828,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-list",
                                    role: "list",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `faq-item ${faqOpenIndex === 0 ? 'open' : ''}`,
                                            role: "listitem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-item-row",
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '4rem',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Combien de demandes puis-je soumettre ?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 838,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "faq-item-toggle",
                                                            "aria-label": "Toggle answer",
                                                            onClick: ()=>setFaqOpenIndex(faqOpenIndex === 0 ? null : 0),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "plus-icon",
                                                                style: {
                                                                    transition: 'transform .22s ease',
                                                                    transform: faqOpenIndex === 0 ? 'rotate(45deg)' : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 840,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 839,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 0 ? 260 : 0,
                                                        opacity: faqOpenIndex === 0 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s',
                                                        paddingBottom: faqOpenIndex === 0 ? 6 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Autant que vous le souhaitez. Nous les traitons une par une afin de garantir la qualité et la régularité des livrables."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 843,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `faq-item ${faqOpenIndex === 1 ? 'open' : ''}`,
                                            role: "listitem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-item-row",
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '4rem',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Quel type de travail est inclus ?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "faq-item-toggle",
                                                            "aria-label": "Toggle answer",
                                                            onClick: ()=>setFaqOpenIndex(faqOpenIndex === 1 ? null : 1),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "plus-icon",
                                                                style: {
                                                                    transition: 'transform .22s ease',
                                                                    transform: faqOpenIndex === 1 ? 'rotate(45deg)' : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 851,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 850,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 848,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 1 ? 260 : 0,
                                                        opacity: faqOpenIndex === 1 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s',
                                                        paddingBottom: faqOpenIndex === 1 ? 6 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Création de sites Shopify, images produits, visuels et vidéos publicitaires, landing pages et optimisation orientée conversion. Nous adaptons l’ampleur selon votre besoin."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 854,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 847,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `faq-item ${faqOpenIndex === 2 ? 'open' : ''}`,
                                            role: "listitem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-item-row",
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '4rem',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Quel est le délai de livraison ?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "faq-item-toggle",
                                                            "aria-label": "Toggle answer",
                                                            onClick: ()=>setFaqOpenIndex(faqOpenIndex === 2 ? null : 2),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "plus-icon",
                                                                style: {
                                                                    transition: 'transform .22s ease',
                                                                    transform: faqOpenIndex === 2 ? 'rotate(45deg)' : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 862,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 861,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 2 ? 260 : 0,
                                                        opacity: faqOpenIndex === 2 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s',
                                                        paddingBottom: faqOpenIndex === 2 ? 6 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "La plupart des demandes sont livrées en 24–48h. Les projets plus complexes peuvent demander davantage de temps — nous vous prévenons toujours à l’avance."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 866,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 865,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `faq-item ${faqOpenIndex === 3 ? 'open' : ''}`,
                                            role: "listitem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-item-row",
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '4rem',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Puis-je mettre en pause ?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 871,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "faq-item-toggle",
                                                            "aria-label": "Toggle answer",
                                                            onClick: ()=>setFaqOpenIndex(faqOpenIndex === 3 ? null : 3),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "plus-icon",
                                                                style: {
                                                                    transition: 'transform .22s ease',
                                                                    transform: faqOpenIndex === 3 ? 'rotate(45deg)' : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 873,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 872,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 870,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 3 ? 260 : 0,
                                                        opacity: faqOpenIndex === 3 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s',
                                                        paddingBottom: faqOpenIndex === 3 ? 6 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Oui. Vous pouvez mettre en pause et reprendre quand vous voulez, sans complexité administrative."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 876,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 869,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `faq-item ${faqOpenIndex === 4 ? 'open' : ''}`,
                                            role: "listitem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-item-row",
                                                    style: {
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'space-between',
                                                        paddingRight: '4rem',
                                                        position: 'relative'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Et si j’ai besoin de développement aussi ?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "faq-item-toggle",
                                                            "aria-label": "Toggle answer",
                                                            onClick: ()=>setFaqOpenIndex(faqOpenIndex === 4 ? null : 4),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "plus-icon",
                                                                style: {
                                                                    transition: 'transform .22s ease',
                                                                    transform: faqOpenIndex === 4 ? 'rotate(45deg)' : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 884,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 881,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 4 ? 260 : 0,
                                                        opacity: faqOpenIndex === 4 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .34s cubic-bezier(.22,.61,.36,1), opacity .24s ease .08s',
                                                        paddingBottom: faqOpenIndex === 4 ? 6 : 0
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Oui. Nous collaborons avec vos développeurs ou nos partenaires pour intégrer et livrer des produits de qualité, de bout en bout."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 888,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 822,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "site-footer",
                        "aria-label": "Pied de page",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "footer-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "footer-left",
                                    children: [
                                        "EcomDomination",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                            children: "®"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 898,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 898,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "footer-right",
                                    "aria-label": "Liens de pied de page",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#services",
                                            className: "footer-link",
                                            children: "Services"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 900,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#mentions-legales",
                                            className: "footer-link",
                                            children: "Mentions légales"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 901,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/message/URL4FFGHMAQLD1",
                                            className: "footer-link footer-whatsapp",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center justify-center w-6 h-6 rounded-full shadow-inner",
                                                    "aria-hidden": true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        "aria-hidden": true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                fill: "#25D366"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M16.67 14.92c-.26.74-1.52 1.35-2.11 1.37-.57.02-1.28.08-4.14-1.31-3.48-1.71-5.72-5.97-5.9-6.26-.18-.28-1.42-1.89-1.42-3.6 0-1.71.88-2.58 1.2-2.93.32-.35.69-.45.92-.45.23 0 .46.01.66.01.22 0 .52-.08.82.61.3.69 1 2.49 1.09 2.67.09.18.14.39.02.64-.12.25-.18.39-.35.61-.17.22-.36.47-.52.63-.17.16-.35.33-.15.69.2.36.88 1.47 1.91 2.39 1.32 1.19 2.45 1.56 2.82 1.73.36.17.56.15.78-.1.22-.24.9-1.04 1.13-1.41.24-.37.48-.3.8-.18.32.12 2.02.96 2.36 1.13.34.17.58.27.67.41.09.15.09.86-.18 1.6z",
                                                                fill: "white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 906,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 17
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "WhatsApp"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 909,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 902,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 899,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 897,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 896,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
_s(Home, "DIN/OqMgfg4mKT4MVra9F4orBwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projets%20DEV_ecom-domination_src_app_page_tsx_c1bd26e2._.js.map