"use client";

import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function SectionLink({
  href,
  label,
  title,
  description,
}: {
  href: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        padding: "32px 0",
        borderBottom: "1px solid #151515",
        textDecoration: "none",
        transition: "padding-left 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
      onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "11px",
              color: "#c8a97e",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {label}
          </p>
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#eee",
              marginBottom: "8px",
            }}
          >
            {title}
          </h3>
          <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6, maxWidth: "500px" }}>
            {description}
          </p>
        </div>
        <ArrowUpRight size={20} color="#c8a97e" style={{ flexShrink: 0, marginTop: "4px" }} />
      </div>
    </Link>
  );
}

export default function HomePreview() {
  return (
    <>
      {/* Intro section */}
      <section style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 38px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.25,
                }}
              >
                Une entreprise de marketing direct qui forme des leaders sur le terrain.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p style={{ color: "#999", fontSize: "16px", lineHeight: 1.85 }}>
                Depuis 2019, Empower Corp accompagne des entreprises, organisations et
                ONG dans leur développement. Plus de 50 000 acquisitions réalisées,
                des agences en France, et un réseau international en Europe.
              </p>
              <Link
                href="/#activite"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "28px",
                  fontSize: "14px",
                  color: "#c8a97e",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Découvrir notre activité <ArrowUpRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image band */}
      <AnimatedSection>
        <div className="container-main">
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "21/9",
            }}
          >
            <Image
              src="/images/team-stairs.jpg"
              alt="Équipe Empower en déplacement"
              fill
              sizes="(max-width: 1140px) 100vw, 1140px"
              style={{ objectFit: "cover", objectPosition: "center 35%" }}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Pages navigation */}
      <section style={{ paddingTop: "100px", paddingBottom: "120px" }}>
        <div className="container-main">
          <AnimatedSection>
            <p
              style={{
                fontSize: "12px",
                color: "#c8a97e",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              Explorer
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div style={{ borderTop: "1px solid #151515" }}>
              <SectionLink
                href="#activite"
                label="01"
                title="Notre activité"
                description="Développement commercial, vente directe et accompagnement de nos partenaires."
              />
              <SectionLink
                href="#histoire"
                label="02"
                title="Notre histoire"
                description="Fondée en 2019 par Tristan Escutary, Empower Corp a réalisé plus de 50 000 acquisitions."
              />
              <SectionLink
                href="#parcours"
                label="03"
                title="Parcours & évolution"
                description="Cinq étapes de développement, de la fondation à l'entrepreneuriat."
              />
              <SectionLink
                href="#rejoindre"
                label="04"
                title="Nous rejoindre"
                description="Développez vos compétences et construisez votre avenir professionnel."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder quote */}
      <section style={{ paddingBottom: "140px" }}>
        <div className="container-main">
          <AnimatedSection>
            <blockquote
              style={{
                paddingLeft: "28px",
                borderLeft: "2px solid #c8a97e",
                maxWidth: "600px",
              }}
            >
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: 1.55,
                  color: "#ccc",
                  fontStyle: "italic",
                }}
              >
                &laquo; Créer de la croissance, développer des leaders et bâtir
                des organisations performantes.&nbsp;&raquo;
              </p>
              <p style={{ marginTop: "16px", fontSize: "13px", color: "#888" }}>
                Tristan Escutary, Fondateur
              </p>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
