"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src="/images/team-group.jpg"
          alt="Équipe Empower Corp"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
          priority
          fetchPriority="high"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.4) 40%, rgba(5,5,5,0.92) 80%, rgba(5,5,5,1) 100%)",
          }}
        />
      </div>

      <div
        className="container-main"
        style={{
          position: "relative",
          zIndex: 10,
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            color: "#c8a97e",
            fontSize: "13px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: 400,
          }}
        >
          Développement commercial &middot; Leadership &middot; Entrepreneuriat
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "700px",
          }}
        >
          Empower Corp
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          style={{
            marginTop: "24px",
            fontSize: "17px",
            color: "rgba(238,238,238,0.6)",
            maxWidth: "500px",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Nous formons une nouvelle génération de consultants commerciaux et de
          leaders, directement sur le terrain, en France et en Europe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          style={{
            marginTop: "36px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <Link
            href="/rejoindre"
            style={{
              padding: "14px 32px",
              background: "#c8a97e",
              color: "#050505",
              fontWeight: 600,
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              letterSpacing: "0.01em",
              transition: "background 0.3s",
            }}
          >
            Nous rejoindre
          </Link>
          <Link
            href="/activite"
            style={{
              padding: "14px 32px",
              border: "1px solid rgba(238,238,238,0.15)",
              color: "#ddd",
              fontWeight: 400,
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "14px",
              transition: "border-color 0.3s",
            }}
          >
            En savoir plus
          </Link>
        </motion.div>

        {/* Minimal stats line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            marginTop: "60px",
            display: "flex",
            gap: "48px",
            alignItems: "baseline",
          }}
        >
          {[
            { val: "50K+", label: "acquisitions", labelFirst: false },
            { val: "2019", label: "depuis", labelFirst: true },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
              {s.labelFirst && (
                <span style={{ fontSize: "12px", color: "#898989", letterSpacing: "0.03em" }}>
                  {s.label}
                </span>
              )}
              <span style={{ fontSize: "22px", fontWeight: 600, color: "#c8a97e" }}>
                {s.val}
              </span>
              {!s.labelFirst && (
                <span style={{ fontSize: "12px", color: "#898989", letterSpacing: "0.03em" }}>
                  {s.label}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
