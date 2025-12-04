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
var __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projets DEV/ecom-domination/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6
        }
    }
};
const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08
        }
    }
};
function Home() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onKey = {
                "Home.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpen(false);
                }
            }["Home.useEffect.onKey"];
            const onClick = {
                "Home.useEffect.onClick": (e)=>{
                    if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
                }
            }["Home.useEffect.onClick"];
            document.addEventListener("keydown", onKey);
            document.addEventListener("click", onClick);
            return ({
                "Home.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.removeEventListener("click", onClick);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
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
    const getMaxIndex = ()=>{
        const el = trackRef.current;
        if (!el) return 0;
        const cards = el.querySelectorAll('.testimonial-card').length;
        return Math.max(0, cards - 1);
    };
    const scrollToSlide = (i)=>{
        const el = trackRef.current;
        if (!el) return;
        const card = el.querySelector('.testimonial-card');
        if (!card) return;
        const style = getComputedStyle(el);
        const gap = parseFloat(style.gap) || 24;
        const rect = card.getBoundingClientRect();
        const step = rect.width + gap;
        const maxI = getMaxIndex();
        const target = Math.max(0, Math.min(maxI, i));
        // pause autoplay le temps du scroll smooth
        setAutoPlay(false);
        // disable scroll snap during programmatic scroll to avoid overshoot
        const prevSnap = el.style.scrollSnapType;
        el.style.scrollSnapType = 'none';
        el.scrollTo({
            left: target * step,
            behavior: 'smooth'
        });
        setActiveSlide(target);
        window.setTimeout(()=>{
            el.style.scrollSnapType = prevSnap || '';
            setAutoPlay(true);
        }, 500);
    };
    // synchroniser l’état actif avec le scroll continu
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const el = trackRef.current;
            if (!el) return;
            const card = el.querySelector('.testimonial-card');
            if (!card) return;
            const style = getComputedStyle(el);
            const gap = parseFloat(style.gap) || 24;
            const step = card.offsetWidth + gap;
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    const i = Math.round(el.scrollLeft / step);
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
            if (!el) return;
            const onScroll = {
                "Home.useEffect.onScroll": ()=>{
                    const card = el.querySelector('.testimonial-card');
                    if (!card) return;
                    const style = getComputedStyle(el);
                    const gap = parseFloat(style.gap) || 24;
                    const step = card.offsetWidth + gap;
                    const i = Math.round(el.scrollLeft / step);
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
            const speed = 2.2; // pixels per frame
            const step = {
                "Home.useEffect.step": ()=>{
                    const maxScroll = el.scrollWidth - el.clientWidth;
                    if (autoPlayRef.current) {
                        let nextLeft = el.scrollLeft + speed;
                        if (nextLeft >= maxScroll) {
                            nextLeft = nextLeft % maxScroll; // wrap seamlessly
                        }
                        el.scrollLeft = nextLeft;
                    }
                    rafId = requestAnimationFrame(step);
                }
            }["Home.useEffect.step"];
            rafId = requestAnimationFrame(step);
            return ({
                "Home.useEffect": ()=>{
                    if (rafId) cancelAnimationFrame(rafId);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        autoPlay
    ]);
    const [faqOpenIndex, setFaqOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [faqCardWidth, setFaqCardWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('60%');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const computeWidth = {
                "Home.useEffect.computeWidth": ()=>{
                    const w = window.innerWidth;
                    if (w <= 640) return '100%';
                    if (w <= 960) return '92%';
                    return '60%';
                }
            }["Home.useEffect.computeWidth"];
            const onResize = {
                "Home.useEffect.onResize": ()=>setFaqCardWidth(computeWidth())
            }["Home.useEffect.onResize"];
            setFaqCardWidth(computeWidth());
            window.addEventListener('resize', onResize);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('resize', onResize)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200",
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
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "brand-ecom",
                                                    children: "EcomDomination"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                            className: "brand-registered",
                                            children: "®"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "menu-trigger",
                                            "aria-haspopup": "menu",
                                            "aria-expanded": menuOpen,
                                            "aria-controls": "topmenu",
                                            onClick: ()=>setMenuOpen((v)=>!v),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Menu"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 168,
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
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: menuRef,
                                            id: "topmenu",
                                            className: `menu-popover ${menuOpen ? "open" : ""}`,
                                            role: "menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "menu-list",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#services",
                                                            className: "menu-item",
                                                            role: "menuitem",
                                                            children: "Découvrir nos services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#pricing",
                                                            className: "menu-item",
                                                            role: "menuitem",
                                                            children: "Voir les tarifs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#portfolio",
                                                            className: "menu-item",
                                                            role: "menuitem",
                                                            children: "Portfolio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 177,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                            className: "menu-item",
                                                            role: "menuitem",
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "menu-icon",
                                                                    "aria-hidden": true,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12.04 2C6.57 2 2.2 6.37 2.2 11.84c0 2.06.63 3.98 1.71 5.56L2 22l4.73-1.86c1.53.96 3.33 1.52 5.3 1.52 5.47 0 9.84-4.37 9.84-9.84S17.51 2 12.04 2zm5.77 14.07c-.25.71-1.45 1.3-2.01 1.32-.54.02-1.22.08-3.94-1.26-3.32-1.63-5.45-5.69-5.62-5.96-.17-.27-1.35-1.8-1.35-3.43s.84-2.47 1.14-2.81c.3-.34.66-.43.88-.43.22 0 .44.01.64.01.21 0 .49-.08.77.59.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.33.57-.16.2-.34.45-.49.6-.16.15-.33.32-.14.66.19.34.84 1.38 1.81 2.24 1.25 1.12 2.31 1.46 2.65 1.62.34.16.53.14.73-.09.2-.23.84-.98 1.06-1.32.22-.34.45-.28.75-.17.3.11 1.9.9 2.22 1.06.32.16.54.25.62.39.08.14.08.81-.17 1.52z",
                                                                            fill: "#25D366"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 182,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "WhatsApp"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                    lineNumber: 210,
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
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 202,
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
                                                lineNumber: 227,
                                                columnNumber: 44
                                            }, this),
                                            " solide et à maximiser vos ventes !"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        variants: fadeUp,
                                        className: "hero-subtitle text-lg lg:text-2xl max-w-2xl",
                                        children: "Chez EcomDomination, nous vous accompagnons de A à Z dans la création et le développement de votre e-commerce."
                                    }, void 0, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 229,
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
                                                lineNumber: 233,
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
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 237,
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
                                                                lineNumber: 243,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "cta-sub",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "cta-dot"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 244,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "sur WhatsApp"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 225,
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
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 252,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 195,
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
                                lineNumber: 277,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 140,
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
                                    lineNumber: 296,
                                    columnNumber: 13
                                }, this),
                                "partout dans le monde"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 294,
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
                                            lineNumber: 303,
                                            columnNumber: 19
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 292,
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
                            lineNumber: 316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "services-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Nos services"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 42
                                }, this),
                                " pour propulser votre e-commerce"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 317,
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
                                                lineNumber: 321,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 321,
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
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Nous construisons des sites e‑commerce professionnels sur Shopify, conçus pour maximiser vos ventes et offrir une expérience d’achat fluide."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Parlons de votre site"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 320,
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
                                                lineNumber: 330,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 330,
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
                                                    lineNumber: 332,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Nous créons des images de produits professionnelles et percutantes qui séduisent vos clients et boostent vos ventes."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Demandez des exemples"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 331,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 329,
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
                                                lineNumber: 339,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 339,
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
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Images et vidéos performantes pour vos annonces et pages e‑commerce. Chaque visuel est pensé pour l’engagement et la conversion."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    className: "service-cta",
                                                    href: "https://wa.me/message/URL4FFGHMAQLD1",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Discutons de vos visuels"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 340,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 338,
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
                                                lineNumber: 348,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 348,
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
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "La plupart des demandes sont traitées en quelques jours, sans sacrifier la qualité."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 349,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 347,
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
                                                lineNumber: 356,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 356,
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
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Des standards élevés et une attention aux détails, à chaque résultat."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 357,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 355,
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
                                                lineNumber: 364,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 364,
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
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "service-desc",
                                                    children: "Des créations sur‑mesure, pleinement adaptées et sous votre contrôle."
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 318,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-span-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "process-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "process-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "process-pill",
                                    children: "Comment ça marche"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 378,
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
                                            lineNumber: 380,
                                            columnNumber: 56
                                        }, this),
                                        " pour un",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 380,
                                            columnNumber: 88
                                        }, this),
                                        "e-commerce professionnel et rentable."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 380,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "process-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "process-card",
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
                                                                        lineNumber: 386,
                                                                        columnNumber: 63
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "price-line",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "price-value",
                                                                    children: "Assistance 24/7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 389,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "process-btn",
                                                                href: "#",
                                                                children: "Discutons de votre projet"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 391,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 385,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 384,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Obtenez une consultation gratuite sur WhatsApp"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Parlez-nous de votre projet en quelques minutes. Audit express, recommandations concrètes, sans rendez-vous ni engagement — disponible 24/7."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 396,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "process-card",
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
                                                                                lineNumber: 413,
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
                                                                                lineNumber: 423,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 404,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 403,
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
                                                                                lineNumber: 437,
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
                                                                                lineNumber: 447,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 428,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 427,
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
                                                                                lineNumber: 461,
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
                                                                                lineNumber: 471,
                                                                                columnNumber: 27
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 452,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "center-mark",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/assets/img/ECOM ICON 3 .png",
                                                                    alt: "EcomDomination Logomark"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 475,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Accompagnement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Nous vous accompagnons de bout en bout dans la création et la croissance de votre e‑commerce : site Shopify soigné, visuels produits qui attirent l’attention et campagnes publicitaires tournées vers la conversion. Notre objectif : des résultats concrets et durables."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 482,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                            className: "process-card receive-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-head",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "folder",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "back",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    className: "back-img",
                                                                    src: "https://framerusercontent.com/images/u6NHrizsQWk4u5sqIM2DGhO2EI.svg",
                                                                    alt: "Folder back"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 489,
                                                                    columnNumber: 43
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shots",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shot shot-1",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/assets/img/ECOM.png",
                                                                            alt: "Project shot 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 491,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 491,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shot shot-2",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/assets/img/ECOM B.png",
                                                                            alt: "Project shot 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 492,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 492,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "shot shot-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                            src: "/assets/img/Ecom v .png",
                                                                            alt: "Project shot 3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 493,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 493,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 490,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "front"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "process-card-body",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: "Résultats"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 499,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Votre marque e‑commerce passe un cap : conversion qui grimpe, panier moyen qui progresse, ROAS maîtrisé, acquisition plus rentable et rétention renforcée. Testez vite, apprenez, et scalez sereinement — une identité de marque cohérente et des performances qui parlent d’elles‑mêmes."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "testimonials-section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "testimonials-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "testimonials-pill",
                                    children: "Témoignages"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 510,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "process-title",
                                    children: [
                                        "Il s’avère que nos clients aiment quand c’est ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                            children: "fait."
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 90
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 511,
                                    columnNumber: 14
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
                                                                    lineNumber: 519,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "t-meta",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            className: "t-name",
                                                                            children: "Tina Zhang"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 521,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "t-role",
                                                                            children: "Directrice créative, Octave"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 522,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-quote",
                                                            children: "La qualité du design est top‑tier et le processus est sans accroc. On a l’impression de tricher tant c’est efficace."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 525,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `card-${idx}`, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
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
                                                                    lineNumber: 531,
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
                                                                            lineNumber: 533,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "t-role",
                                                                            children: "Fondateur, Nimbus Systems"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                            lineNumber: 534,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                    lineNumber: 532,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "t-quote",
                                                            children: "Pas de réunions inutiles, pas de délais, pas de drama. Du design malin livré quand il faut. Je recommande sans réserve."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 537,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `dup-card-${idx}`, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 529,
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
                                                                lineNumber: 542,
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
                                                                        lineNumber: 544,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "t-role",
                                                                        children: "Marketing Lead, RelayOne"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 545,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 543,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 541,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "t-quote",
                                                        children: "J’ai adoré travailler avec Whenever. Inutile d’expliquer deux fois. Le design est arrivé exactement comme je l’avais imaginé."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 540,
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
                                                                lineNumber: 553,
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
                                                                        lineNumber: 555,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "t-role",
                                                                        children: "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                        lineNumber: 556,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "t-quote",
                                                        children: "Un aperçu de plus pour que le carousel défile. Ce témoignage fantôme étend la largeur pour permettre le scroll."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 14
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
                                            lineNumber: 565,
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
                                            lineNumber: 566,
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
                                            lineNumber: 567,
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
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "faq-section",
                        "aria-labelledby": "faq-title",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-card",
                            style: {
                                width: faqCardWidth,
                                border: '3px solid #dedee0',
                                borderRadius: '22px',
                                boxShadow: '0 12px 28px rgba(0,0,0,0.08)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-badge",
                                    children: "FAQs"
                                }, void 0, false, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 576,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-title",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            id: "faq-title",
                                            className: "faq-title-line",
                                            children: "Frequently"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "faq-title-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    children: "Asked"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 48
                                                }, this),
                                                " Questions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 579,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 577,
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
                                                    lineNumber: 584,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "faq-email-value",
                                                    children: "contact@ecomdomination.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 583,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "faq-cta",
                                            "aria-label": "Commencez votre consultation",
                                            children: "Commencez votre consultation"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 587,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 582,
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
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "How many design requests can I submit?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 593,
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
                                                                lineNumber: 595,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 592,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 0 ? 240 : 0,
                                                        opacity: faqOpenIndex === 0 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .28s ease, opacity .28s ease'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "You can submit as many requests as you’d like. They’ll be handled one at a time, in the order they’re added to your Notion board."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 598,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 591,
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
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "What kind of design work is included?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 604,
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
                                                                lineNumber: 606,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 605,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 1 ? 240 : 0,
                                                        opacity: faqOpenIndex === 1 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .28s ease, opacity .28s ease'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Design work typically includes UI/UX, web and app screens, branding assets, and marketing collateral depending on the plan."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 602,
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
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "How fast will I receive my designs?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 615,
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
                                                                lineNumber: 617,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 616,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 614,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 2 ? 240 : 0,
                                                        opacity: faqOpenIndex === 2 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .28s ease, opacity .28s ease'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Most requests are turned around within 24–48 hours. Complex tasks may take longer."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 620,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 613,
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
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "Can I pause my subscription?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 626,
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
                                                                lineNumber: 628,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 3 ? 240 : 0,
                                                        opacity: faqOpenIndex === 3 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .28s ease, opacity .28s ease'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "Yes, you can pause your subscription at any time and resume when you need more design work."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 632,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 631,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 624,
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
                                                        justifyContent: 'space-between'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "faq-item-text",
                                                            children: "What if I need development too?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 637,
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
                                                                lineNumber: 639,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "faq-answer-wrap",
                                                    style: {
                                                        maxHeight: faqOpenIndex === 4 ? 240 : 0,
                                                        opacity: faqOpenIndex === 4 ? 1 : 0,
                                                        overflow: 'hidden',
                                                        transition: 'max-height .28s ease, opacity .28s ease'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "faq-answer",
                                                        children: "We collaborate with development partners or can integrate with your dev team to ship high-quality products."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                                    lineNumber: 642,
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
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 575,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 574,
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
                                            lineNumber: 653,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 653,
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
                                            lineNumber: 655,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#mentions-legales",
                                            className: "footer-link",
                                            children: "Mentions légales"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projets__DEV$2f$ecom$2d$domination$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me/message/URL4FFGHMAQLD1",
                                            className: "footer-link footer-whatsapp",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                            lineNumber: 657,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                            lineNumber: 652,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                        lineNumber: 651,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projets DEV/ecom-domination/src/app/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_s(Home, "9D8maKqlTyMaln7WUcaFNu1OnIo=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projets%20DEV_ecom-domination_src_app_page_tsx_c1bd26e2._.js.map