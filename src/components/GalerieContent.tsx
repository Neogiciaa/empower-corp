"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";

interface GalerieImage {
  src: string;
  alt: string;
  pos?: string;
}

const images: GalerieImage[] = [
  { src: "/images/dicka-nassar.jpg",    alt: "Dicka Nassar — Franchisé Nantes", pos: "50% 12%" },
  { src: "/images/galerie-dicka-2.jpg", alt: "One Project Marketing — Nantes",  pos: "50% 18%" },
  { src: "/images/galerie-2.jpg",       alt: "Candidat Empower Corp",           pos: "50% 18%" },
  { src: "/images/galerie-3.jpg",       alt: "Prise de parole — événement entrepreneur", pos: "center" },
  { src: "/images/galerie-4.jpg",       alt: "Table ronde franchisés",                   pos: "center" },
  { src: "/images/galerie-5.jpg",       alt: "Panel franchisés — séminaire",             pos: "center" },
  { src: "/images/galerie-6.jpg",       alt: "Remise de prix — Entrepreneur Meet-Up",    pos: "center" },
  { src: "/images/galerie-7.jpg",       alt: "Équipe Empower Corp en séminaire",         pos: "center" },
  { src: "/images/galerie-8.jpg",       alt: "Duo franchisé — One Project Marketing",    pos: "50% 30%" },
  { src: "/images/galerie-9.jpg",       alt: "Formation franchisés",                     pos: "center" },
  { src: "/images/awards-group-gala.jpg",    alt: "Équipe Empower Corp au gala" },
  { src: "/images/team-meeting-fresque.jpg", alt: "Réunion d'équipe" },
  { src: "/images/paintball.jpg",            alt: "Paintball team building" },
  { src: "/images/team-neon.jpg",            alt: "Soirée d'équipe" },
  { src: "/images/entrepreneur-year.jpg",    alt: "Entrepreneur of the Year" },
  { src: "/images/christmas-dinner.jpg",     alt: "Dîner de Noël" },
  { src: "/images/halloween-office.jpg",     alt: "Halloween au bureau" },
  { src: "/images/market-selfie.jpg",        alt: "Sortie d'équipe" },
  { src: "/images/awards-team.jpg",          alt: "Équipe cérémonie" },
  { src: "/images/arcade-fun.jpg",           alt: "Soirée arcade" },
  { src: "/images/team-restaurant.jpg",      alt: "Restaurant d'équipe" },
  { src: "/images/coaching-office.jpg",      alt: "Coaching au bureau" },
];

function Lightbox({ index, onClose, onPrev, onNext }: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.93)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        style={{
          position: "absolute",
          top: "24px",
          right: "28px",
          background: "none",
          border: "none",
          color: "#aaa",
          fontSize: "32px",
          cursor: "pointer",
          lineHeight: 1,
          zIndex: 101,
        }}
        aria-label="Fermer"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        style={{
          position: "absolute",
          left: "20px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          color: "#eee",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 101,
        }}
        aria-label="Précédent"
      >
        ‹
      </button>

      {/* Image */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "88vh",
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="90vw"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Caption */}
      <p
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "12px",
          color: "#888",
          letterSpacing: "0.08em",
          whiteSpace: "nowrap",
        }}
      >
        {img.alt} &nbsp;·&nbsp; {index + 1} / {images.length}
      </p>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        style={{
          position: "absolute",
          right: "20px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          color: "#eee",
          fontSize: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 101,
        }}
        aria-label="Suivant"
      >
        ›
      </button>
    </div>
  );
}

function GalerieImg({ img, index, sizes, ratio, onOpen }: {
  img: GalerieImage;
  index: number;
  sizes: string;
  ratio: string;
  onOpen: (i: number) => void;
}) {
  return (
    <div
      onClick={() => onOpen(index)}
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        aspectRatio: ratio,
        cursor: "zoom-in",
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        style={{
          objectFit: "cover",
          objectPosition: img.pos ?? "center",
          transition: "transform 0.4s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    </div>
  );
}

export default function GalerieContent() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setLightboxIndex(i), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i === null ? null : (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setLightboxIndex((i) => i === null ? null : (i + 1) % images.length), []);

  return (
    <>
      {lightboxIndex !== null && (
        <Lightbox index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
      )}

      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* Row 1 — 3 portraits */}
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {images.slice(0, 3).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={i} sizes="(max-width:768px) 50vw, 33vw" ratio="3/4" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

            {/* Row 2 — 2 wide landscape */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {images.slice(3, 5).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={3 + i} sizes="(max-width:768px) 100vw, 50vw" ratio="16/9" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

            {/* Row 3 — 2 wide landscape */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {images.slice(5, 7).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={5 + i} sizes="(max-width:768px) 100vw, 50vw" ratio="16/9" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

            {/* Row 4 — 3 landscape */}
            <AnimatedSection delay={0.25}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {images.slice(7, 10).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={7 + i} sizes="(max-width:768px) 100vw, 33vw" ratio="4/3" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

            {/* Row 5 — 4 original photos */}
            <AnimatedSection delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.slice(10, 14).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={10 + i} sizes="(max-width:768px) 50vw, 25vw" ratio="1/1" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

            {/* Row 6 — remaining original photos */}
            <AnimatedSection delay={0.35}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {images.slice(14).map((img, i) => (
                  <GalerieImg key={img.src} img={img} index={14 + i} sizes="(max-width:768px) 50vw, 25vw" ratio="4/3" onOpen={open} />
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </>
  );
}
