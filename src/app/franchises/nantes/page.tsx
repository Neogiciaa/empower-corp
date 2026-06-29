import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Franchisé Nantes — Dicka Nassar",
  description:
    "Découvrez l'histoire de Dicka Nassar, franchisé Nantes d'Empower Corp et fondateur de One Project Marketing.",
};

export default function NantesPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="container-main">
        {/* Back link */}
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            color: "#c8a97e",
            textDecoration: "none",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "64px",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Retour
        </Link>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Photo */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                maxWidth: "480px",
                overflow: "hidden",
                borderRadius: "20px",
              }}
            >
              <Image
                src="/images/dicka-nassar.jpg"
                alt="Dicka Nassar — Franchisé Nantes"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
              {/* Subtle gold gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>

          {/* Content */}
          <div style={{ paddingTop: "8px" }}>
            <p
              style={{
                color: "#c8a97e",
                fontSize: "12px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              Franchisé Nantes
            </p>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "40px",
              }}
            >
              Dicka Nassar
            </h1>

            <div
              style={{
                width: "40px",
                height: "1px",
                background: "#c8a97e",
                marginBottom: "40px",
                opacity: 0.6,
              }}
            />

            <p
              style={{
                color: "#bbb",
                fontSize: "16px",
                lineHeight: 1.9,
                marginBottom: "32px",
              }}
            >
              Créée par Dicka Nassar &quot;One Project Marketing&quot;, franchise de
              l&apos;organisation Empower Corp, a vu le jour en janvier 2026 à Nantes.
            </p>

            <p
              style={{
                color: "#bbb",
                fontSize: "16px",
                lineHeight: 1.9,
                marginBottom: "32px",
              }}
            >
              Dicka, promu franchisé à l&apos;âge de 24 ans, nous vient tout droit de
              Guadeloupe. Arrivé en Bretagne seul à l&apos;âge de 16 ans pour rejoindre
              l&apos;équipe de France de Kayak, il a su tirer le meilleur de son
              expérience et mettre ses compétences au profit de son opportunité au
              sein de l&apos;entreprise.
            </p>

            <p
              style={{
                color: "#bbb",
                fontSize: "16px",
                lineHeight: 1.9,
              }}
            >
              Depuis sa récente création, l&apos;entreprise a réalisé en 5 mois plus
              de{" "}
              <span style={{ color: "#c8a97e", fontWeight: 600 }}>
                3 000 acquisitions clients
              </span>{" "}
              pour le compte de ses partenaires grâce au canal de la vente
              directe.
            </p>

            {/* Stat callout */}
            <div
              style={{
                marginTop: "56px",
                padding: "32px",
                border: "1px solid rgba(200,169,126,0.15)",
                borderRadius: "16px",
                background: "rgba(200,169,126,0.03)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  color: "#c8a97e",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                3 000+
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#888",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                acquisitions clients en 5 mois
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
