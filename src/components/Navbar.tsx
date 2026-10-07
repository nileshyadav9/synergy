import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "../data/site";
import { MagneticButton } from "./MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 28);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <div className="navbar-inner page-width">
          <a
            className="brand"
            href="#top"
            aria-label={`${siteConfig.companyName} home`}
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>
              {siteConfig.companyName}
              <small>TECHNOLOGY PARTNERS</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {siteConfig.navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <MagneticButton href="#contact" className="nav-cta">
            Start a conversation <ArrowUpRight size={14} />
          </MagneticButton>
          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            {siteConfig.navigation.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
              >
                {item.label}
                <ArrowUpRight size={17} />
              </motion.a>
            ))}
            <a className="mobile-contact" href="#contact" onClick={closeMenu}>
              Start a conversation <ArrowUpRight size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
