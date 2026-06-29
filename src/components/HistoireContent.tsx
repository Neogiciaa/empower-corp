"use client";

import AnimatedSection from "./AnimatedSection";
import FranceMap from "./FranceMap";
import Image from "next/image";

const timeline = [
  { year: "2019", event: "Création d'Empower Corp à Marseille par Tristan Escutary" },
  { year: "2021", event: "Empower Corp s'installe à Rennes" },
  { year: "2026", event: "Ouverture de l'agence de Nantes" },
];

export default function HistoireContent() {
  return (
    <>
      {/* Founder section */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", maxWidth: "420px" }}>
                <Image
                  src="/images/tristan-awards-london.jpg"
                  alt="Tristan Escutary, fondateur d'Empower Corp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>Tristan Escutary</p>
                <p style={{ fontSize: "14px", color: "#888", marginTop: "4px" }}>Fondateur &amp; CEO</p>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.1}>
                <p style={{ color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Créée en 2019 à Marseille par Tristan Escutary, Empower Corp est une entreprise
                  de marketing direct spécialisée dans la vente, la formation et le
                  coaching d&apos;équipes commerciales.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p style={{ marginTop: "20px", color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Depuis sa création, l&apos;entreprise a réalisé plus de 50 000
                  acquisitions clients pour le compte de ses partenaires grâce au canal
                  de la vente directe.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p style={{ marginTop: "20px", color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Empower Corp s&apos;inscrit dans un réseau international d&apos;organisations
                  spécialisées dans le marketing direct, présent dans plusieurs pays d&apos;Europe.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Awards image */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/10" }}>
                <Image src="/images/tristan-stage.jpg" alt="Tristan sur scène" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "16/10" }}>
                <Image src="/images/entrepreneur-year.jpg" alt="Entrepreneur of the Year" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Franchisé Nantes — Dicka Nassar */}
      <section style={{ paddingBottom: "120px" }}>
        <div className="container-main">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              2026 · Franchisé Nantes
            </p>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15, maxWidth: "700px", marginBottom: "64px" }}>
              Ouverture de l&apos;agence de Nantes
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", aspectRatio: "3/4", maxWidth: "420px" }}>
                <Image
                  src="/images/dicka-nassar.jpg"
                  alt="Dicka Nassar — Franchisé Nantes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <p style={{ fontSize: "18px", fontWeight: 600 }}>Dicka Nassar</p>
                <p style={{ fontSize: "14px", color: "#888", marginTop: "4px" }}>Fondateur de One Project Marketing</p>
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.1}>
                <p style={{ color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Créée par Dicka Nassar, &quot;One Project Marketing&quot;, franchise de
                  l&apos;organisation Empower Corp, a vu le jour en janvier 2026 à Nantes.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p style={{ marginTop: "20px", color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Dicka, promu franchisé à l&apos;âge de 24 ans, nous vient tout droit de
                  Guadeloupe. Arrivé en Bretagne seul à l&apos;âge de 16 ans pour rejoindre
                  l&apos;équipe de France de Kayak, il a su tirer le meilleur de son
                  expérience et mettre ses compétences au profit de son opportunité au
                  sein de l&apos;entreprise.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <p style={{ marginTop: "20px", color: "#aaa", fontSize: "17px", lineHeight: 1.85 }}>
                  Depuis sa récente création, l&apos;entreprise a réalisé en 5 mois plus
                  de{" "}
                  <span style={{ color: "#c8a97e", fontWeight: 600 }}>3 000 acquisitions clients</span>{" "}
                  pour le compte de ses partenaires grâce au canal de la vente directe.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div
                  style={{
                    marginTop: "48px",
                    padding: "32px",
                    border: "1px solid rgba(200,169,126,0.15)",
                    borderRadius: "16px",
                    background: "rgba(200,169,126,0.03)",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "48px", fontWeight: 700, color: "#c8a97e", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px" }}>
                    3 000+
                  </p>
                  <p style={{ fontSize: "13px", color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    acquisitions clients en 5 mois
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* France Map */}
      <FranceMap />

      {/* Timeline */}
      <section style={{ paddingTop: "100px", paddingBottom: "120px", background: "#0a0a0a" }}>
        <div className="container-main">
          <AnimatedSection>
            <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              Chronologie
            </p>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "48px" }}>
              Les étapes clés
            </h2>
          </AnimatedSection>

          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 0.08}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "24px",
                  padding: "24px 0",
                  borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                  borderBottom: "1px solid #1a1a1a",
                }}
              >
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#c8a97e", fontFamily: "var(--font-mono), monospace", minWidth: "48px" }}>
                  {item.year}
                </span>
                <span style={{ fontSize: "16px", color: "#bbb" }}>{item.event}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
