"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Notre activité", href: "/#activite" },
  { label: "Histoire", href: "/#histoire" },
  { label: "Parcours", href: "/#parcours" },
  { label: "FAQ", href: "/#faq" },
  { label: "Galerie", href: "/galerie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      const hash = href.split("#")[1];
      if (hash && isHome) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileOpen(false);
      }
    },
    [isHome]
  );

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          background:
            scrolled || !isHome ? "rgba(5,5,5,0.92)" : "transparent",
          backdropFilter: scrolled || !isHome ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled || !isHome ? "blur(24px)" : "none",
          borderBottom:
            scrolled || !isHome
              ? "1px solid rgba(255,255,255,0.04)"
              : "1px solid transparent",
        }}
      >
        <div
          className="container-main"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "17px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textDecoration: "none",
              color: "#eee",
              textTransform: "uppercase",
            }}
          >
            <Image
              src="/images/logo-empower.png"
              alt="Empower Corp"
              width={52}
              height={44}
              style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            Empower <span style={{ color: "#c8a97e" }}>Corp</span>
          </Link>

          <nav
            className="hidden md:flex"
            style={{ alignItems: "center", gap: "36px" }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  fontSize: "13px",
                  color: "#888",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#eee")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#rejoindre"
              onClick={(e) => handleNavClick(e, "/#rejoindre")}
              style={{
                padding: "9px 22px",
                background: "transparent",
                color: "#c8a97e",
                fontSize: "13px",
                fontWeight: 500,
                borderRadius: "6px",
                textDecoration: "none",
                border: "1px solid rgba(200,169,126,0.4)",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#c8a97e";
                e.currentTarget.style.color = "#050505";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#c8a97e";
              }}
            >
              Nous rejoindre
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            style={{
              background: "none",
              border: "none",
              color: "#eee",
              cursor: "pointer",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(5,5,5,0.97)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 40px",
            }}
            className="md:hidden"
          >
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {[{ label: "Accueil", href: "/" }, ...navLinks, { label: "Nous rejoindre", href: "/#rejoindre" }].map(
                (link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{
                        fontSize: "28px",
                        fontWeight: 300,
                        color: "rgba(238,238,238,0.7)",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
