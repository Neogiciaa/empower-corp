"use client";

import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface City {
  name: string;
  x: number;
  y: number;
  active: boolean;
  href?: string;
}

const cities: City[] = [
  // Agences actives
  { name: "Rennes", x: 29, y: 35, active: true },
  { name: "Nantes", x: 30, y: 44, active: true, href: "https://maps.app.goo.gl/nantes-empower" },
  // Futures ouvertures
  { name: "Brest", x: 11, y: 33, active: false },
  { name: "Rouen", x: 44, y: 23, active: false },
  { name: "Tours", x: 43, y: 43, active: false },
  { name: "Angers", x: 36, y: 42, active: false },
];

function CityMarker({ city, index }: { city: City; index: number }) {
  const dot = (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
      style={{
        position: "absolute",
        left: `${city.x}%`,
        top: `${city.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {/* Dot + pulse ring wrapper */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {city.active && (
          <span
            style={{
              position: "absolute",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1px solid rgba(200, 169, 126, 0.3)",
              top: "50%",
              left: "50%",
              animation: "pulse-ring 2.5s ease-out infinite",
            }}
          />
        )}
        <span
          style={{
            width: city.active ? "12px" : "8px",
            height: city.active ? "12px" : "8px",
            borderRadius: "50%",
            background: city.active ? "#c8a97e" : "rgba(255,255,255,0.25)",
            border: city.active ? "2px solid rgba(200, 169, 126, 0.4)" : "1px solid rgba(255,255,255,0.15)",
            boxShadow: city.active ? "0 0 12px rgba(200, 169, 126, 0.4)" : "none",
          }}
        />
      </div>
      {/* Label */}
      <span
        style={{
          fontSize: "11px",
          fontWeight: city.active ? 600 : 400,
          color: city.active ? "#eee" : "#666",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
          textShadow: "0 1px 4px rgba(0,0,0,0.8)",
        }}
      >
        {city.name}
      </span>
    </motion.div>
  );

  if (city.href && city.active) {
    return (
      <a
        href={city.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
        title={`Voir l'agence de ${city.name} sur Google Maps`}
      >
        {dot}
      </a>
    );
  }

  return dot;
}

/* Accurate France outline path (viewBox 0 0 100 100) */
const francePath = `
  M 54,9
  C 52,10 50,11 49,12
  C 48,14 47,17 46,19
  C 44,21 42,22 40,23
  L 32,24
  C 31,22 30,21 29,22
  C 28,24 29,27 29,31
  C 26,31 22,30 20,30
  C 16,30 12,32 10,34
  C 9,36 10,37 14,37
  C 18,39 20,41 20,41
  C 22,42 25,43 25,46
  C 26,49 28,51 32,53
  C 32,58 32,62 32,67
  C 31,72 30,76 30,77
  C 29,78 28,79 31,81
  C 34,83 40,86 50,86
  C 55,86 58,83 58,80
  C 60,78 64,77 67,78
  C 72,79 76,80 82,78
  C 84,77 85,76 86,75
  C 86,72 84,68 82,64
  C 82,58 82,55 77,53
  C 80,48 84,42 85,40
  C 86,36 87,33 87,31
  C 88,28 88,27 77,24
  C 72,22 68,18 65,15
  C 62,13 58,11 54,9
  Z
`;

export default function FranceMap() {
  return (
    <section style={{ paddingTop: "100px", paddingBottom: "120px" }}>
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedSection>
              <p style={{ color: "#c8a97e", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
                Implantations
              </p>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 600, lineHeight: 1.3, marginBottom: "24px" }}>
                Notre présence en France
              </h2>
              <p style={{ color: "#999", fontSize: "15px", lineHeight: 1.85, marginBottom: "40px" }}>
                Empower Corp poursuit son développement avec des agences actives
                dans le Grand Ouest et de nouvelles ouvertures prévues prochainement.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div>
                <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px" }}>
                  Agences actuelles
                </p>
                {cities.filter(c => c.active).map((city, i) => (
                  <div
                    key={city.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 500 }}>{city.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      {city.href && (
                        <a
                          href={city.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: "11px", color: "#c8a97e", letterSpacing: "0.08em", textDecoration: "none", borderBottom: "1px solid rgba(200,169,126,0.3)" }}
                        >
                          VOIR SUR LA CARTE
                        </a>
                      )}
                      <span style={{ fontSize: "11px", color: "#c8a97e", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Active
                      </span>
                    </div>
                  </div>
                ))}

                <p style={{ fontSize: "11px", color: "#888", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "16px", marginTop: "40px" }}>
                  Futures ouvertures
                </p>
                {cities.filter(c => !c.active).map((city, i) => (
                  <div
                    key={city.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "18px 0",
                      borderTop: i === 0 ? "1px solid #1a1a1a" : "none",
                      borderBottom: "1px solid #1a1a1a",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 500, color: "#898989" }}>{city.name}</span>
                    <span style={{ fontSize: "11px", color: "#898989", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      Bientôt
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Map */}
          <AnimatedSection delay={0.2}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {/* France SVG outline */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}
              >
                <path
                  d={francePath}
                  fill="rgba(200, 169, 126, 0.04)"
                  stroke="rgba(200, 169, 126, 0.15)"
                  strokeWidth="0.4"
                  strokeLinejoin="round"
                />
              </svg>

              {/* City markers */}
              {cities.map((city, i) => (
                <CityMarker key={city.name} city={city} index={i} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @keyframes pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
